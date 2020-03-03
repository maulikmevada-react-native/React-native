import React, { Component } from 'react';
import {
    TextInput,
    Image,
    ScrollView,
    View,
    Text,
    StatusBar,
    TouchableOpacity,
    Platform,
    ActivityIndicator,
    Keyboard,
    Alert,
    NativeModules,
    AppState,
    PermissionsAndroid,
    ImageBackground,
} from 'react-native';
import styles from './Loginstyale'
import * as AppConstants from '../Helper/AppConstants';
import SplashScreen from 'react-native-splash-screen'
import { KeyboardAwareView } from 'react-native-keyboard-aware-view';
import OfflineNotice from '../Helper/OfflineNotice';
import Toast, { DURATION } from 'react-native-easy-toast'
import { PostData, internet } from '../WebServices/webAPIRequest';
import API from "../WebServices/API";
import { AccessToken, LoginManager, GraphRequest, GraphRequestManager } from 'react-native-fbsdk';
import RNLocation from "react-native-location";
const { PlatformConstants } = NativeModules;
import DeviceInfo from 'react-native-device-info';
import LocationSwitch from '../../LocationSwitch';
import Geocoder from 'react-native-geocoder';
import GetLocation from 'react-native-get-location'
import AsyncStorage from '@react-native-community/async-storage';
import Permissions from 'react-native-permissions';
import * as PushNoty from '../Helper/PushNotifications';
import firebase, { Notification, NotificationOpen } from 'react-native-firebase';
import { TextField } from 'react-native-material-textfield';

// import geolocation from 'react-native-geolocation-service';

const Images = {
    Loginlogo: 'loginlogo',
    Loginbutton: 'loginbutton',
    Facebook: 'facebook',
    Loginbackground: 'loginbackground'
}
export default class App extends Component {
    stateq = {
        types: [],
        status: {},
        isAlways: ''
    }
    constructor(props) {
        super(props);
        this.state = {
            language: 'English (India)',
            UserName: '',
            Password: '',
            UserName1: false,
            Password1: false,
            deviceType: '',
            appState: AppState.currentState,
            directorterms: 1,
            firebasethoken: '',
            device_token: ''
        }

        global.appState = AppState.currentState;
        global.countryname = '';
        global.recording = '';
        global.recordingname = '';
        global.localaudio='';
        // this._handleAppStateChange = this._handleAppStateChange.bind(this);
    }
    componentDidMount() {
       
        firebase.messaging().getToken()
            .then((token) => {
                this.setState({ device_token: token });
                PushNoty.RegisterForPushNotification(this.props.navigation);
            });


    }
    componentWillMount() {
        firebase.messaging().getToken()
            .then((token) => {
                this.setState({ device_token: token });
                PushNoty.RegisterForPushNotification(this.props.navigation);
            });
    }




    FBGraphRequest(fields, callback) {
        const accessData = AccessToken.getCurrentAccessToken();
        const request = new GraphRequest('/me',
            {
                accessToken: accessData.accessToken,
                parameters: {
                    fields: {
                        string: fields
                    }
                }
            },
            (error, result) => {
                if (result) {
                    this.setState({ isLoading: true });
                    this.Facebooklogin(result.email, result.id, result.name)
                } else {
                    reject(error)
                }
            }
        )
        new GraphRequestManager().addRequest(request).start();
    }
    FacebookLogin() {
        try {
            if (Platform.OS == 'ios') {
                LoginManager.setLoginBehavior('browser');
            }
            else {
                LoginManager.setLoginBehavior('web_only');
            }
            LoginManager.logInWithPermissions(['public_profile', 'email']).then((result) => {
                if (result.isCancelled) {
                } else {
                    this.FBGraphRequest('id,email,picture.width(1024).height(1024),name', this.FBLoginCallback);
                }
            });
        } catch (nativeError) {
            try {
                LoginManager.setLoginBehavior('NATIVE_ONLY');
            } catch (webError) {
            }
        }
    }
    componentWillMount() {
        SplashScreen.hide();
        RNLocation.configure({
            distanceFilter: 100, // Meters
            desiredAccuracy: {
                ios: "best",
                android: "balancedPowerAccuracy"
            },
            // iOS Only
            activityType: "other",
            allowsBackgroundLocationUpdates: false,
            headingFilter: 1, // Degrees
            headingOrientation: "portrait",
            pausesLocationUpdatesAutomatically: false,
            showsBackgroundLocationIndicator: false,
        });
        internet().then((responseJson) => { global.isConnected = responseJson });
        if (Platform.OS == 'android') {
            if (Platform.Version > 22) {

                this._updatePermissions();
                // this._requestPermission('location');
            }
            else {
                this.locaiton();
            }
        }
        else {
            this._updatePermissions();
        }
    }
    componentWillUnmount() {
        this.setState({ isMounted: false });
    }

    async  _startUpdatingLocation() {

        if (Platform.OS == 'android') {
            PermissionsAndroid.request(
                PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION, {
                title: 'App needs to access your location',
                message: 'App needs access to your location ' +
                    'so we can let our app be even more awesome.'
            }
            );
        }

        // GetLocation.getCurrentPosition({
        //     enableHighAccuracy: true,
        //     timeout: 15000,
        // })
        // .then(location => {
        // })
        // .catch(error => {
        //     const { code, message } = error;
        // })
        RNLocation.requestPermission({
            ios: "whenInUse",
            android: {
                detail: "coarse"
            }
        }).then(granted => {
            this.locationSubscription = RNLocation.subscribeToLocationUpdates(
                (locations) => {
                    global.lat = locations[0].latitude;
                    global.long = locations[0].longitude;
                    Geocoder.geocodePosition({ lat: locations[0].latitude, lng: locations[0].longitude }).then((res) => {
                        AppConstants.countryname = res[0].country;
                    }).catch((error) => {
                        AppConstants.logError(error);
                    });
                }
            );
        });

    };
    _handleAppStateChange = (nextAppState) => {
        if (this.state.appState.match(/inactive|background/) && nextAppState === 'active') {
            // this._updatePermissions(this.stateq.types)

        }
        this.setState({ appState: nextAppState });
        global.appState = nextAppState;
    };

    _updatePermissions = () => {
        Permissions.check('location')
            .then((status) => {
                if (status == 'authorized') {
                    this.locaiton();
                }
                else {
                    SplashScreen.hide();
                    this._requestPermission('location');
                }
            })

    }

    _requestPermission = (permission) => {
        var options = 'whenInUse';
        Permissions.request(permission, options)
            .then(() => {
                this.locaiton();
            }).catch((error) => {

            })
    }

    locaiton() {
        LocationSwitch.isLocationEnabled(
            () => {
                this.Prafrancevalueget();
                this._startUpdatingLocation();
            },
            () => {
                Alert.alert(
                    'Location Services',
                    'Please keep the Location Service on',
                    [
                        { text: 'Cancel', onPress: () => { SplashScreen.hide(); } },
                        {
                            text: 'OK', onPress: () => {
                                LocationSwitch.enableLocationService(1000, true,
                                    () => {

                                        this._startUpdatingLocation();
                                    },
                                    () => {

                                    });
                            }
                        },
                    ],
                    { cancelable: false }
                )
            },
        );
    }
    Prafrancevalueget() {
        AsyncStorage.getItem('director')
            .then((user) => {
                if (user) {
                    const userObject = JSON.parse(user);
                    global.firstname = userObject.firstname
                    global.lastname = userObject.lastname
                    global.email = userObject.email
                    global.phone = userObject.phone
                    global.token = userObject.authToken
                    this.props.navigation.replace(AppConstants.SCREENS.DASHBOARD);
                } else {
                    SplashScreen.hide();
                    AsyncStorage.clear();
                    global.firstname = '';
                    global.lastname = '';
                    global.email = '';
                    global.phone = '';
                    global.token = '';
                    global.countryname = '';
                }
                
            }).catch((error) => {
                AppConstants.logError(error);
            });
            AsyncStorage.getItem('notificationasync').then((user) => {
                console.log('notificationasync', JSON.parse(user))
                if (user) {
    
                    const userObject = JSON.parse(user);
                    console.log('notificationasync', userObject.notification_status)
                    global.notificaton = userObject.notification_status;
                } else {
                    global.notificaton = '';
                }
            }).catch((error) => {
                console.log('error', error)
            });
        this.setState({ deviceType: Platform.OS == 'ios' ? PlatformConstants.interfaceIdiom : DeviceInfo.getType() })
    }
    validateEmail = Email => {
        var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        return re.test(Email);
    };
    validator = () => {
        if (this.state.UserName == '') {
            this.setState({ UserName1: true })
            // this.refs.toast.show(AppConstants.Messages.NOUSERNAME, DURATION.LENGTH_LONG);
        }
        else if (this.state.Password == '') {
            this.setState({ Password1: true })
            // this.refs.toast.show(AppConstants.Messages.NOPASSWORD, DURATION.LENGTH_LONG);
        }

        else {
            this.WSlogin()
        }
    }

    WSlogin() {
        Keyboard.dismiss();
        if (global.isConnected) {
            this.setState({ isLoading: true });
            APIData = JSON.stringify({
                user_name: this.state.UserName,
                password: this.state.Password,
                request_from: 'Director',
                device_token: this.state.device_token

            });
            PostData(API.login, APIData)
                .then((responseJson) => {
                    this.setState({
                        isLoading: false,
                        UserName: '',
                        Password: ''
                    });
                    if (responseJson.statusCode == 1) {
                        global.firstname = responseJson.user_data.first_name
                        global.lastname = responseJson.user_data.last_name
                        global.email = responseJson.user_data.email_address
                        global.phone = responseJson.user_data.phone_no
                        global.token = responseJson.token
                        AsyncStorage.setItem('director', JSON.stringify({
                            authToken: responseJson.token,
                            firstname: responseJson.user_data.first_name,
                            lastname: responseJson.user_data.last_name,
                            email: responseJson.user_data.email_address,
                            phone: responseJson.user_data.phone_no,
                            profilepik: '',
                            userType: responseJson.userType,
                            directorstatuscode: responseJson.user_data.accept_tc_status
                        }));
                        AsyncStorage.setItem('profilestatus', JSON.stringify({ profilestatus: responseJson.profile_complete_status }));
                        global.notificaton = responseJson.user_data.notification_status;
                        AsyncStorage.setItem('notificationasync', JSON.stringify({
                            notification_status: responseJson.user_data.notification_status,

                        }));
                        this.props.navigation.replace(AppConstants.SCREENS.DASHBOARD);
                    }
                    else {
                        if (responseJson.userStatus == 'NotVerified') {
                            global.userid = responseJson.userId;
                            Alert.alert(responseJson.message, ' Please Resend OTP',
                                [
                                    {
                                        text: 'Cancel',
                                        onPress: () => { },
                                        style: 'cancel',
                                    },
                                    { text: 'OK', onPress: () => this.WSResendOTP() },
                                ],
                                { cancelable: false });
                        }
                        else {
                            Alert.alert(responseJson.message);
                        }
                    }
                }).catch(() => {
                    this.setState({ isLoading: false });
                    Alert.alert(AppConstants.Messages.APIERROR);
                    // this.refs.toast.show(AppConstants.Messages.APIERROR, DURATION.LENGTH_LONG);
                });
        }
    }
    Facebooklogin(email, id, name) {
        Keyboard.dismiss();
        if (global.isConnected) {
            APIData = JSON.stringify({
                email_address: email,
                id: id,
                name: name,
                image_url: "http://graph.facebook.com/" + id + "/picture?type=large",
                device_id: AppConstants.DeviceID,
                plaform_type: (Platform.OS === 'ios' ? 'iOS' : 'Android'),
                device_type: 'phone',
                request_from: 'Director',
                device_token: this.state.device_token
            });
            PostData(API.Facebooklogin, APIData)
                .then((responseJson) => {
                    this.setState({ isLoading: false });
                    if (responseJson.statusCode == 1) {
                        global.firstname = responseJson.user_data.first_name
                        global.lastname = responseJson.user_data.last_name
                        global.email = responseJson.user_data.email_address
                        global.phone = responseJson.user_data.phone_no
                        global.token = responseJson.token
                        AsyncStorage.setItem('director', JSON.stringify({
                            authToken: responseJson.token,
                            firstname: responseJson.user_data.first_name,
                            lastname: responseJson.user_data.last_name,
                            email: responseJson.user_data.email_address,
                            phone: responseJson.user_data.phone_no,
                            profilepik: '',
                            userType: responseJson.userType,
                            directorstatuscode: responseJson.user_data.accept_tc_status
                        }));
                        global.notificaton = responseJson.user_data.notification_status;
                        AsyncStorage.setItem('notificationasync', JSON.stringify({
                            notification_status: responseJson.user_data.notification_status,

                        }));
                        AsyncStorage.setItem('profilestatus', JSON.stringify({ profilestatus: responseJson.profile_complete_status }));
                        this.props.navigation.replace(AppConstants.SCREENS.DASHBOARD);
                    }
                    else {
                        Alert.alert(responseJson.message);
                    }
                }).catch((error) => {
                    this.setState({ isLoading: false });
                    Alert.alert(AppConstants.Messages.APIERROR);
                });
        }
    }
    GetCountry() {
        this.setState({ isLoading: true });
        const APIData = JSON.stringify({

        });
        PostData(API.Getcountrycode, APIData)
            .then((responseJson) => {
                this.setState({ isLoading: false });
                var arr = [];
                responseJson.data.map((data) => {
                    arr.push({
                        value: data.country_code,
                        coutryname: data.country_name
                    })
                });
                this.props.navigation.navigate(AppConstants.SCREENS.SIGNUP, { cuntrycode: arr })

            })
            .catch(() => {

                this.setState({ isLoading: false });
                Alert.alert(AppConstants.Messages.APIERROR);
            });
        // }
    }
    WSResendOTP() {
        Keyboard.dismiss();
        if (global.isConnected) {
            this.setState({ isLoading: true });
            APIData = JSON.stringify({
                user_id: global.userid,
                action: 'resend_otp',
            });
            PostData(API.userVerifyotp, APIData)
                .then((responseJson) => {
                    this.setState({ isLoading: false });
                    if (responseJson.statusCode == 1) {
                        global.otp = responseJson.otp;
                        this.props.navigation.navigate(AppConstants.SCREENS.OTP)
                    }
                    else {
                        Alert.alert(responseJson.message);
                    }
                }).catch(() => {
                    this.setState({ isLoading: false });
                    this.refs.toast.show(AppConstants.Messages.APIERROR, DURATION.LENGTH_LONG);
                });
        }

    }

    resetState(valueenter) {
        this.setState({ directorterms: 1 });
        this.DirectorTermsandcondition();
    }
    DirectorTermsandcondition() {
        Keyboard.dismiss();
        if (global.isConnected) {
            this.setState({ isLoading: true });
            APIData = JSON.stringify({
                accept_tc_status: '1',
            });
            PostData(API.UpdateDirectorAcceptTCStatus, APIData)
                .then((responseJson) => {
                    this.setState({
                        isLoading: false,
                    });
                    if (responseJson.statusCode == 1) {
                        this.props.navigation.navigate(AppConstants.SCREENS.DIRECTORPROFILE);
                    }
                    else {
                        Alert.alert(responseJson.message);
                    }
                }).catch(() => {
                    this.setState({ isLoading: false });
                    this.refs.toast.show(AppConstants.Messages.APIERROR, DURATION.LENGTH_LONG);
                });
        }
    }
    reset() {
        AsyncStorage.clear();
        this.setState({ directorterms: 1 });
    }
    render() {
        return (
            <View style={styles.mainContainer}>
                <KeyboardAwareView doNotForceDismissKeyboardWhenLayoutChanges={true}>
                    <StatusBar barStyle="light-content" backgroundCopr={AppConstants.SHADOWCOLORS.INTRO} animated translucent></StatusBar>
                    <OfflineNotice />
                    <View style={styles.mainContainer}>
                        <ImageBackground source={{ uri: Images.Loginbackground }} style={styles.mainContainer}>
                            <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
                                <Toast
                                    ref="toast"
                                    style={[AppConstants.CommonStyles.ToastStyle, { justifyContent: 'flex-end', height: AppConstants.getDeviceHeight(8), }]}
                                    position="top"
                                    positionValue={AppConstants.getDeviceHeight(0)}
                                    fadeInDuration={750}
                                    fadeOutDuration={1000}
                                    textStyle={AppConstants.CommonStyles.ToastTextStyle} />

                                <View style={styles.logoContainer}>
                                    <Image style={styles.lginlogo} source={{ uri: Images.Loginlogo }} />
                                </View>
                                <View style={styles.textboxContainer}>
                                    <TextField style={styles.textboxText}
                                        label="Phone number or Email address"
                                        placeholderTextColor={AppConstants.COLORS.PLACEHOLDARLOGIN}
                                        underlineColorAndroid="transparent"
                                        returnKeyType={"next"}
                                        value={this.state.UserName}
                                        autoCapitalize="none"
                                        tintColor={AppConstants.COLORS.LANGAUGE}
                                        baseColor={AppConstants.COLORS.LANGAUGE}
                                        labelFontSize={AppConstants.moderateScale(12)}
                                        fontSize={AppConstants.moderateScale(12)}
                                        labelTextStyle={{paddingLeft: AppConstants.getDeviceWidth(1),}}

                                        error={this.state.UserName1 == true ?AppConstants.Messages.NOUSERNAME:null}
                                        onSubmitEditing={() => {
                                            this.refs.Password.focus();
                                        }}
                                        onChangeText={(UserName) => {
                                            this.setState({ UserName, UserName1: false })
                                        }} />
                                    {/* <View style={{
                                        width: AppConstants.getDeviceWidth(87),
                                        height: AppConstants.getDeviceHeight(0.1),
                                        backgroundColor: AppConstants.COLORS.LANGAUGE,
                                    }}></View>
                                    {this.state.UserName1 == true ? <Text style={AppConstants.CommonStyles.errorcolor}>{AppConstants.Messages.NOUSERNAME}</Text> : null} */}
                                </View>
                                <View style={styles.textboxContainer1}>
                                    <TextField style={styles.textboxText}
                                        label="Password"
                                        placeholderTextColor={AppConstants.COLORS.PLACEHOLDARLOGIN}
                                        underlineColorAndroid="transparent"
                                        returnKeyType={"done"}
                                        blurOnSubmit={false}
                                        value={this.state.Password}
                                        autoCapitalize="none"
                                        secureTextEntry={true}
                                        tintColor={AppConstants.COLORS.LANGAUGE}
                                        baseColor={AppConstants.COLORS.LANGAUGE}
                                        labelFontSize={AppConstants.moderateScale(12)}
                                        fontSize={AppConstants.moderateScale(12)}
                                        labelTextStyle={{paddingLeft: AppConstants.getDeviceWidth(1),}}
                                        error={this.state.Password1 == true ?AppConstants.Messages.NOPASSWORD:null}
                                        onSubmitEditing={() => {
                                            Keyboard.dismiss();
                                        }}
                                        ref='Password'
                                        onChangeText={(Password) => {
                                            this.setState({ Password, Password1: false })
                                        }} />
                                    {/* <View style={{
                                        width: AppConstants.getDeviceWidth(87),
                                        height: AppConstants.getDeviceHeight(0.1),
                                        backgroundColor: AppConstants.COLORS.LANGAUGE,
                                    }}></View>
                                    {this.state.Password1 == true ? <Text style={AppConstants.CommonStyles.errorcolor}>{AppConstants.Messages.NOPASSWORD}</Text> : null} */}

                                </View>
                                <View >
                                    <TouchableOpacity style={styles.loginbuttonview} onPress={() => {
                                        if (this.state.device_token == '') {
                                            firebase.messaging().getToken()
                                                .then((token) => {
                                                    this.setState({ device_token: token });
                                                    PushNoty.RegisterForPushNotification(this.props.navigation);
                                                    this.validator();
                                                });
                                        }
                                        else {
                                            this.validator();
                                        }
                                    }}>
                                        <Text style={styles.logintext}>Login
                                </Text>
                                    </TouchableOpacity>
                                </View>
                                <View style={styles.forgotlogin}>
                                    <TouchableOpacity style={styles.forgotlogin} onPress={() => { this.props.navigation.navigate(AppConstants.SCREENS.FORGOTPASWORD) }}>
                                        <Text style={styles.forgottext}>Forgot your login details?
                                </Text>
                                    </TouchableOpacity>
                                </View>
                                <View style={{ width: AppConstants.getDeviceWidth(90), justifyContent: 'center', flexDirection: 'row', alignItems: 'center', marginTop: AppConstants.getDeviceHeight(5) }}>
                                    <View style={styles.line}>
                                    </View>
                                    <Text style={styles.or}> OR
                                </Text>
                                    <View style={{ width: AppConstants.getDeviceWidth(43), backgroundColor: AppConstants.COLORS.LOGINCOLOR, height: AppConstants.getDeviceHeight(0.2) }}>
                                    </View>
                                </View>
                                <TouchableOpacity onPress={() => { this.FacebookLogin(); }}>
                                    <View style={styles.Facebooklogin}>
                                        <Image source={{ uri: Images.Facebook }} style={{ alignSelf: 'center', height: AppConstants.getDeviceHeight(4), width: AppConstants.getDeviceHeight(4) }} />
                                        <Text style={styles.facebooktext}>Log in with facebook account
                                </Text>
                                    </View>
                                </TouchableOpacity>
                                <View style={styles.Createaccount}>
                                    <TouchableOpacity style={styles.Createaccount} onPress={() => {
                                        this.GetCountry();

                                    }}>
                                        <Text style={styles.donthaveaccont}>Don't have an account?
                                    </Text>
                                        <Text style={styles.Signup}>SIGN UP
                                    </Text>
                                    </TouchableOpacity>
                                </View>
                            </ScrollView>
                        </ImageBackground>
                    </View >

                </KeyboardAwareView>
                {this.state.isLoading ? <View style={AppConstants.CommonStyles.spinner}>
                    <ActivityIndicator size='large' color={AppConstants.COLORS.SIGNUP}></ActivityIndicator>
                </View> : null}

            </View>
        );
    }
}


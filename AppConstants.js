import React from "react";
import {
    Dimensions,
    Platform,
    StatusBar,
    StyleSheet,
    View,
    Alert,
    ActivityIndicator,
    Text,
    TouchableHighlight,
} from 'react-native';
import DeviceInfo, { getUniqueId, getTimezone } from "react-native-device-info";
import Iconss from "react-native-vector-icons/AntDesign";
import AsyncStorage from '@react-native-community/async-storage';

// import firebase from 'react-native-firebase';
import moment from 'moment';
const { width, height } = Dimensions.get('window');

const guidelineBaseWidth = 350;
const guidelineBaseHeight = 680;
const scale = size => width / guidelineBaseWidth * size;
const verticalScale = size => height / guidelineBaseHeight * size;
const moderateScale = (size, factor = 0.5) => size + (scale(size) - size) * factor;

export { scale, verticalScale, moderateScale };
export const DeviceName = DeviceInfo.getDeviceName();
export const Timezone = getTimezone;
export var countryname = '';

export const DeviceID = DeviceInfo.getUniqueId();

// export const ID = 'UserID';
// export const USERNAME = 'UserName';
// export const SRNO = 'sequenceno';
// export const Name = 'studentname';
// export const AppName = 'Fuzzy';
// export const User_LastSyncAt = 'User_LastSyncAt';
// export const Search_LastSyncAt = 'Search_LastSyncAt';
// export const ChatList_LastSyncAt = 'ChatList_LastSyncAt';
// export const Chat_LastSyncAt = 'Chat_LastSyncAt';
// export const ProfilePicPathPrefix = Platform.OS == 'ios' ? '' : 'file:///';
// export const ProfilePicPath = RNFetchBlob.fs.dirs.DocumentDir + '/ProfilePics/' + global.userid + '.png';

export const SCREENS = {

    LOGIN: 'Login',
    DASHBOARD: 'Dashboard',
    SIGNUP: 'Signup',
    OTP: 'Otp',
    DIRECTORPROFILE: 'Directorprofile',
    FORGOTPASWORD: 'Forgotpasword',
    DIRECTORSEARCH: 'Directorsearch',
    DIRECTONOTIFICATION: 'Directonotification',
    TERMSANDCONDITION: 'TermsandCondition',
    PROFILE: 'Profile',
    CREATPROJECT: 'CreateProject',
    PROJECTDETAIL:'Projectdetail',
    ADDROLE:'Createrole',
    VIEWROLE:'ViewRoleDetail',
    MORE:'More',
    VIEWAUDITIONLIST1:'Auditionlist',
    VIEWAUDITION:'ViewAudition',
    PROFILEREQIESTLIST:'ProfileRequest',
    VIEWARTISTPROFILE:'ViewArtistProfile',
    CHANGEPASSWORD:'ChangePassword',
    AUDITIONREQUESTLIST:'AuditionRequestlist',
    SHORTLIST:'Shortlist',
    ACTROVIDEO:'ActorVideo',
    DIRECTORWORKLINK:'DirectorWorklink',
    WORKLINK:'WorkLink',
    ACTORPHOTO:'ActorPhoto',
    AUDIORECROD:'Audiorecord',
    AUDIOPLYER:'Audioplyer',
    ABOUTUS:'Aboutus',
    VIEWAUDIOTNLIST:'ViewAuditionlist',
    ALLONGOINGPROJECT:'Ongoingprojectlist'

}


export const Messages = {
    NOINTERNET: 'You are not connected to internet, please try again',
    NOEMAILINVALIDEMAILADDRESS: 'Please enter valid Email Address',
    NOPASSWORD: 'Please enter Password',
    NOPASSWORDfor: 'Please enter minimum 4 digit Password',
    NOUSERNAME: 'Please enter Email Id',
    NONEWPASSWORD: 'Please enter New Password',
    NOCONFIRMPASSWORD: 'Please enter Confirm Password',
    OLDPASSWORD:'Please enter Old Password',
    PASSWORDSHOULDMATCH: 'New and Confirm Password should be same',
    FIRSTNAME: 'Please enter First Name',
    LASTNAME: 'Please enter Last Name',
    NOEMAIL: 'Please enter valid Email Address.',
    MOBILENONOTANUMBER: 'Please enter valid contact number, it can not be blank or exceed 15 characters.',
    COUNTRYCODE: 'Please select Country Code',

    NOPROFILEPHOTO: 'Please select a Profile Picture',
    NOHEIGHT: 'Please select Height',
    NODATEOFBIRTH: 'Please select Date of Birth',
    SCREENAGE: 'Please select Screen Age',
    GENDAR: 'Please Select Gender',
    BODYTYPE: 'Please select Body Type',
    FIRSTLANGUAGE: 'Please select First Language',
    OTHERLANGUAGE: 'Please select Other Languages Known',
    NOOTP: 'Please enter OTP',
    OTPMTACH: 'OTP is incorrect, please try again',
    SKILL: 'Please select Skills',
    VIDEO: 'Please upload your Intro Video',
    IMAGEONE: 'Please select First picture',
    IMAGETWO: 'Please select Second picture',
    IMAGETHREE: 'Please select Third picture',
    WORKLINK: 'Please add at least one work link',
    LINK: 'Please enter valid link',
    APIERROR: 'Error Processing Data. Please try again',
    TREMS: 'Please agree to Terms & Conditions',
    COMPANYNAME: 'Please enter Company Name',
    PROFILE: 'Please enter Profile',
    ENTERSKILL: 'Please enter Skill',
    DESCRIPTION: 'Please enter Description',
    STATE: 'Please select State',
    CITY: 'Please select City',
    PROJECTTITLE:'Please enter Project Title',
    PRODUCATIONHOUSENAME:'Please enter Producation house name',
    STARTDATE:'Please select Start Date',
    ENDDATE:'Please select End Date',
    ENTERROLE:'Please enter Role Title',
    PROJECT:'Please select Project.',
    ROLE:'Please select Role.',
    AUDIOFILE:'Please Upload Audio File',
    SCRIPT:'Please Upload Script',
    COMMENT:'The Comment field is required'

}

export const COLORS = {
    LANGAUGE: '#B5B6B8',
    BLACK: '#000000',
    PLACEHOLDARTEXT: '#1A1C22',
    FORGOTTEXT: '#777776',
    FACEBOOK: '#278AD2',
    WHITE: '#FFF',
    SIGNUP: '#E6D4AF',
    RED: 'red',
    HEDARBACKGROUND: '#424242',
    PROFILEBACKGROUND: '#3B3A3A',
    PROFILETEXINPUT: '#DADADA',
    LINEARGRADIENT_2: "#39A749",
    PROFILEINACTIVEPROFILEBACKGROUND: '#3B3A3A',
    PROFILEINACTIVE: '#D4AB63',
    PLACEHOLDAR: '#808080',
    LOGINCOLOR: '#87734E',
    PLACEHOLDARLOGIN: '#8B8B8B',
    datecolor: '#919193',
    BACKHOME: '#DBDDDE',
    VIEWBACKGROUND:'#f5f6f7',
    Loginback: '#3C3C3C',
    lightback:'#f8f9fa',
    LINE:'#EEEFF0'

}

export const SHADOWCOLORS = {
    LOGO_SHADOW: 'rgba(0,0,0,0.3)',
    STATUSBAR_SHADOW: "rgba(0, 0, 0, 0.20)", //backgroundColor={AppConstants.SHADOWCOLORS.STATUSBAR_SHADOW}
    PATITION_LINE: 'rgba(0,0,0,0)', //BLOCKUSER,MATCHES,CHATLIST
    BLACK_1: 'rgba(0,0,0,0.5)',
    BUTTON_SHADOW: 'rgba(0,0,0,0.13)',
    TEXT_SHADOW: 'rgba(0,0,0,0.19)',
    IMAGE_SHADOW: 'rgba(0,0,0,0.17)',
    ORANGE: 'rgba(0,0,0 ,0.09)',
    TOPCONTAINER_SHADOW: 'rgba(0,0,0,0.14)', //FIRSTPOPUP,FIRSTPOPUP,THIRDPOPUP,FORTHPOPUP,SETTING
    CARD_SHADOW: 'rgba(0,0,0,0.2)', //PROFILE,SEARCH
    PURPLE: 'rgba(74,0,224,0.33)',
    ACTIVEBAR_BG: 'rgba(26,31,81,0.22)',
    GREY: 'rgba(194,194,194,0.33)',
    INTRO: '#F3F3F3',
    STATUSBAR: 'rgba(100, 100, 100, 0.0)',
    SIDEMENU_UNDERLINE: 'rgba(0,0,0,0.22)',
}
export let LANGAUGE = [{
    value: 'English',
}, {
    value: 'Hindi',
},
{
    value: 'Gujarati',
},];
export const FONTSIZE = {
    FS9: 9,
    FS10: 10,
    FS11: 11,
    FS12: 12,
    FS13: 13,
    FS14: 14,
    FS15: 15,
    FS16: 16,
    FS17: 17,
    FS18: 18,
    FS19: 19,
    FS20: 20,
    FS21: 21,
    FS22: 22,
    FS24: 24,
    FS25: 25,
    FS26: 26,
    FS27: 27,
    FS28: 28,
    FS30: 30,
    FS19: 19,
    PLANVIEWTEXT: 13,
    TEXTVIEWTEXT: 16,
    BUTTONTEXT: 17,
    SPLASHTITLE: 18,
    SIDEMENUTEXT: 18,
    SIDEMENU: 20,
}
export const WEIGHT = {
    FONTWEIGHT: '800',
    FONTWEIGHT1: '500',
    FONTWEIGHT2: '300',
}
export const LINEHEIGHT = {
    LINEHEIGHT_13: 13,
    LINEHEIGHT_18: 18,
    LINEHEIGHT_21: 21,
    LINEHEIGHT_22: 22,
    LINEHEIGHT_34: 34,
}
export const SHADOWRADIUS = {
    BUTTON_SHADOWRADIUS: 13,
    TEXT_SHADOWRADIUS: 9,
    BUTTON_SHADOWRADIUS_1: 0,
    ELEVATION: 2,
}
export const BORDERRADIUS = {
    BUTTON_BORDERRADIUS: 23,
    CARD_BORDERRADIUS: 11,
    CARD_TOP_BORDERRADIUS: 14,
    IMAGE_BORDERRADIUS: 64,
    ACTIVEBAR_BORDERRADIUS: 21,
    PLAN_BORDERRADIUS: 34,
    DELETE_POPUPRADIUS: 10,
    SLIDER_BORDERRADIUS: 20,
    IMAGE_BORDERRADIUSPROFILEPHOTO: 400
}
export const RADIUS = {
    TEXTBOXRADIUS: 23,
    BUTTONRADIUS: 11,
    TEXTSHADOW: 9,
    BUTTONSHADOW: 13,
}
export const webclinetid = {
    android: '152836859746-et0u270cdkdur13lfoe2v6pp07t0gedr.apps.googleusercontent.com',
    ios: '152836859746-krombq3uv01ao08ag211rlhne23m6ai9.apps.googleusercontent.com'
}
export const FONTFAMILY = {
    fontFamily_1: 'Roboto',
    fontFamily_2: 'Roboto'
}
export const LETTERSPACING = {
    TOPTEXT: -0.41
}
export const SHADOWOFFSET = {
    BUTTON_SHADOWOFFSET: { wigth: 0, height: 5 },
    TEXT_SHADOWOFFSET: { wigth: 0, height: 2 },
}

Number.prototype.pad = function (size) {
    var s = String(this);
    while (s.length < (size || 2)) { s = "0" + s; }
    return s;
}

const deviceHeight = (Dimensions.get('window').height >= 812 ? Dimensions.get('window').height : Dimensions.get('window').height) * 0.01;
const deviceWidth = Dimensions.get('window').width * 0.01;
const statusBarHeight = Platform.OS === 'ios' ? (Dimensions.get('window').height >= 812 ? 40 : 20) : StatusBar.currentHeight;

export function getDeviceHeight(heightInPercentage, includeStatusbar) {
    return includeStatusbar ? statusBarHeight + (deviceHeight * heightInPercentage) : deviceHeight * heightInPercentage;
}
export function getDeviceWidth(widthInPercentage) {
    return deviceWidth * widthInPercentage;
}

export function isiPhoneX() {
    return Dimensions.get('window').height >= 812 ? true : false
}

export function setScreenName(navigation) {
    tracker.setCurrentScreen(navigation.state.routeName);
}

export function logError(error) {
    let Message = '';
    if (typeof (error) == 'string') {
        Message = error;
    }
    else {
        Message = error.name ? 'Name : ' + error.name + '\n' : '';
        Message = error.message ? 'Message : ' + error.message + '\n' : '';
        Message = error.stack ? 'Staci : ' + error.stack : '';
    }
}
export function CheckUserProfilePic() {
    // RNFetchBlob.fs.exists(ProfilePicPathPrefix + ProfilePicPath).then((exists) => {
    //     return exists;
    // })
}
export let Gender = [{
    value: 'Male',
}, {
    value: 'Female',
},
];

// export const DownloadProfilePic = (URL) => new Promise((resolve, reject) => {
//     RNFetchBlob
//         .config({
//             path: ProfilePicPath
//         })
//         .fetch('GET', URL, {

//         })
//         .then((res) => {
//             resolve(res);
//         })
//         .catch((error) => {
//             reject(error)
//         })
// });

// export function firbasesignup(email) {
//     return firebase1.auth().createUserWithEmailAndPassword(email, '123456')
//         .then((authData) => {
//             return authData;
//         }).catch(function (error) {
//             return error;
//         });
// }

// export function firbaselogin(email) {
//     return firebase1.auth().signInWithEmailAndPassword(email, '123456')
//         .then((resp) => {
//             return resp;
//         }).
//         catch(function (error) {
//             return 'false';
//         });
// }

export function BackButton(navigation) {
    return <Iconss
        onPress={() => navigation.goBack()}
        name="left"
        style={{ marginLeft: getDeviceWidth(4), marginTop: getDeviceHeight(navigation.getParam('header') != null && !navigation.getParam('header') ? 5.8 : Platform.OS === 'ios' ? 0 : 5) }}
        size={moderateScale(FONTSIZE.FS22)}
        color={COLORS.WHITE}
    />
}
export function ProfileIcon(navigation) {
    return (
        <View style={{ flexDirection: 'row', }}>

            <TouchableHighlight style={{ marginRight: getDeviceWidth(2), marginTop: getDeviceHeight(navigation.getParam('header') != null && !navigation.getParam('header') ? 5.8 : Platform.OS === 'ios' ? 0.5 : 5), backgroundColor: COLORS.PROFILEINACTIVE, }} onPress={() => {
                navigation.navigate(SCREENS.CREATPROJECT);
            }}>
                <View style={{ width: Platform.isPad==true?getDeviceWidth(20):getDeviceWidth(25), justifyContent: 'center', height: Platform.isPad==true?getDeviceHeight(3):getDeviceHeight(4), backgroundColor: COLORS.PROFILEINACTIVE, marginRight: getDeviceWidth(2), }}>
                    <Text style={{ color: COLORS.PROFILEBACKGROUND, fontFamily: FONTFAMILY.fontFamily_1, fontSize: FONTSIZE.FS12, fontWeight: 'bold', justifyContent: 'center', alignSelf: 'center', }}>+ Create Project</Text>
                </View>
            </TouchableHighlight>

        </View>)
}
// export function DrawerButton(navigation) {
//     return <Iconss
//         onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
//         name="menu"
//         style={{ marginLeft: getDeviceWidth(4), marginTop: getDeviceHeight(navigation.getParam('header') != null && !navigation.getParam('header') ? 5.8 : Platform.OS == 'ios' ? 0 : 2) }}
//         size={moderateScale(FONTSIZE.FS25)}
//         color={COLORS.WHITE}
//     />
// }

export function GetCurrentDateUTC() {
    return moment.utc(new Date()).format('DD-MM-YYYY');
}
export function GetCurrentDateUTC1() {
    return moment.utc(new Date()).format('DD/MM/YYYY');
}
export function Getdateformate(date) {
    return moment(date).format("MMM DD YYYY");
}

// export function GetDateTimeFromUTC(date) {
//     return moment(date).local().format("YYYY-MM-DD HH:mm:ss");
// }

// export function GetCurrentDate() {
//     return moment(new Date()).format('YYYY-MM-DD HH:mm:ss');
// }

export function GetCurrentDateTimeUKFormat(dt) {
    return moment(dt).format("DD-MM-YYYY HH:mm:ss A");
}

// export function GetCurrentTimeOnly() {
//     return moment(new Date()).format("HH:mm A");
// }

export function GetCurrentDateOnlyUKFormat(dt) {
    return moment(dt).format("DD/MM/YYYY");
}

// export function GetDateWithMyFormat(Format) {
//     return moment(new Date()).format(Format);
// }

// export function GetReferenceDate(dt) {
//     const Difference = Math.round(moment(new Date()).diff(dt,'days', true));
//     return Difference == 0 ? 'Today' : (Difference == 1 ? 'Yesterday' : (Difference > 1 && Difference < 7 ?  moment(dt).local().format('dddd') : moment(dt).local().format("ddd, DD MMM")));
// }

// export function GetWhatsappDate(dt){
//     return dt
// }

export function ShowActivityIndicator() {
    return (
        <View style={CommonStyles.spinner}>
            <ActivityIndicator size='large' ></ActivityIndicator>
        </View>
    )
}
export const CommonStyles = StyleSheet.create({
    ToastStyle: {
        backgroundColor: COLORS.RED,
        borderRadius: 0,
        width: getDeviceWidth(100),
        height: getDeviceHeight(6),
        padding: 0,
        justifyContent: 'center',
        alignItems: 'center',
    },
    ToastStyle1: {
        backgroundColor: COLORS.RED,
        borderRadius: 0,
        width: getDeviceWidth(100),
        height: getDeviceHeight(10),
        padding: 0,
        justifyContent: 'center',
        alignItems: 'center',
    },
    ToastStyle2: {
        backgroundColor: COLORS.PROFILEBACKGROUND,
        borderRadius: 10,
        width: getDeviceWidth(90),
        height: getDeviceHeight(5),


        justifyContent: 'center',
        alignItems: 'center',
    },
    ToastTextStyle: {
        color: COLORS.WHITE,
        letterSpacing: getDeviceWidth(0.1),
        fontFamily: FONTFAMILY.fontFamily_2,
        fontSize: moderateScale(FONTSIZE.FS15),
        marginBottom: getDeviceHeight(1)
    },
    errorcolor:{
        color: COLORS.RED,
        letterSpacing: getDeviceWidth(0.1),
        fontFamily: FONTFAMILY.fontFamily_2,
        fontSize: moderateScale(FONTSIZE.FS12),
        marginBottom: getDeviceHeight(1),
        marginLeft:getDeviceWidth(5)
    },
    ToastTextStyle1: {
        color: COLORS.WHITE,
    },
    spinner: {
        flex: 1,
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        opacity: 0.5,
        justifyContent: 'center',
        // backgroundColor: COLORS.BLACK,
    },
    tabiconstyle: {
        height: getDeviceWidth(20),
        aspectRatio: 1,
        shadowColor: SHADOWCOLORS.TEXT_SHADOW,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 1,
        shadowRadius: getDeviceWidth(2),

    },
    Fontfamilandcolor: {
        fontFamily: FONTFAMILY.fontFamily_2,
        color: COLORS.PROFILEBACKGROUND,
    },
    Fontfamilandcolor14: {
        fontSize: moderateScale(FONTSIZE.FS14),
        fontFamily: FONTFAMILY.fontFamily_2,
        color: COLORS.PROFILEBACKGROUND,
    },
    Fontfamilandcolor16: {
        fontSize: moderateScale(FONTSIZE.FS16),
        fontFamily: FONTFAMILY.fontFamily_2,
        color: COLORS.PROFILEBACKGROUND,
    }
})

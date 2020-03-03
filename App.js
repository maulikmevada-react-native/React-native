/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import {
  createAppContainer,

} from "react-navigation";
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import { Platform, StyleSheet, Text, View, TouchableOpacity, TouchableHighlight } from 'react-native';
import * as AppConstants from "./SRC/Component/Helper/AppConstants";
import Icon from "react-native-vector-icons/FontAwesome";
import Icons from "react-native-vector-icons/Ionicons";
import Iconss from "react-native-vector-icons/Entypo";
import Iconsss from "react-native-vector-icons/MaterialIcons";

import Login from './SRC/Component/Login/Login';
import Dashboard from './SRC/Component/Dashboard/Dashboard';
import Signup from './SRC/Component/Signup/Signup';
import Otp from './SRC/Component/OTP/Otp';

import Forgotpasword from './SRC/Component/ForgotPassword/Forgotpassword';

import Directorprofile from './SRC/Component/DirectoProfile/Directorprofile';
import Profile from './SRC/Component/DirectoProfile/Profile';
import Directorsearch from './SRC/Component/DirectorSearch/Directorsearch';
import Directonotification from './SRC/Component/DirectorNotification/Directonotification';
import TermsandCondition from "./SRC/Component/TermsandCondition/TermsandCondition";
import More from './SRC/Component/More/More';
import Auditionlist from './SRC/Component/AuditionList/Auditionlist';
import ViewAudition from './SRC/Component/ViewAudition/ViewAudition';
import ProfileRequest from './SRC/Component/ProfileRequestList/ProfileRequest'

import Tabs from './SRC/Component/TabComponent/Tab';

import CreateProject from './SRC/Component/CreateProject/CreateProject';
import Projectdetail from './SRC/Component/ProjectDetail/Projectdetail';
import Createrole from './SRC/Component/CreateRole/Createrole';
import ViewRoleDetail from './SRC/Component/ViewRoleDetail/ViewRoleDetail';
import ViewArtistProfile from './SRC/Component/ViewArtistProfile/ViewArtistProfile';
import ChangePassword from './SRC/Component/ChangePassword/ChangePassword';
import AuditionRequestlist from './SRC/Component/AuditionRequestList/AuditionRequestlist';
import Shortlist from './SRC/Component/ShortList/Shortlist'
import ActorVideo from './SRC/Component/AcorVideo/ActorVideo';
import Videonew from './SRC/Component/AcorVideo/Videonew';
import DirectorWorklink from './SRC/Component/ActorWorklink/DirectorWorklink';
import WorkLink from './SRC/Component/ActorWorklink/WorkLink';
import ActorPhoto from './SRC/Component/ActorPhotoGalalry/ActorPhoto';
import Audiorecord from './SRC/Component/AudioRecord/Audiorecord';
import Audioplyer from './SRC/Component/Audioplayer/Audioplyer';
import Aboutus from './SRC/Component/AboutUS/Aboutus';
import ViewAuditionlist from './SRC/Component/ViewAuditionlist/ViewAuditionlist';
import Ongoingprojectlist from './SRC/Component/Allongoingprojectlist/Ongoingprojectlist'
const Images = {
  Castpro: 'castpro'
}


const TabNavigator = createBottomTabNavigator({

  Dashboard: {
    screen: Dashboard,
    navigationOptions: ({ navigation }) => {
      console.log(navigation)
    },
    navigationOptions: {
      headerMode: 'none',
      tabBarIcon: ({ focused, tintColor }) => {
        return <Icon color={tintColor} name="home" size={AppConstants.moderateScale(AppConstants.FONTSIZE.FS30)} />;
      },

    },

  },
  Directorsearch: {
    screen: Directorsearch,
    navigationOptions: ({ navigation }) => {
      console.log(navigation)
    },
    navigationOptions: {

      value: '',
      tabBarIcon: ({ focused, tintColor }) => {
        return <Icons color={tintColor} name="ios-search" size={AppConstants.moderateScale(AppConstants.FONTSIZE.FS30)} />;
      },
    },
  },
  Directorprofile: {
    screen: Directorprofile,
    navigationOptions: ({ navigation }) => {
      console.log(navigation)
    },
    navigationOptions: {
      tabBarIcon: ({ focused, tintColor }) => {
        return <Iconss color={tintColor} name="user" size={AppConstants.moderateScale(AppConstants.FONTSIZE.FS30)} />;
      },
    },
  },
  Directonotification: {
    screen: Directonotification,
    navigationOptions: ({ navigation }) => {
      console.log(navigation)
    },
    navigationOptions: {
      tabBarIcon: ({ focused, tintColor }) => {
        return <Iconsss color={tintColor} name="notifications" size={AppConstants.moderateScale(AppConstants.FONTSIZE.FS30)} />;
      },
    },
  },
  More: {
    screen: More,
    navigationOptions: ({ navigation }) => {
      console.log(navigation)
    },
    navigationOptions: {
      tabBarIcon: ({ focused, tintColor }) => {
        return <Iconss color={tintColor} name="dots-three-horizontal" size={AppConstants.moderateScale(AppConstants.FONTSIZE.FS30)} />;
      },
      title: 'More',
    },
  },

},
  {
    navigationOptions: ({ navigation }) => {
   
      return ({
        // headerLeft: (
        //     // AppConstants.DrawerButton(navigation)
        // ),
        headerStyle: {
          backgroundColor: getHeaderBackground(navigation)
        },

        headerRight: (getHedarRight(navigation)),
        headerStyle: {
          elevation: 0,
          borderBottomWidth: 0,
          ...Platform.select({
            android: {
              height: AppConstants.getDeviceHeight(12),
            }
          })
        },
      });
    },

    tabBarOptions: {
      activeTintColor: AppConstants.COLORS.PROFILEINACTIVE,
      inactiveTintColor: AppConstants.COLORS.PROFILEBACKGROUND,
      style: {

        borderTopWidth: 0.5,
        height: AppConstants.getDeviceHeight(8)
      },
      // showLabel: false,
      shadowColor: AppConstants.COLORS.PROFILEBACKGROUND,
      Tabs,
    },
    shadowColor: AppConstants.COLORS.PROFILEBACKGROUND,
    tabBarComponent: Tabs

  },
  {
    headerMode: 'screen',
    cardStyle: { backgroundColor: AppConstants.COLORS.VIEWBACKGROUND },
  }
);

const Stack = createStackNavigator(
  {
    Login: {
      screen: Login,
      params: {
        header: false
      },
      navigationOptions: {
        header: null
      }
    },
    Dashboard: {
      params: {
      },
      screen: TabNavigator,
    },
    Signup: {
      screen: Signup,
      params: {
        header: false
      },
      navigationOptions: {
        header: null
      }
    },
    Otp: {
      screen: Otp,
      params: {
        header: false
      },
      navigationOptions: {
        header: null
      }
    },
    Forgotpasword: {
      screen: Forgotpasword,
      params: {
        header: false
      },
      navigationOptions: {
        header: null
      }
    },
    TermsandCondition: {
      screen: TermsandCondition,
    },
    Profile: {
      screen: Profile,
    },
    CreateProject: {
      navigationOptions: {
        title: 'Create Project',

      },
      screen: CreateProject,
    },
    Projectdetail: {
      navigationOptions: {
        title: 'Project Details',
      },
      screen: Projectdetail,
    },
    Createrole: {
      navigationOptions: {
        title: 'Add Role',
      },
      screen: Createrole,
    },

    ViewRoleDetail: {
      navigationOptions: {
        title: 'Role Details',
      },
      screen: ViewRoleDetail,
    },
    Auditionlist: {
      navigationOptions: {
        title: 'Auditions',
      },
      screen: Auditionlist,
    },
    ViewAudition: {
      navigationOptions: {
        title: 'Audition Details',
      },
      screen: ViewAudition,
    },
    ProfileRequest: {
      navigationOptions: {
        title: 'Sent Profile Requests',
      },
      screen: ProfileRequest,
    },
    ViewArtistProfile: {
      navigationOptions: {
        title: 'View Profile',
      },
      screen: ViewArtistProfile,
    },
    ChangePassword: {
      navigationOptions: {
        title: 'Change Password',
      },
      screen: ChangePassword,
    },
    AuditionRequestlist: {
      navigationOptions: {
        title: 'Sent Audition Requests',
      },
      screen: AuditionRequestlist,
    },
    Shortlist: {
      navigationOptions: {
        title: 'Shortlisted Auditions',
      },
      screen: Shortlist,
    },
    ActorVideo: {
      navigationOptions: {
        title: 'Intro Video',
      },
      screen: ActorVideo,
    },
    Videonew: {
      params: {
        header: false
      },
      navigationOptions: {
        header: null
      },
      screen: Videonew,
    },
    DirectorWorklink: {
      navigationOptions: {
        title: 'Work Link',
      },
      screen: DirectorWorklink,
    },
    WorkLink: {
      navigationOptions: {
        title: 'Work Link',
      },
      screen: WorkLink,
    },
    ActorPhoto: {
      navigationOptions: {
        title: 'Photos',
      },
      screen: ActorPhoto,
    },
    Audiorecord: {
      navigationOptions: {
        title: 'Audio Recording',
      },
      screen: Audiorecord,
    },
    Audioplyer: {
      navigationOptions: {
        title: 'Audio Plyer',

      },
      screen: Audioplyer,
    },
    Aboutus: {
      navigationOptions: {
        title: 'About Us',

      },
      screen: Aboutus,
    },
    ViewAuditionlist: {
      navigationOptions: {
        title: 'View Audition',

      },
      screen: ViewAuditionlist,
    },
    Ongoingprojectlist: {
      navigationOptions: {
        title: 'All Projects',

      },
      screen: Ongoingprojectlist,
    },
  },
  {
    mode: "card",
    headerMode: "screen",
    // cardStyle: { backgroundColor: '#f9f8ff' },
    defaultNavigationOptions: ({ navigation }) => ({
      gesturesEnabled: false,
      headerLeft: (
        getHeaderLeft(navigation)
      ),
      // headerRight: (getHedarRight(navigation)),
      headerBackground: getHeaderBackground(navigation),
      headerStyle: {
        elevation: 0,
        borderBottomWidth: 0,
        ...Platform.select({
          android: {
            height: AppConstants.getDeviceHeight(12),
          },
          
        })
      },

      headerTitleStyle: {
        color: AppConstants.COLORS.PROFILEINACTIVE,

        fontSize: AppConstants.FONTSIZE.FS18,
        fontFamily: AppConstants.FONTFAMILY.fontFamily_2,
        justifyContent: 'center',
        fontWeight: 'bold',
        alignSelf: 'center',
        ...Platform.select({
          android: {
            justifyContent: 'center',
            alignSelf: 'center',
            textAlign: 'center',
            fontSize: AppConstants.FONTSIZE.FS18,
            fontFamily: AppConstants.FONTFAMILY.fontFamily_2,
            width: AppConstants.getDeviceWidth(60),
            marginTop: AppConstants.getDeviceWidth(7)
          }
        })
      },

    }),

  },
  {
    headerMode: 'screen',
    cardStyle: { backgroundColor: AppConstants.COLORS.VIEWBACKGROUND },
  },
  {
    headerMode: 'none',
    initialRouteName: "Login"
  }

)
function getHeaderLeft(navigation) {
  switch (navigation.state.routeName) {
    case "Dashboard":
      return null;
    default:
      return AppConstants.BackButton(navigation)
  }
}
function getHedarRight(navigation) {
  switch (navigation.state.index) {
    case 3:
      return null;
    case 4:
      return null;
  }
  switch (navigation.state.routeName) {
    case "TermsandCondition":
      return null;
    case "ActorBio":
      return null;
    case "ActorPhoto":
      return null;
    case "Login":
      return null;
    case "CreateProject":
      return null;
    case "More":
      return null;
    case "Dashboard":
      return null;
    // default:
    //   return AppConstants.ProfileIcon(navigation)
  }
}
function getHeaderBackground(navigation) {
  switch (navigation.state.index) {
    case 0:
      return (
        <View style={{ flex: 1, backgroundColor: AppConstants.COLORS.PROFILEBACKGROUND, justifyContent: 'center', }}>

          <Text style={{ color: AppConstants.COLORS.PROFILEINACTIVE, fontFamily: AppConstants.FONTFAMILY.fontFamily_1, fontSize: AppConstants.FONTSIZE.FS18, fontWeight: 'bold', justifyContent: 'center', alignSelf: 'center', marginTop: AppConstants.getDeviceHeight(Platform.OS === 'ios' ? 2 : 3) }}>Projects</Text>

        </View>
      );
    case 1:
      return (
        <View style={{ flex: 1, backgroundColor: AppConstants.COLORS.PROFILEBACKGROUND, justifyContent: 'center', }}>

          <Text style={{ color: AppConstants.COLORS.PROFILEINACTIVE, fontFamily: AppConstants.FONTFAMILY.fontFamily_1, fontSize: AppConstants.FONTSIZE.FS18, fontWeight: 'bold', justifyContent: 'center', alignSelf: 'center', marginTop: AppConstants.getDeviceHeight(Platform.OS === 'ios' ? 2 : 3) }}>Search Artists</Text>

        </View>
      );
    case 2:
      return (
        <View style={{ flex: 1, backgroundColor: AppConstants.COLORS.PROFILEBACKGROUND, justifyContent: 'center', }}>

          <Text style={{ color: AppConstants.COLORS.PROFILEINACTIVE, fontFamily: AppConstants.FONTFAMILY.fontFamily_1, fontSize: AppConstants.FONTSIZE.FS18, fontWeight: 'bold', justifyContent: 'center', alignSelf: 'center', marginTop: AppConstants.getDeviceHeight(Platform.OS === 'ios' ? 2 : 3) }}>My Profile</Text>

        </View>
      );
    case 3:
      return (
        <View style={{ flex: 1, backgroundColor: AppConstants.COLORS.PROFILEBACKGROUND, justifyContent: 'center', }}>

          <Text style={{ color: AppConstants.COLORS.PROFILEINACTIVE, fontFamily: AppConstants.FONTFAMILY.fontFamily_1, fontSize: AppConstants.FONTSIZE.FS18, fontWeight: 'bold', justifyContent: 'center', alignSelf: 'center', marginTop: AppConstants.getDeviceHeight(Platform.OS === 'ios' ? 2 : 3) }}>Notification Settings</Text>

        </View>
      );
    case 4:
      return (
        <View style={{ flex: 1, backgroundColor: AppConstants.COLORS.PROFILEBACKGROUND, justifyContent: 'center', }}>

          <Text style={{ color: AppConstants.COLORS.PROFILEINACTIVE, fontFamily: AppConstants.FONTFAMILY.fontFamily_1, fontSize: AppConstants.FONTSIZE.FS18, fontWeight: 'bold', justifyContent: 'center', alignSelf: 'center', marginTop: AppConstants.getDeviceHeight(Platform.OS === 'ios' ? 2 : 3) }}>More</Text>

        </View>
      );
  }
  return (
    <View style={{ flex: 1, backgroundColor: AppConstants.COLORS.PROFILEBACKGROUND, justifyContent: 'center', }}>
      {/* <Image style={{
        width: AppConstants.getDeviceHeight(17), height: AppConstants.getDeviceHeight(2.1), marginLeft: AppConstants.getDeviceWidth(12), justifyContent: 'center',
        marginTop: AppConstants.getDeviceHeight(navigation.getParam('header') != null && !navigation.getParam('header') ? 7.8 : Platform.OS === 'ios' ? 3 : 5)
      }} source={{ uri: Images.Castpro }} ></Image> */}
    </View>
  );
}
const AppContainer = createAppContainer(Stack);

export default class App extends Component {
  render() {
    return <AppContainer />;
  }
}



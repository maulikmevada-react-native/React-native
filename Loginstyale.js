import * as AppConstants from '../Helper/AppConstants';
export default {
    mainContainer: {
        flex: 1,
        justifyContent: 'center',
        // backgroundColor:AppConstants.COLORS.Loginback
    },
    backgroundImage: {
        flex: 1,
    },
    LangageSelect: {
        width: AppConstants.getDeviceWidth(100),
        height: AppConstants.getDeviceHeight(10),
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    logoContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: AppConstants.getDeviceHeight(8),
    },
    lginlogo: {
        aspectRatio: 1,
        height: AppConstants.getDeviceHeight(20),
        width: AppConstants.getDeviceHeight(20),
    },
    textboxContainer: {
        marginTop: AppConstants.getDeviceHeight(7),
        width: AppConstants.getDeviceWidth(90),
        height: AppConstants.getDeviceHeight(5.5),
        marginLeft: AppConstants.getDeviceWidth(5),
        marginRight: AppConstants.getDeviceWidth(5),
    },
    textboxContainer1: {
        marginTop: AppConstants.getDeviceHeight(3),
        width: AppConstants.getDeviceWidth(90),
        height: AppConstants.getDeviceHeight(5.5),
        marginLeft: AppConstants.getDeviceWidth(5),
        marginRight: AppConstants.getDeviceWidth(6),
        
    },
    textboxText: {
        width: AppConstants.getDeviceWidth(87),
        height: AppConstants.getDeviceHeight(6.6),
        color: AppConstants.COLORS.WHITE,
        fontSize: AppConstants.moderateScale(AppConstants.FONTSIZE.FS13),
        marginLeft: AppConstants.getDeviceWidth(1),
        paddingTop: AppConstants.getDeviceHeight(4),
    },
    loginbuttonview: {
        marginTop: AppConstants.getDeviceHeight(5),
        width: AppConstants.getDeviceWidth(90),
        height: AppConstants.getDeviceHeight(6),
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf:'center'
    },
    loginbutton: {
        width: AppConstants.getDeviceWidth(90),
        height: AppConstants.getDeviceHeight(5),
        marginLeft: AppConstants.getDeviceWidth(5),
        marginRight: AppConstants.getDeviceWidth(5),
    },
    logintext: {
        position: 'absolute',
        fontSize: AppConstants.moderateScale(AppConstants.FONTSIZE.FS16),
        color:AppConstants.COLORS.PROFILEINACTIVE,
        fontWeight:'600'
    },
    forgotlogin: {
        width: AppConstants.getDeviceWidth(100),
        height: AppConstants.getDeviceHeight(6),
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
    },
    forgottext: {
        color: AppConstants.COLORS.LANGAUGE,
        fontSize: AppConstants.moderateScale(AppConstants.FONTSIZE.FS14),
        fontWeight: '600',
        marginTop: AppConstants.getDeviceHeight(1),
        fontFamily: AppConstants.FONTFAMILY.fontFamily_2,
    },
    forgottext1: {
        color: 'white',
        fontSize: AppConstants.moderateScale(AppConstants.FONTSIZE.FS11),
        fontWeight: '600',
        marginTop: AppConstants.getDeviceHeight(1)
    },
    Facebooklogin: {
        marginTop: AppConstants.getDeviceHeight(2.5),
        width: AppConstants.getDeviceWidth(90),
        height: AppConstants.getDeviceHeight(5),
        justifyContent: 'center',
        // backgroundColor: AppConstants.COLORS.FACEBOOK,
        marginLeft: AppConstants.getDeviceWidth(5),
        flexDirection: 'row'
    },
    icon: {
        position: 'absolute',
        marginRight: AppConstants.getDeviceWidth(5),
        right: 0
    },
    line: {
        width: AppConstants.getDeviceWidth(40),
        marginLeft: AppConstants.getDeviceWidth(10),
        backgroundColor: AppConstants.COLORS.LOGINCOLOR,
        height: AppConstants.getDeviceHeight(0.2)
    },
    facebooktext: {
        color: AppConstants.COLORS.FACEBOOK,
        fontSize: AppConstants.moderateScale(AppConstants.FONTSIZE.FS16),
        fontWeight: '600',
        marginLeft: AppConstants.getDeviceWidth(2),
        alignSelf: 'center'
    },
    Createaccount: {
        flex: 1,
        width: AppConstants.getDeviceWidth(100),
        justifyContent: 'flex-end',
        height: AppConstants.getDeviceHeight(20),
        bottom: 0,
    },
    donthaveaccont: {
        color: AppConstants.COLORS.LANGAUGE,
        fontSize: AppConstants.moderateScale(AppConstants.FONTSIZE.FS16),
        fontWeight: '600',
        alignSelf: 'center'
    },
    Signup: {
        color: AppConstants.COLORS.PROFILEINACTIVE,
        fontSize: AppConstants.moderateScale(AppConstants.FONTSIZE.FS14),
        fontWeight: '600',
        alignSelf: 'center',
        marginTop: AppConstants.getDeviceHeight(1),
        marginBottom: AppConstants.getDeviceHeight(10)
    },
    or:{
        color: AppConstants.COLORS.LOGINCOLOR,
        fontSize: AppConstants.moderateScale(AppConstants.FONTSIZE.FS11),
        fontWeight: '600',
        fontFamily: AppConstants.FONTFAMILY.fontFamily_2,
    },
    modalRenderView: {
        flex: 1,
        position: "absolute",
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        justifyContent: "center"
    },

}
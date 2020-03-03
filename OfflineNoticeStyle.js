import * as AppConstants from '../Helper/AppConstants';

export default {
    mainContainer: {
        height: '100%',
        position: 'relative',
    },
    topButtonContainer: {
        height: AppConstants.getDeviceHeight(5, true),
        alignItems: 'center',
        justifyContent: 'flex-end'
    },
    innerButtonContainer: {
        height: AppConstants.getDeviceHeight(6),
        width: AppConstants.getDeviceWidth(100),
        alignItems: 'center',
        flexDirection: 'row',
    },
    txt: {
        width: AppConstants.getDeviceWidth(100),
        color: AppConstants.COLORS.WHITE,
        fontFamily: AppConstants.FONTFAMILY.fontFamily_1,
        fontSize: AppConstants.moderateScale(AppConstants.FONTSIZE.BUTTONTEXT),
        textAlign: 'center',
    },
    logoContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: AppConstants.getDeviceHeight(5),
    },
    img: {
        height: AppConstants.getDeviceHeight(20),
        width: AppConstants.getDeviceHeight(17.22),
    },
    txtContainer: {
        marginTop: AppConstants.getDeviceHeight(10),
        width: AppConstants.getDeviceWidth(70),
        alignSelf: 'center',
        justifyContent: 'center',
    },
    txt1: {
        color: AppConstants.COLORS.TEXT_3,
        fontFamily: AppConstants.FONTFAMILY.fontFamily_1,
        fontSize: AppConstants.moderateScale(AppConstants.FONTSIZE.FS25),
        textAlign: 'center',
    },
    txt2: {
        marginTop: AppConstants.getDeviceHeight(2.25),
        color: AppConstants.COLORS.TEXT_3,
        fontFamily: AppConstants.FONTFAMILY.fontFamily_1,
        fontSize: AppConstants.moderateScale(AppConstants.FONTSIZE.FS14),
        textAlign: 'center',
    },
    btnVisitFuzzyBunterContainer: {
        marginTop: AppConstants.getDeviceHeight(4.8),
        alignItems: 'center',
        justifyContent: 'center',
        height: AppConstants.getDeviceHeight(8),
    },
    btnVisitFuzzyBunter: {
        width: AppConstants.getDeviceWidth(30.4),
        height: AppConstants.getDeviceHeight(6.9),
        backgroundColor: AppConstants.COLORS.WHITE,
        borderRadius: AppConstants.moderateScale(AppConstants.BORDERRADIUS.BUTTON_BORDERRADIUS),
        
        
        shadowColor: AppConstants.SHADOWCOLORS.TEXT_SHADOW,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 1,
        shadowRadius: AppConstants.getDeviceWidth(2),
        elevation: 2,

        alignItems: 'center',
        justifyContent: 'center'
    },
    txtVisitFuzzyBunter: {
        color: AppConstants.COLORS.WHITE,
        fontFamily: AppConstants.FONTFAMILY.fontFamily_1,
        fontWeight: AppConstants.WEIGHT.FONTWEIGHT1,
        fontSize: AppConstants.moderateScale(AppConstants.FONTSIZE.BUTTONTEXT),
        textAlign: 'center',
    },
}
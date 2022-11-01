import {
    StyleSheet,
} from "react-native";
import { FontFamily, Theme } from "../../models/themes";
import { normalize } from "../../utils/dimentionUtils";


export const styles = StyleSheet.create({
    bodyContainer: {
        backgroundColor: Theme.color.White,
        flex: 1,
        flexDirection: 'column'
    },
    homeMenu: {
        width: 25,
        height: 25,
    },
    topView: {
        height: normalize(56),
        backgroundColor: Theme.color.White,
        justifyContent: 'center',
        marginTop: normalize(0),
        marginLeft: normalize(23)

    },
    middleView: {
        backgroundColor: Theme.color.White,
        flex: 1,
        flexDirection: 'column',
        marginTop: 50,
        marginLeft: 25,
        marginRight: 25
    },
    backgroundWhite: {
        backgroundColor: Theme.color.White,

    },
    loginText: {
        color: Theme.color.Black,
        fontSize: normalize(30),
        flexDirection: 'row',
        fontFamily: FontFamily.bold

    },
    welcomeText: {
        fontSize: normalize(14),
        marginTop: 10,
        color: Theme.color.Black,
        flexDirection: 'row',
        fontFamily: FontFamily.regular
    },
    phoneBox: {
        marginTop: 40,
        backgroundColor: Theme.color.White,
        paddingBottom: 20,
        borderRadius: 20
    },
    phoneBoxTwo: {
        flexDirection: 'row',
        flex: 1,
        width: '100%'
    },
    touchableCountryBox: {
        width: '28%',
        height: normalize(47),
        backgroundColor: Theme.color.White,
    },
    signUpView: {
        marginTop: normalize(20),
        alignContent: 'center',
        flex: 1,
        flexDirection: 'row',
        alignSelf: 'center'
    },
    dontSignUp: {
        fontSize: 13,
        color: Theme.color.Black,
        fontStyle: 'normal',
        fontFamily: 'Apercu Pro Medium'

    },
    loginButtonStyle: {
        marginTop: 40,
        alignContent: 'center',
        alignItems: 'center',
        borderRadius: 100,
        backgroundColor: '#000000',
        height: 50,
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center'
    },
    loginTextStyle: {
        fontSize: 16,
        color: Theme.color.White,
        fontStyle: 'normal',
        borderRadius: 25,
        fontWeight: '400',
        fontFamily: FontFamily.light

    }
    // textInputOutlineStyle: {
    //     colors: {
    //         placeholder: '#A1A1A1',
    //         text: '#000000', primary: '#A1A1A1',
    //         underlineColor: 'transparent',
    //         background: 'white',

    //     }, fonts: {
    //         regular: {
    //             fontFamily: 'Apercu Pro Regular'
    //         }
    //     },
    //     roundness: 10
    // }

})
import { StyleSheet } from "react-native";

const styleSheet = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgba(152,211,60,0.2)',
        paddingLeft: 20,
        paddingRight: 20
    },
    signUpBtn: {
        backgroundColor: "#98D33C",
        height: 50,
        borderRadius: 50,
        justifyContent: 'center'
    },
    signUpText: {
        textAlign: 'center',
        color: 'white'
    },
    appLogo: {
        height: 100,
        width: 200,
        alignSelf: 'center'
    },
    inputBox: {
        borderColor: 'black',
        borderRadius: 50,
        borderWidth: 1,
        paddingLeft: 25,
        marginBottom: 20,
        height: 45
    }
});

export default styleSheet;
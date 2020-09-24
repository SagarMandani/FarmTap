import { StyleSheet } from "react-native";

const styleSheet = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgba(152,211,60,0.2)'
    },
    signUpBtn: {
        backgroundColor: "#98D33C",
        height: 50,
        borderRadius: 50,
        margin: 20,
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
});

export default styleSheet;
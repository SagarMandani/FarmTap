import { StyleSheet } from "react-native";

const styleSheet = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgba(152,211,60,0.2)'
    },
    startBtn: {
        backgroundColor: "#98D33C",
        height: 50,
        borderRadius: 50,
        margin: 20,
        justifyContent: 'center'
    },
    startText: {
        textAlign: 'center',
        color: 'white'
    },
    appLogo: {
        height: 80,
        width: 200,
        alignSelf: 'center'
    },
    nameText: {
        fontSize: 20,
        color: '#98D33C',
        fontWeight: 'bold',
        alignSelf: 'center',
        marginBottom: 10
    },
    welcomeText: {
        fontSize: 16,
        color: '#98D33C',
        alignSelf: 'center',
        marginBottom: 10
    },
    desText: {
        fontSize: 14,
        alignSelf: 'center'
    },
    stepText: {
        alignSelf: 'center',
        marginBottom: 10
    },
    titleText: {
        paddingTop: 10,
        paddingBottom: 10,
        fontSize: 20,
        fontWeight: "bold",
        alignSelf: "center",
    },
    normalText: {
        textAlign: "center",
        fontSize: 15,
    }
});

export default styleSheet;
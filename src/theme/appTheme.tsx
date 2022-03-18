import { StyleSheet } from "react-native";

export const colors = {
    primary: '#1976d2',
}

export const styles = StyleSheet.create({
    globalMargin: {
        marginHorizontal: 20
    },
    title: {
        fontSize: 20,
        marginBottom: 10
    },
    button: {
        alignItems: "center",
        backgroundColor: "#f8f9fa",
        padding: 10
    },
    bigButton: {

        alignItems: "center",
        backgroundColor: "#e1bee7",
        borderRadius: 20,
        justifyContent: 'center',
        height: 100,
        width: 100,
        marginRight: 10,
    },
    textBigButton: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    spaces: {
        marginTop: 50
    },
    avatar: {
        width: 100,
        height: 100,
        borderRadius: 100,
    },
    avatarContainer: {
        alignItems: 'center',
        marginTop: 20,
    },
    menuContainer: {
        marginVertical: 30,
        // marginHorizontal: 80,
        alignItems: 'center',
    },
    menuBoton: {
        marginVertical: 10,

    },
    menuTexto: {
        fontSize: 20,
        color: 'black',
    }
})

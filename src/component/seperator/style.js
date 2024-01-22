import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 20,
    },

    line: {
        height: 1,
        backgroundColor: 'blue',
        flex: 1,
    },

    text: {
        color: 'red',
        fontWeight: '500',
        marginHorizontal: 8,
    },
});

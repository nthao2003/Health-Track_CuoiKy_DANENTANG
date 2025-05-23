import { StyleSheet, Platform } from "react-native";

//Declare color
export const globalColors = {
    'vibrantBlue': '#0099FF',
    'breakfastGreen': '#2ED12E',
    'lunchOrange': '#FFA935',
    'dinnerCyan': '#12E5B0',
    'snackPurple': '#B575E7',
    'backgroundGray': '#F2F5FC',
    'textGray': '#9EA9C3',
    'chillGreen': '#91C788',
    'chillCyan': '#2FC9EF',
    'darkerGreen': '#72B766',
    'darkerCyan': '#42cd8c',
    'backgroundCyan': '#60dda3',
    'calmRed': '#FF5F79',
}

export const globalStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: globalColors.backgroundGray,
    },
    header: {
        width: '100%',
        backgroundColor: globalColors.darkerCyan,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        overflow: 'hidden',
    },
    headerTitle: {
        color: '#fff',
        fontSize: 20,
        fontFamily: 'inter-bold',
    },
    searchBar: {
        height: 44,
        backgroundColor: globalColors.backgroundGray,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottomWidth: 2,
    },
    searchInput: {
        flex: 1,
        fontSize: 16,
        paddingLeft: 5,
    },
    addButton: {
        backgroundColor: globalColors.darkerGreen,
        height: 40,
        width: 40,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    submitBtn: {
        marginTop: 30,
        padding: 10,
        width: Platform.OS === 'android' ? 300 : 260,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 25,
        backgroundColor: globalColors.breakfastGreen,
    },
    errorText: {
        color: '#fff',
        fontSize: 12,
        fontWeight: 'bold',
    },
    form_inputWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 20,
        paddingHorizontal: 5,
        width: Platform.OS === 'android' ? 300 : 260,
        height: 40,
        borderRadius: 5,
        backgroundColor: '#fff',
    },
    form_label: {
        color: '#1d1c3b',
        backgroundColor: '#fff',
        padding: 8,
        position: 'relative',
        top: Platform.OS === 'android' ? -8.1 : -7,
        left: 0,
        borderRadius: 5,
        height: 40,
    },
    form_input: {
        fontSize: 18,
        flex: 1,
        marginLeft: 5,
        paddingLeft: 5,
    },
    formContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }
});
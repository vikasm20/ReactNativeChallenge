import { StyleSheet } from "react-native";
import { primaryColor } from "../../Const/Colors";

export const styles = StyleSheet.create({

    image: {
        height: '25%',
        width: '100%',
    },
    backIcon: {
        height: 30,
        tintColor: '#000',
        width: 30,
        padding: 10,
        transform: [{ rotate: '180deg'}]
    },
    favIcon: {
        height: 30,
        width: 30,
        padding: 10,
    },
    headerView: {
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal: '3%'
    },
    headerTitleText: {
        fontSize: 20,
        textAlign: 'center',
        flex: 1,
    },
    subView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    attributesLabel: {
        fontSize: 20,
        fontWeight: 'bold',
        width: '60%',
        color: primaryColor
    },
    priceLabel: {
        fontSize: 16,
        textAlign: 'right',
        borderWidth: 1,
        padding: 5,
        borderColor: primaryColor,
        borderRadius: 5
    },
    titleLabel: {
        fontSize: 16,
        marginTop: '5%'
    },
    artistsHeader: {
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: '6%',
        color: primaryColor,
        marginBottom: 5
    },
    artistsLabel: {
    },
    rightsLabel: {
        fontSize: 14,
        marginTop: '2%',
        textAlign: 'center'
    }

})
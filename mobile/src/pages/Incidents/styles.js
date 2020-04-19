import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';


export default StyleSheet.create({
    container:{
        backgroundColor: '#ffcccc',
        flex: 1,
        paddingHorizontal: 20,
        paddingTop: Constants.statusBarHeight + 22,
    },

    header:{
    flexDirection: 'row',
    justifyContent: "space-between",
    alignItems: 'center',

    },

    headerText:{
    fontSize: 15,
    color: '#211d1d',
        
    },

    headerTextBold: {
     fontWeight: 'bold',
    color:'#E02041',

    },

    title:{
        fontSize: 30,
        marginTop: 48,
        marginBottom: 10,
        color: '#13131a',
        fontWeight: 'bold',
    },

    description: {
        fontSize: 15,
        lineHeight: 24,
        color:'#d13d1f',
    },

    incidentList:{
        marginTop: 30,
    },
    incident:{
        padding: 25,
        borderRadius:8,
        backgroundColor: '#fff',
        marginBottom:16,
    },

    incidentProperty:{
        fontSize:14,
        fontWeight: 'bold',
    },

    incidentValue:{
        marginTop: 8,
        fontSize: 15,
        marginBottom:24,
        color: '#d13d1f',
    },

    detailsButton:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },

    detailsButtonText:{
        color: '#E02041',
        fontSize: 15,
        fontWeight: 'bold',

    },

});
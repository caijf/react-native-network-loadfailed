
import {
    Dimensions,
    StyleSheet,
    Platform
} from 'react-native';

module.exports = StyleSheet.create({
	Failed:{
        marginTop: (Platform.OS === 'ios' ? 50 : 30),
        alignItems: 'center',
        flex: 1,
        flexDirection: 'column',
    },
    loadFailed:{
        marginTop:10,
        height:40,
    },
    button:{
        marginTop:10,
        flexDirection: 'row',
        height:44,
        borderRadius:5,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:'#099FDE',

    },
    buttonText:{
        color:'#ffff',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize:16,
        textAlign:'center',
        width:(Dimensions.get('window').width - 100)
    },
    errorImage:{
        resizeMode:'stretch',
        height:(Dimensions.get('window').width - 200),
        width:(Dimensions.get('window').width - 200)
    }
});



import {
    Dimensions,
    StyleSheet
} from 'react-native';

const SCREEN_WIDTH = Dimensions.get('window').width;

module.exports = StyleSheet.create({
	container:{
        alignItems: 'center',
        flex: 1,
        flexDirection: 'column',
    },
    img:{
        resizeMode:'stretch',
        height:(SCREEN_WIDTH - 200),
        width:(SCREEN_WIDTH - 200)
    },
    textWrapper:{
        marginTop:10,
        height:40,
    },
    text:{},
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
        width:(SCREEN_WIDTH - 100)
    }
});


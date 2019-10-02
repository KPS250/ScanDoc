import EStyleSheet from 'react-native-extended-stylesheet'
import { Colors } from '../../../../utils/values/Colors'
import { Dimensions } from 'react-native'

export default homeStyles = EStyleSheet.create({
    container: {
        flex:1,
        backgroundColor: Colors.white,
        alignItems:'center',
    },
    splashName:{
        fontSize: '34rem',
        fontWeight:'bold',
        textAlign:'center',
        color: Colors.white
    },
    home:{
        flex:1,
    },

    previewCard:{
       
    },
    previewImage:{
        flex:1,
        borderRadius:4,
        resizeMode: 'cover',
        width: '100rem' ,
        height: '130rem' ,
        marginHorizontal:5,
    },
    list:{
        margin: '10rem',
        //alignItems: 'center',
    },
    itemSeparator:{
        height:'10rem',
    },
    row:{
        flex:1,
        justifyContent: "space-around"
    },
    previewFullImage:{
        width:'100%',
        height:'100%',
        resizeMode:'contain',
    }
})
import React from 'react'
import { View, Text} from "react-native"
import EStyleSheet from 'react-native-extended-stylesheet'
import { Strings } from '../../../utils/values/Strings'
import { Colors } from '../../../utils/values/Colors'

export default EmptyView = ({label}) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{Strings.noDocsTitle}</Text>
            <Text style={styles.desc}>{Strings.noDocsDesc}</Text>
        </View>
    )
}

const styles = EStyleSheet.create({
    container:{
        flex:1,
        justifyContent: 'center',
        alignItems:'center',

    },
    title:{
        fontSize: '16rem',
        fontWeight: 'bold',
        color: Colors.primaryDark
    },
    desc:{
        fontSize: '12rem',
        color: Colors.gray
    }
});
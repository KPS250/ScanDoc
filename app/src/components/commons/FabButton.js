import React, {Component} from 'react'
import { Image, TouchableOpacity} from 'react-native'
import EStyleSheet from 'react-native-extended-stylesheet'
import { Colors } from '../../../utils/values/Colors';
import Icon from 'react-native-vector-icons/AntDesign'


export default class FabButton extends Component{
  render() {
    return (
       <Icon style={[styles.fab]}
            name={'pluscircle'} 
            size={55} 
            color={Colors.primary}  
            onPress={()=> this.props.onClick()}
        />
    )
  }
}

const styles = EStyleSheet.create({
  fab:{
    borderRadius: '25rem',
    position: 'absolute',
    bottom: '20rem',
    right: '20rem',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex:2,
    
  },
  icon:{
      width:'66rem',
      height:'66rem'
  }
});
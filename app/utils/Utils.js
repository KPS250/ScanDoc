import { Actions } from "react-native-router-flux"
import {Linking} from 'react-native'

export const handleOnBackPress = () => {
    if (Actions.state.index === 0)
      return false
    Actions.pop()
    return true
}

export const openLink=(link)=>{
    Linking.openURL(link)
}


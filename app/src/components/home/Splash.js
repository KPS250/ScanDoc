import React, {Component} from 'react'
import {View, Text, Platform} from 'react-native'
import {connect} from 'react-redux'
import SafeArea from '../commons/SafeArea'
import BusyError from '../commons/errors/BusyError'
import homeStyles from './styles/homeStyles'
import { Actions } from 'react-native-router-flux'
import { Strings } from '../../../utils/values/Strings'

import { DocumentDirectoryPath, ExternalDirectoryPath } from 'react-native-fs'
import ScanbotSDK from 'react-native-scanbot-sdk'

class Splash extends Component{

    componentDidMount(){
        this.initializeSDK();
    }

    render(){
        return(
            <SafeArea>
            <View style={homeStyles.container}>
              <Text style={homeStyles.splashName}>{Strings.appName}</Text>
            </View>
          </SafeArea>
        )
    }

     initializeSDK= async()=> {
        const options = {
          licenseKey: Strings.licenseKey,
          loggingEnabled: true, // Consider switching logging OFF in production builds for security and performance reasons!
          storageImageFormat: 'JPG',
          storageImageQuality: 80,
          storageBaseDirectory: this.getCustomStoragePath() // Optional storage path. See comments below!
        }

        try {
          const result =  await ScanbotSDK.initializeSDK(options);
          console.log('initializeSDK result: ' + JSON.stringify(result));
        } catch (ex) {
          console.log('initializeSDK error: ' + JSON.stringify(ex.error));
        }

        Actions.reset('drawer')

      }
    
      getCustomStoragePath=()=> {
        if (Platform.OS === 'ios') {
          return DocumentDirectoryPath + '/my-custom-storage';
        } else if (Platform.OS === 'android') {
          return ExternalDirectoryPath + '/my-custom-storage';
        }
        return null;
      }
}

const mapStateToProps = state =>{
      return {
         // count : state.countReducer.count
      }
  }
  
  const mapDispatchToProps = {
        //increase,
  }

  export default connect(mapStateToProps, mapDispatchToProps)(Splash)
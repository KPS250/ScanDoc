import React, {Component} from 'react'
import {Text, View, TouchableOpacity, Linking, Share} from 'react-native'
import EStyleSheet from 'react-native-extended-stylesheet'
import { Colors } from '../../../utils/values/Colors'
import { openLink } from '../../../utils/Utils'
import { Urls } from '../../../utils/values/Urls'

export default class Menu extends Component{

  render() {
    return (
      <View style={styles.container}>
         <Text style={styles.name}>Kiran Shinde</Text>
        <TouchableOpacity onPress={()=> openLink(Urls.resume)}>
          <Text style={styles.link}>Resume</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=> openLink(Urls.githubProfile)}>
          <Text style={styles.link}>GitHub Profile</Text>
        </TouchableOpacity>
        <View style={styles.hr}/>
        <TouchableOpacity onPress={()=> openLink(Urls.githubRepo)}>
          <Text style={styles.text}>ScanDoc GitHub Repo</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>this.onShare()}>
          <Text style={styles.text}>Share App</Text>
        </TouchableOpacity>
       
      </View>
    )
  }

  onShare = async () => {
    try {
      const result = await Share.share({
        message: 'ScanDoc-Demo App for Scanning Documents',
      });

      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      alert(error.message);
    }
  };


}

const styles = EStyleSheet.create({
  container: {
    flex: 1,
    paddingTop: '39rem',
    backgroundColor: Colors.white,
    paddingHorizontal: '25rem',
    justifyContent:'center',
  },
  text:{
    color: Colors.primaryDark,
    fontSize: '18rem',
    paddingVertical:'15rem',
  },
  name:{
    color: Colors.black,
    fontSize: '20rem',
    fontWeight: 'bold',
    paddingBottom:'10rem',
  },
  hr:{
    height:1,
    backgroundColor: Colors.gray,
    opacity:0.2,
  },
  link:{
    color: Colors.black,
    fontSize: '16rem',
    paddingVertical:'12rem',
  }

})
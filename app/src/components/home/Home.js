import React, {Component} from 'react'
import {View, Text, TouchableOpacity, FlatList, Image} from 'react-native'
import {connect} from 'react-redux'
import SafeArea from '../commons/SafeArea'
import AppBar from '../commons/AppBar'
import BusyError from '../commons/errors/BusyError'
import homeStyles from './styles/homeStyles'
import { Actions } from 'react-native-router-flux'
import { Strings } from '../../../utils/values/Strings'
import ScanbotSDK from 'react-native-scanbot-sdk'
import FabButton from '../commons/FabButton'
import { Colors } from '../../../utils/values/Colors'
import { pages } from '../../actions/Actions'
import EmptyView from './EmptyView'

class Home extends Component{

    render(){
        return(
            <SafeArea>
            <View style={homeStyles.home}>
              <AppBar
                mode={1}
                title={Strings.appName}
                hideOptions={true}
                leftClick={()=> Actions.drawerOpen()}
              />
              <BusyError />
              { 
                this.props.homeReducer.pages.length===0 &&
                <EmptyView />
              }
              {
                this.props.homeReducer.pages.length>0 &&
                <FlatList
                  contentContainerStyle={homeStyles.list}
                  data={this.props.homeReducer.pages}
                  renderItem={({ item }) =>  
                    <TouchableOpacity style={homeStyles.previewCard} onPress={()=> this.documentView(item) }>
                      <Image resizeMethod={'scale'} style={homeStyles.previewImage} source={{ uri : item.documentPreviewImageFileUri}}/> 
                    </TouchableOpacity>
                  }
                  numColumns={3}
                  columnWrapperStyle={homeStyles.row}
                  ItemSeparatorComponent={()=> <View  style={homeStyles.itemSeparator}/>}
                />
              }
              <FabButton onClick={this.openCamera}/>
            </View>
          </SafeArea>
        )
    }

    openCamera=()=>{
       ScanbotSDK.UI.startDocumentScanner({
        polygonColor: Colors.primary,
        cameraPreviewMode: 'FIT_IN',
        orientationLockMode: 'PORTRAIT',
        pageCounterButtonTitle: '%d Page(s)',
        multiPageEnabled: false,
        multiPageButtonHidden: true,
        ignoreBadAspectRatio: true,
        shutterButtonAutoOuterColor: Colors.primary,
        shutterButtonIndicatorColor : Colors.primaryDark,
        // documentImageSizeLimit: { width: 1500, height: 2000 },
        // maxNumberOfPages: 3,
        // ...
      }).then( result => {
        
        if (result.status == 'OK') {
          //console.log('RESULTS',result)
           this.openPreview(result.pages[0])
        }
      })
    }

    openPreview=(page)=>{
      ScanbotSDK.UI.startCroppingScreen(page, {
        doneButtonTitle: 'Apply',
        topBarBackgroundColor: Colors.primaryDark
      }).then( result => {
        
        if (result.status == 'OK') {
            //console.log('CROP-RESULTS',result)
            this.props.pages(result.page)
        }
      })
    }

    documentView = item =>{
      Actions.documentView({page: item})
    }


}

const mapStateToProps = state =>{
  console.log('homeReducer', state.homeReducer)
      return {
          homeReducer : state.homeReducer
      }
  }
  
  const mapDispatchToProps = {
        pages,
  }

  export default connect(mapStateToProps, mapDispatchToProps)(Home)
import React, {Component} from 'react'
import {View, Image} from 'react-native'
import {connect} from 'react-redux'
import homeStyles from './styles/homeStyles'
import SafeArea from '../commons/SafeArea'

class DocumentView extends Component{
   
    render(){
        return(
            <SafeArea>
            <View style={homeStyles.container}>
             <AppBar
                mode={2}
                title={''}
                hideOptions={true}
              />
              <Image style={homeStyles.previewFullImage} source={{ uri : this.props.page.documentPreviewImageFileUri}} /> 
            </View>
            </SafeArea>
        )
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

  export default connect(mapStateToProps, mapDispatchToProps)(DocumentView)
import React, {Component} from 'react'
import {View, Text} from 'react-native'
import {connect} from 'react-redux'

class StatefulRedux extends Component{
    render(){
        return(
            <View style={commonStyles.container}>
              <Text></Text>
            </View>
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

  export default connect(mapStateToProps, mapDispatchToProps)(StatefulRedux)
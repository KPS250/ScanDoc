import React, {Component, Fragment} from 'react'
import {SafeAreaView,View} from 'react-native'
import commonStyles from './styles/commonStyles'

export default class SafeArea extends Component{

    render() {
        return (
            <Fragment>
            <SafeAreaView style={commonStyles.safeAreaTop} />
                <SafeAreaView style={commonStyles.safeAreaBottom}>
                <View style={commonStyles.container}>
                    {this.props.children}
                </View>
            </SafeAreaView>
            </Fragment>
        )
    }
}
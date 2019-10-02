import React from 'react'
import { Scene, Router, Stack, Actions, ActionConst, Tabs } from 'react-native-router-flux'
import Menu from '../src/components/menu/Menu'
import { handleOnBackPress } from "./Utils"
import Home from '../src/components/home/Home'
import DocumentView from '../src/components/home/DocumentView'
import Splash from '../src/components/home/Splash'

const AppRouting = () => {
    return (
        <Router backAndroidHandler={() => handleOnBackPress()} >
            <Scene hideNavBar>

            <Scene key="splash" component={Splash} hideNavBar />
                <Scene key="drawer"
                    drawer={true}
                    contentComponent={Menu} >
                    <Scene key="home" component={Home} hideNavBar />
                </Scene>  
                <Scene key="documentView" component={DocumentView} hideNavBar />
            
            </Scene>
        </Router>
    );
};

export default AppRouting;
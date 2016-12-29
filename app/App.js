//根据页面
'use strict';

import React from 'react';
import {
  StyleSheet,
  Navigator,
  StatusBar,
  BackAndroid,
  View,
  Platform
} from 'react-native';

import Splash from './page/Splash';
import * as ToastUtil from './utils/ToastUtil';

export const ABOVE_LOLIPOP = Platform.Version && Platform.Version > 19
var _navigator;

export default class App extends React.Component {
    constructor(props) {
       super(props);
       this.renderScene = this.renderScene.bind(this);
       this.goBack = this.goBack.bind(this);
       BackAndroid.addEventListener('hardwareBackPress', this.goBack);
   }

  goBack() {
    if (_navigator && _navigator.getCurrentRoutes().length > 1) {
  		    _navigator.pop();
  		    return true;
    }
    if (_navigator && _navigator.getCurrentRoutes().length <= 1) {
      ToastUtil.toastShort('再按一次退出程序');
      //再点一次退出则退出程序
      if(this.lastBackPressed && this.lastBackPressed + 2000 >= Date.now()){
        //最近2秒内按过back键，可以退出应用。
        BackAndroid.exitApp();
      }
      this.lastBackPressed = Date.now();
      return true;  //返回true为不调用默认行为，false为调用默认行为(返回)。
    }
    // return false;
  }

  renderScene(route, navigator) {
    let Component = route.component;
    _navigator = navigator;
    return (
      <Component navigator={navigator} {...route.params} />
    );
  }

  configureScene(route, routeStack) {
    return Navigator.SceneConfigs.PushFromRight;
  }

  componentWillUnmount(){
      _navigator.popToTop();
  }

  render() {
    return (
      <View style={{flex: 1}}>
        <Navigator
          ref='navigator'
          style={styles.navigator}
          configureScene={this.configureScene}
          renderScene={this.renderScene}
          initialRoute={{
            component: Splash,
            name: 'Splash'
          }}
        />
      </View>
    );
  }
}
let styles = StyleSheet.create({
  navigator: {
    flex: 1
  }
});

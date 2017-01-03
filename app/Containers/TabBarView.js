import React, {Component} from 'react';
import {
    View,
    Text,
    Image,
    Platform,
    Dimensions,
    StyleSheet
} from 'react-native';
import TabNavigator from 'react-native-tab-navigator';

import Home from '../Components/Home';
import Shop from '../Components/Shop';
import Me from '../Components/Me';
import More from '../Components/More';

import HomeContainer from './HomeContainer';
import ShopContainer from './ShopContainer';
import MeContainer from './MeContainer';
import MoreContainer from './MoreContainer';

const {width, height} = Dimensions.get('window');

const tabBarItems = [
    {
        title: '首页',
        icon: () => <Image style={styles.iconStyle}  source={require('../Imgs/tab1.png')}/>,
        selectedIcon: () => <Image style={styles.iconStyle}  source={require('../Imgs/tab1act.png')}/>,
        component: HomeContainer
    }, {
        title: '店铺',
        icon: () => <Image style={styles.iconStyle}  source={require('../Imgs/tab2.png')}/>,
        selectedIcon: () => <Image style={styles.iconStyle}  source={require('../Imgs/tab2act.png')}/>,
        component: ShopContainer
    }, {
        title: '我的',
        icon: () => <Image style={styles.iconStyle} source={require('../Imgs/tab3.png')}/>,
        selectedIcon: () => <Image style={styles.iconStyle} source={require('../Imgs/tab3act.png')}/>,
        component: MeContainer
    }, {
        title: '更多',
        icon: () => <Image style={styles.iconStyle}  source={require('../Imgs/tab4.png')}/>,
        selectedIcon: () => <Image style={styles.iconStyle}  source={require('../Imgs/tab4act.png')}/>,
        component: MoreContainer
    }
];


export default class TarBarView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedTab: tabBarItems[0].title
        };
    }
    render() {
        return (
            <TabNavigator tabBarStyle={{ height: (Platform.OS === 'ios') ? 60 : 55, alignItems:'center' }}>
                {
                    tabBarItems.map((controller, i) => {
                        //获取容器页面
                        //下面就讲navigation 赋值进去,这样没有容器页面就有nav
                        let Component = controller.component;
                        return (
                            <TabNavigator.Item
                                key= {i}
                                selected={this.state.selectedTab === controller.title}
                                title={controller.title}
                                renderIcon={controller.icon}
                                renderSelectedIcon={controller.selectedIcon}
                                onPress={() => this.setState({ selectedTab: controller.title }) }>

                                <Component navigator = {this.props.navigator} {...this.props}/>
                            </TabNavigator.Item>
                        )
                    })
                }
            </TabNavigator>
        );
    }
}

const styles = StyleSheet.create({
    iconStyle:{
        width: Platform.OS === 'ios' ? 30 : 25,
        height:Platform.OS === 'ios' ? 30 : 25
    }
});

import React, {Component} from 'react';
import {
    View,
    Text,
    Image,
    TabBarIOS
} from 'react-native';
import TabNavigator from 'react-native-tab-navigator';
import Icon from 'react-native-vector-icons/Ionicons';


import Home from '../Components/Home';
import Shop from '../Components/Shop';
import Me from '../Components/Me';
import More from '../Components/More';

import HomeContainer from './HomeContainer';
import ShopContainer from './ShopContainer';
import MeContainer from './MeContainer';
import MoreContainer from './MoreContainer';

const tabBarItems = [
    {
        title: '首页',
        icon: '',
        selectedIcon: '',
        component: HomeContainer
    }, {
        title: '店铺',
        icon: '',
        selectedIcon: '',
        component: ShopContainer
    }, {
        title: '我的',
        icon: '',
        selectedIcon: '',
        component: MeContainer
    }, {
        title: '更多',
        icon: '',
        selectedIcon: '',
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
            <TabNavigator tabBarStyle={{ height: 60 }}>
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

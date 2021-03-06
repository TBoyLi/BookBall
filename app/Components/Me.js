import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    View,
    ScrollView,
    Image,
    Dimensions,
	Text,
	Platform
} from 'react-native';

import HeadView from './CustomComponents/HeadView';
import ItemMenuView from './CustomComponents/ItemMenuView';

var {height, width} = Dimensions.get('window');

export default class Me extends Component {

    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render() {
        return (
            <View style={styles.container}>
                <HeadView centerTitle='我的' isRight={false}/>
                <ItemMenuView/>
            </View>
        )
    }

	componentDidMount(){

	}
}

const styles = StyleSheet.create({
    container: {
        marginTop: (Platform.OS === 'ios') ? 20 : 0,
        backgroundColor:'#F0F0F0'
    },
});

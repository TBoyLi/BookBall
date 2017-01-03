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

import SwiperView from './CustomComponents/SwiperView';

var {height, width} = Dimensions.get('window');

export default class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render() {
        return (
            <ScrollView showsVerticalScrollIndicator={false}>
             style={styles.container}>
                <SwiperView/>

            </ScrollView>
        )
    }

	componentDidMount(){

	}
}

const styles = StyleSheet.create({
    container: {
        marginTop: (Platform.OS === 'ios') ? 25 : 0
    },
});

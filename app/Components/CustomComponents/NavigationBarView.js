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

var {height, width} = Dimensions.get('window');

export default class NavigationBarView extends Component {

    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render() {
        return (
            <View style={styles.container}>
                
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

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

export default class More extends Component {

    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render() {
        return (
            <View style={styles.container}>
                <Text>
                    更多
                </Text>
            </View>
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

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

export default class HeadView extends Component {

    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={{flex:1}}/>
                <View style={{flex:2, justifyContent:'center', alignItems:'center'}}>
                    <Text style={{textAlign:'center', color:'white'}}>
                        {this.props.centerTitle}
                    </Text>
                </View>
                <View style={{flex:1, flexDirection:'row', justifyContent:'flex-end', alignItems:'center', paddingRight:15}}>
                    {
                        this.props.isRight ?
                        <Image source={this.props.rightImage}/> : <View/>
                    }
                </View>
            </View>
        )
    }

	componentDidMount(){

	}
}

const styles = StyleSheet.create({
    container: {
        height: Platform.OS === 'ios' ? 48 : 48,
        backgroundColor:'#1FB7F5',
        flexDirection:'row'
    }
});

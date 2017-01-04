import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    Image,
    Dimensions,
	Text,
	Platform,
    TextInput,
    TouchableOpacity
} from 'react-native';

var {height, width} = Dimensions.get('window');

export default class HeadSearchView extends Component {

    constructor(props) {
        super(props);
        this.state = {
            location:'昆明'
        };
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.left}>
                    <TouchableOpacity onPress={this.onPress}>
                        <View style={{flexDirection:'row', alignItems:'center'}}>
                            <Text style={styles.location}>
                                {this.state.location}
                            </Text>
                            <Image source={require('../../Imgs/pull_down.png')}/>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={styles.center}>
                    <TouchableOpacity onPress={this.onPress} activeOpacity={1}>
                        <View style={styles.center_border}>
                            <Image source={require('../../Imgs/search.png')}/>
                            <Text style={styles.center_text}>
                                输入店铺、分类或课程
                            </Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity style={styles.right} onPress={this.onPress}>
                    <Text style={styles.buy_hint}>
                        购买提示
                    </Text>
                </TouchableOpacity>
            </View>
        )
    }

	componentDidMount(){

	}

    onPress(){
        alert('sndi gal');
    }
}

const styles = StyleSheet.create({
    container: {
        height:(Platform.OS === 'ios') ? 45 : 45,
        backgroundColor:'#1FB7F5',
        flexDirection:'row',
    },
    left:{
        flex:1,
        flexDirection:'row',
        // backgroundColor:'blue',
        justifyContent:'center',
        alignItems:'center',

    },
    center:{
        flex:2,
        // backgroundColor:'red',
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center'
    },
    right:{
        flex:1,
        // backgroundColor:'green',
        justifyContent:'center',
        alignItems:'center',
        flexDirection:'row'
    },
    location:{
        color:'white'
    },
    center_border:{
        height:30,
        justifyContent:'center',
        alignItems:'center',
        flexDirection:'row',
        backgroundColor:'#99FFFFFF',
        borderRadius:45,
        paddingLeft:10,
        paddingRight:10
    },
    center_text:{
        marginLeft:5,
        color:'#8a8a8a'
    },
    buy_hint:{
        color:'white'
    }
});

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

export default class ItemMenuView extends Component {

    constructor(props) {
        super(props);
        this.state = {

        };
    }



    render() {
        return (
            <View style={[styles.container, {marginTop: this.props.isMarginTop ? 10 : 1}]}>
                {
                    this.props.isLeftImage ?
                    <View style={styles.itemView1}>
                        <Image source={this.props.leftImage}/>
                    </View> :
                    <View/>
                }

                <View style={styles.itemView2}>
                    {
                        this.props.leftText ?               <Text>{this.props.leftText}</Text> :
                        <View/>
                    }
                </View>
                <View style={styles.itemView3}>
                    {
                        this.props.rightText ?               <Text>{this.props.rightText}</Text> :
                        <View/>
                    }
                </View>
                <View style={styles.itemView4}>
                    <Image source={require('../../Imgs/right_arrows.png')}/>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor:'white',
        flexDirection:'row',
        width:width,
        height:height/13
    },
    itemView1:{
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'blue'
    },
    itemView2:{
        flex:2,
        flexDirection:'row',
        justifyContent:'flex-start',
        alignItems:'center',
        // backgroundColor:'red',
        marginLeft:10
    },
    itemView3:{
        flex:2,
        flexDirection:'row',
        justifyContent:'flex-end',
        alignItems:'center',
        // backgroundColor:'green'
    },
    itemView4:{
        flexDirection:'row',
        justifyContent:'flex-end',
        alignItems:'center',
        marginRight:10,
        marginLeft:5
        // backgroundColor:'yellow'
    }
});

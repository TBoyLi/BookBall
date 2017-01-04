import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    View,
    ScrollView,
    Image,
    Dimensions,
	Text,
	Platform,
    TouchableOpacity
} from 'react-native';

import HeadSearchView from './CustomComponents/HeadSearchView';
import SwiperView from './CustomComponents/SwiperView';
import GridView from './CustomComponents/GridView';

var {height, width} = Dimensions.get('window');

export default class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render() {
        return (
            <View style={styles.container}>
                <HeadSearchView/>

                <ScrollView showsVerticalScrollIndicator={false}>
                    <SwiperView/>

                    <GridView/>

                    <TouchableOpacity onPress={this.onPress}>
                        <Image source={require('../Imgs/table1_1.png')} style={styles.table1_image} resizeMode='stretch'/>
                    </TouchableOpacity>

                    <View style={styles.table_view}>
                        <TouchableOpacity onPress={this.onPress} style={styles.table_touchable}>
                            <View style={{alignItems:'center'}} flexDirection='row'>
                                <Text style={styles.table_text}>
                                    活动一
                                </Text>
                                <Image style={styles.table2_image} source={require('../Imgs/table2_1.png')}  resizeMode='stretch'/>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={this.onPress} style={styles.table_touchable}>
                            <View style={{alignItems:'center'}} flexDirection='row'>
                                <Text style={styles.table_text}>
                                    活动二
                                </Text>
                                <Image style={styles.table2_image} source={require('../Imgs/table2_2.png')}  resizeMode='stretch'/>
                            </View>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.table_view}>
                        <TouchableOpacity onPress={this.onPress} style={styles.table3_touchable}>
                            <View style={{alignItems:'center'}} flexDirection='row'>
                                <Text style={styles.table_text}>
                                    上学攻略
                                </Text>
                                <Image style={styles.table3_image} source={require('../Imgs/table3_1.png')}  resizeMode='stretch'/>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={this.onPress} style={styles.table3_touchable}>
                            <View style={{alignItems:'center'}} flexDirection='row'>
                                <Text style={styles.table_text}>
                                    智囊团
                                </Text>
                                <Image style={styles.table3_image} source={require('../Imgs/table3_2.png')}  resizeMode='stretch'/>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={this.onPress} style={styles.table3_touchable}>
                            <View style={{alignItems:'center'}} flexDirection='row'>
                                <Text style={styles.table_text}>
                                    少儿新闻
                                </Text>
                                <Image style={styles.table3_image} source={require('../Imgs/table3_3.png')}  resizeMode='stretch'/>
                            </View>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.table_view}>
                        <TouchableOpacity onPress={this.onPress} style={styles.table3_touchable}>
                            <View style={{alignItems:'center'}} flexDirection='row'>
                                <Text style={styles.table_text}>
                                    比赛活动
                                </Text>
                                <Image style={styles.table3_image} source={require('../Imgs/table4_1.png')}  resizeMode='stretch'/>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={this.onPress} style={styles.table3_touchable}>
                            <View style={{alignItems:'center'}} flexDirection='row'>
                                <Text style={styles.table_text}>
                                    书丸子
                                </Text>
                                <Image style={styles.table3_image} source={require('../Imgs/table4_2.png')}  resizeMode='stretch'/>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={this.onPress} style={styles.table3_touchable}>
                            <View style={{alignItems:'center'}} flexDirection='row'>
                                <Text style={styles.table_text}>
                                    影视动漫
                                </Text>
                                <Image style={styles.table3_image} source={require('../Imgs/table4_3.png')}  resizeMode='stretch'/>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.table_view_yn}>
                        <TouchableOpacity onPress={this.onPress}>
                            <Text style={{textAlign:'center'}}>
                                云南儿童网
                            </Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </View>
        )
    }

	componentDidMount(){

	}

    onPress(){
        alert('niadgl');
    }

}

const styles = StyleSheet.create({
    container: {
        marginTop: (Platform.OS === 'ios') ? 20 : 0,
        backgroundColor:'#f0f0f0'
    },
    table1_image:{
        width:width,
        height:80,
        marginTop:1
    },
    table_view:{
        flexDirection:'row',
        marginTop:1
    },
    table_view_yn:{
        flexDirection:'row',
        marginTop:1,
        height:50,
        backgroundColor:'white',
        justifyContent:'center',
        alignItems:'center'
    },
    table_touchable:{
        flex:1,
        backgroundColor:'white'
    },
    table3_touchable:{
        flex:1,
        backgroundColor:'white',
        height:60,
        alignItems:'center',
        justifyContent:'center',
        marginLeft:1
    },
    table_text:{
        flex:1,
        textAlign:'center'
    },
    table2_image:{
        width:width/4-1,
        height:60
    },
    table3_image:{
        width:40,
        height:40,
        marginRight:10
    }
});

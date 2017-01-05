import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    View,
    ScrollView,
    Image,
    Dimensions,
	Text,
    ListView,
    TouchableOpacity,
	Platform,
    Alert
} from 'react-native';

import HeadView from './CustomComponents/HeadView';
import ItemMenuView from './CustomComponents/ItemMenuView';

var {height, width} = Dimensions.get('window');
var listData = [
    {
        leftText:'商家中心',
        rightText:''
        // isMarginTop:false
    },
    {
        leftText:'邀请好友',
        rightText:''
        // isMarginTop:false
    },
    {
        leftText:'清空缓存',
        rightText:'8.5MB'
        // isMarginTop:false
    },
    {
        leftText:'帮助与反馈',
        rightText:'',
        isMarginTop:true
    },
    {
        leftText:'我要合作',
        rightText:''
        // isMarginTop:false
    },
    {
        leftText:'我要应聘',
        rightText:'',
        isMarginTop:false
    },
    {
        leftText:'支付帮助',
        rightText:''
        // isMarginTop:false
    },
    {
        leftText:'检查更新',
        rightText:'当前版本1.0',
        isMarginTop:true
    },
    {
        leftText:'客户电话',
        rightText:'0871-68326659'
        // isMarginTop:false
    },
    {
        leftText:'关于云贝贝',
        rightText:''
        // isMarginTop:false
    },
];

export default class More extends Component {

    constructor(props) {
        super(props);
        var ds = new ListView.DataSource({rowHasChanged:(r1, r2) => r1 !== r2});
        this.state = {
            dataSource: ds.cloneWithRows(listData)
        };
    }

    render() {
        return (
            <View style={styles.container}>
                <HeadView centerTitle='更多' isRight={false}/>
                <ListView
                    dataSource={this.state.dataSource}
                    renderRow={this.renderRow}
                    contentContainerStyle={styles.listViewStyle}
                />
            </View>
        )
    }

    renderRow(rowData){
        return(
            <TouchableOpacity onPress={()=>{Alert.alert('哈哈')}}>
                <ItemMenuView leftText={rowData.leftText} rightText={rowData.rightText} isMarginTop={rowData.isMarginTop}/>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        marginTop: (Platform.OS === 'ios') ? 20 : 0,
        backgroundColor:'#F0F0F0',
        flex:1
    },
    listViewStyle: {
        width: width,
        marginTop: 10
    },
});

/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ListView,
  Image,
  TouchableOpacity, // 不透明度触摸
  Alert
} from 'react-native';

var Dimensions = require('Dimensions');
var screenWidth = Dimensions.get('window').width;

// json数据
var listData = [
  {
     "icon" : require('../../Imgs/learning_training.png'),
     "title" : "学习培训"
  },
  {
    "icon" : require('../../Imgs/hobbies_interests.png'),
    "title" : "兴趣爱好"
  },
  {
    "icon" : require('../../Imgs/performance_exhibition.png'),
    "title" : "演出展览"
  },
  {
    "icon" : require('../../Imgs/fine_food.png'),
    "title" : "餐饮美食"
  },
  {
    "icon" : require('../../Imgs/scenic_spots.png'),
    "title" : "景点旅游"
  },
  {
    "icon" : require('../../Imgs/knowledge_reading.png'),
    "title" : "知识阅读"
  },
  {
    "icon" : require('../../Imgs/play_education.png'),
    "title" : "游乐早教"
  },
  {
    "icon" : require('../../Imgs/integral_rebate.png'),
    "title" : "积分返利"
  }
];
// 一些常量设置
var cols = 4;
var cellWH = 60;
var vMargin = (screenWidth - cellWH * cols) / (cols + 1);
var hMargin = 10;


// ES5
var GridView = React.createClass({
  // 设置默认值,固定值()
  getDefaultProps(){
      return{

      }
  },

   // 设置一些初始值(可以变化)
   getInitialState(){
      // 创建数据源
      var ds = new ListView.DataSource({rowHasChanged:(r1, r2) => r1 !== r2});
      return{
          dataSource: ds.cloneWithRows(listData)
      }
   },

   render(){
      return(
          <ListView
              dataSource={this.state.dataSource}
              renderRow={this.renderRow}
              contentContainerStyle={styles.listViewStyle}
          />
      );
   },

   // 单独的cell
  renderRow(rowData){
     return(
         <TouchableOpacity activeOpacity={0.5} onPress={()=>{Alert.alert('哈哈')}}>
           <View style={styles.innerViewStyle}>
               <Image source={rowData.icon} style={styles.iconStyle}/>
               <Text style={{marginTop:5}}>{rowData.title}</Text>
           </View>
         </TouchableOpacity>
     );
  }

});


const styles = StyleSheet.create({
    listViewStyle: {
        backgroundColor:'white',
        width: screenWidth,
        paddingBottom: 5,
        // 改变主轴的方向
        flexDirection: 'row',
        // justifyContent:'space-around',
        alignItems:'flex-start',
        // 多行显示
        flexWrap: 'wrap'
    },

    iconStyle: {
        width: 40,
        height: 40
    },

    innerViewStyle: {
        width: cellWH,
        height: cellWH,
        marginLeft: vMargin,
        marginTop: hMargin,
        // 居中
        alignItems: 'center',
        justifyContent: 'center'
    }
});
module.exports = GridView;

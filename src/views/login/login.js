import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  Dimensions,
  Text,
  TextInput,
  Image
} from 'react-native';
import ScrollableTabView, { DefaultTabBar, ScrollableTabBar } from 'react-native-scrollable-tab-view';
const { width, height } = Dimensions.get('window');

export default class LoginScreen extends Component {



  render() {
    return (
      <View style={ styles.box }>
          { this.renderLogin() }
      </View>
    );
  }
  //登录
  renderLogin() {
    return (
      <View style={styles.content}>
        <Text style={styles.title}>芝麻爱上街</Text>
        <ScrollableTabView
          style={styles.container}
          renderTabBar={() => <DefaultTabBar />}
          tabBarUnderlineStyle={styles.lineStyle}
          locked={true}//表示手指是否能拖动视图  默认false  true则不能拖动,只可点击
          tabBarBackgroundColor='#fff'//设置整个Tab这一栏的背景颜色
          tabBarActiveTextColor={styles.activeTextColor}//设置选中Tab的文字颜色
          tabBarInactiveTextColor={styles.inactiveTextColor}//设置未选中Tab的文字颜色
          tabBarTextStyle={{fontSize:14}}//设置Tab文字的样式
        >
          <View style={styles.textStyle} tabLabel='登录'>
            <View style={styles.inputBox}>
              <Image source={require('../../static/img/icon/iconUser.png')} style={styles.LoginIcon}/>
              <TextInput type="text" placeholder="用户名" style={styles.input}/>
            </View>
            <View style={styles.inputBox}>
              <Image source={require('../../static/img/icon/iconPassword.png')} style={[styles.LoginIcon,{width:20,height:20}]}/>
              <TextInput type='Password' placeholder="密码" style={styles.input}/>
            </View>
            <Text style={styles.more}>登录</Text>
          </View>
          <View style = {styles.textStyle} tabLabel = '注册'>
            <View style={styles.inputBox}>
              <Image source={require('../../static/img/icon/iconUser.png')} style={styles.LoginIcon}/>
              <TextInput type="text" placeholder="用户名" style={styles.input}/>
            </View>
            <View style={styles.inputBox}>
              <Image source={require('../../static/img/icon/iconPassword.png')} style={[styles.LoginIcon,{width:20,height:20}]}/>
              <TextInput type='Password' placeholder="密码" style={styles.input}/>
            </View>
            <View style={styles.inputBox}>
              <Image source={require('../../static/img/icon/iconPassword.png')} style={[styles.LoginIcon,{width:20,height:20}]}/>
              <TextInput type='Password' placeholder="确认密码" style={styles.input}/>
            </View>
            <Text style={styles.more}>注册</Text>
          </View>
        </ScrollableTabView>
      </View>
    );
  };
};

const styles = StyleSheet.create({
  box: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content:{
    flex:1,
    marginLeft:40,
    marginVertical:20,
    height:height,
    overflow: 'hidden'
  },
  title:{
    textAlign: 'left',
    fontWeight: 'bold',
    fontSize:18,
    marginTop: 15
  },
  container:{
    flex:1,
    marginTop:height * 0.15,
    marginRight:80,
    justifyContent:'center',
    overflow: 'hidden'
  },
  lineStyle:{
    height:2,
    backgroundColor: '#000',
  },
  activeTextColor:{
    fontWeight: 'bold',
  },
  inactiveTextColor:{
    color:'#000'
  },
  inputBox:{
    flexDirection:'row',
    alignItems:'center',
    borderBottomWidth:1,
    borderBottomColor:'#ccc',
    marginTop:15
  },
  LoginIcon:{
    width:25,
    height:25
  },
  input:{
    width:width,
    paddingLeft:10,
  },
  more:{
    width:width * 0.5,
    paddingVertical:15,
    backgroundColor:'#000',
    color: '#fff',
    fontSize:14,
    textAlign: 'center',
    marginTop:60,
    borderRadius:5,
    marginLeft: width * 0.1
  }
});

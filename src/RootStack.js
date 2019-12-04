import React, {Component} from 'react'
import {Image, Text, TouchableOpacity} from 'react-native'
import {createStackNavigator, createAppContainer, createBottomTabNavigator} from 'react-navigation';
import commonStyle from './public/style'
import screen from './utils/screen'


//login
import LoginScreen from './views/login/login'

// tab
import HomeScreen from './views/tabScreens/home'
import FindScreen from './views/tabScreens/find'
import ReleaseScreen from './views/tabScreens/release'
import HotScreen from './views/tabScreens/hot'
import MyScreen from './views/tabScreens/my'

//my
import PersonalCenterScreen from './views/my/personalCenter'
//图片预览
import PictureViewScreen from './views/pictureView'
//分类
import ClassificationScreen from './views/classification'
//为你推荐
import RecommendScreen from './views/find/recommend'
//商品详情
import CommodityDetailsScreen from './views/purchase/commodityDetails'

const Tab = createBottomTabNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: ({navigation}) => ({
        tabBarLabel: '首页',
        tabBarIcon: ({focused}) => {
          if (focused) {
            return (
              <Image
                source={require('./static/img/tab/home_selected.png')}
                style={[commonStyle.tabBottomImg]}/>
            );
          }
          return (
            <Image
              source={require('./static/img/tab/home.png')}
              style={[commonStyle.tabBottomImg]}/>
          );
        },
      })
    },
    Find: {
      screen: FindScreen,
      navigationOptions: ({navigation}) => ({
        tabBarLabel: '发现',
        tabBarIcon: ({focused}) => {
          if (focused) {
            return (
              <Image
                source={require('./static/img/tab/find_selected.png')}
                style={[commonStyle.tabBottomImg]}/>
            );
          }
          return (
            <Image
              source={require('./static/img/tab/find.png')}
              style={[commonStyle.tabBottomImg]}/>
          );
        },
      }),
    },
    Release: {
      screen: ReleaseScreen,
      navigationOptions: ({navigation}) => ({
        tabBarLabel: ' ',
        tabBarIcon: ({focused}) => {
          if (focused) {
            return (
              <Image
                source={require('./static/img/tab/release.png')}
                style={{width:60,height:60,marginBottom: 10}}/>
            );
          }
          return (
            <Image
              source={require('./static/img/tab/release.png')}
              style={{width:60,height:60,marginBottom: 10}}/>
          );
        },
      })
    },
    Hot: {
      screen: HotScreen,
      navigationOptions: ({navigation}) => ({
        tabBarLabel: '好货',
        tabBarIcon: ({focused}) => {
          if (focused) {
            return (
              <Image
                source={require('./static/img/tab/hot_selected.png')}
                style={[commonStyle.tabBottomImg]}/>
            );
          }
          return (
            <Image
              source={require('./static/img/tab/hot.png')}
              style={[commonStyle.tabBottomImg]}/>
          );
        },
      }),
    },
    My: {
      screen: MyScreen,
      navigationOptions: ({navigation}) => ({
        tabBarLabel: '我的',
        tabBarIcon: ({focused}) => {
          if (focused) {
            return (
              <Image
                source={require('./static/img/tab/my_selected.png')}
                style={[commonStyle.tabBottomImg]}/>
            );
          }
          return (
            <Image
              source={require('./static/img/tab/my.png')}
              style={[commonStyle.tabBottomImg]}/>
          );
        },
      }),
    }
  },
  {
    //设置TabNavigator的位置
    tabBarPosition: 'bottom',
    //是否在更改标签时显示动画
    animationEnabled: true,
    gesturesEnabled: true,
    //是否允许在标签之间进行滑动
    swipeEnabled: true,
    //按 back 键是否跳转到第一个Tab(首页)， none 为不跳转
    backBehavior: "none",
    //设置Tab标签的属性
    tabBarOptions: {
      //Android属性
      upperCaseLabel: false,//是否使标签大写，默认为true
      //共有属性
      showIcon: true,//是否显示图标，默认关闭
      showLabel: true,//是否显示label，默认开启
      activeTintColor: '#000',//label和icon的前景色 活跃状态下（选中）
      inactiveTintColor: '#000',//label和icon的前景色 活跃状态下（未选中）
      style: { //TabNavigator 的背景颜色
        backgroundColor: 'white',
        height: 54,
        borderTopWidth: screen.onePixel * 2,
        borderTopColor:'#eee',
      },
      indicatorStyle: {//标签指示器的样式对象（选项卡底部的行）。安卓底部会多出一条线，可以将height设置为0来暂时解决这个问题
        height: 0,
      },
      labelStyle: {//文字的样式
        fontSize: 10,
        marginTop: -10,
        marginBottom: 8,
      },
      iconStyle: {//图标的样式
      }
    },
  }
);

const RootStack = createStackNavigator(
  {
    Tab:{ screen:Tab },

    //login
    Login:{ screen:LoginScreen },

    //my
    PersonalCenter:{ screen:PersonalCenterScreen },
    //图片预览
    PictureView:{ screen:PictureViewScreen },
    //分类
    Classification:{ screen: ClassificationScreen },
    //为你推荐
    Recommend:{screen:RecommendScreen},
    //商品详情
    CommodityDetails:{ screen:CommodityDetailsScreen }




  },
  {
    headerMode:'none',
    initialRouteName:'Recommend'
  }
);
export default RootStack

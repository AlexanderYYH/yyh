import React, { Component } from 'react';
import {
  StyleSheet,
  Dimensions,
  View,
  ScrollView,
  Text,
  Image,
  TouchableOpacity,
} from 'react-native';
import commonStyle from '../../public/style';
import Swiper from 'react-native-swiper';
import Dialog, { DialogButton, DialogContent, DialogFooter, SlideAnimation } from 'react-native-popup-dialog';

const { width, height } = Dimensions.get('window');

export default class CommodityDetailsScreen extends Component{
  constructor(props) {
    super(props);
    this.state = {
      share: [
        { shareIcon: require('../../static/img/share/nice.png'), shareName: 'nice' },
        { shareIcon: require('../../static/img/share/WechatMoments.png'), shareName: '朋友圈' },
        { shareIcon: require('../../static/img/share/WeChat.png'), shareName: '微信好友' },
        { shareIcon: require('../../static/img/share/QQ.png'), shareName: 'QQ' },
        { shareIcon: require('../../static/img/share/QQZone.png'), shareName: 'QQ空间' },
        { shareIcon: require('../../static/img/share/micro-blog.png'), shareName: '微博' },
        { shareIcon: require('../../static/img/share/Instagram.png'), shareName: 'Instagram' },
        { shareIcon: require('../../static/img/share/Report.png'), shareName: '举报' },
      ],
      banner: [
        { url: require('../../static/img/product/shoes/1.png') },
        { url: require('../../static/img/product/shoes/2.png') },
        { url: require('../../static/img/product/shoes/3.png') },
        { url: require('../../static/img/product/shoes/4.png') },
        { url: require('../../static/img/product/shoes/5.png') },
        { url: require('../../static/img/product/shoes/6.png') },
        { url: require('../../static/img/product/shoes/7.png') },
      ],
    };
  };

  //页面跳转
  navigateTo = (routeName, ...params) => {
    const { navigate } = this.props.navigation;
    navigate(routeName, ...params);
  };

  //弹出框
  _openShareDialog = () => {
    this.setState({
      slideShareAnimationDialog: true
    })
  };
  _closeShareDialog = () => {
    this.setState({
      slideShareAnimationDialog: false
    })
  };
  _closeDialog = () => {
    this.setState({
      slideAnimationDialog: false
    })
  };
  onBackAndroid = () => {
    const {slideAnimationDialog, slideShareAnimationDialog} = this.state
    if (slideAnimationDialog) {
      this._closeDialog()
      return true;
    } else if(slideShareAnimationDialog) {
      this._closeShareDialog()
      return true;
    } else {
      return false
    }
  };

  render() {
    return(
      <View style={ styles.box }>
        { this.renderNav() }
        <ScrollView
          showsVerticalScrollIndicator={ false }
        >
          { this.renderContent() }
        </ScrollView>
        { this.renderShareDialog() }
      </View>
    );
  };

  renderShareDialog = () => {
    const { share } = this.state;
    return (
      <Dialog
        onDismiss={this._closeShareDialog}
        onTouchOutside={this._closeShareDialog}
        onHardwareBackPress={this.onBackAndroid}
        dialogStyle={{
          position: 'absolute',
          bottom: 0,
          borderRadius:0,
        }}
        width={1}
        visible={this.state.slideShareAnimationDialog}
        dialogAnimation={new SlideAnimation({slideFrom: 'bottom'})}
        footer={
          <DialogFooter style={{color:'#999'}}>
            <View>
              <DialogButton
                text="取消"
                textStyle={{
                  color:'#999',
                  textAlign:'center',
                  width,
                }}
                onPress={() => this._closeShareDialog() }
              />
            </View>
          </DialogFooter>
        }
      >
        <DialogContent>
          <View style={styles.shareContainer}>
            <View style={styles.shareTitle}>
              <Text style={{color: '#999', fontSize: 14}}>分享到站外: </Text>
            </View>
            <View style={styles.shareRow}>
              {
                share.map((item,index) =>{
                  return (
                    <View style={styles.shareItem} key={index}>
                      <TouchableOpacity activeOpacity={ 1 }>
                        <Image source={item.shareIcon} style={styles.shareIco}/>
                      </TouchableOpacity>
                      <Text style={styles.shareText}>{item.shareName}</Text>
                    </View>
                  )
                })
              }
            </View>
          </View>
        </DialogContent>
      </Dialog>
    )
  };

  renderNav = () => {
    const {navigation} = this.props;
    const title = navigation.getParam("title");
    return (
      <View style={ commonStyle.navContainerColor }>
        <TouchableOpacity onPress={ () => this.props.navigation.goBack() } activeOpacity={ 1 }
                          style={ [commonStyle.backBtn,{width:30}] }>
          <Image source={ require('../../static/img/icon/arrow_left_C5.png') } style={ commonStyle.backImg }/>
        </TouchableOpacity>
        <Text style={ commonStyle.navHeaderTitle }>{title}</Text>
        <TouchableOpacity onPress={ this._openShareDialog } activeOpacity={ 1 }>
          <Image source={ require('../../static/img/icon/shareIcon.png') } style={ styles.shareIcon }/>
        </TouchableOpacity>
      </View>
    );
  };

  renderContent = () => {
    const { banner } = this.state;
    return (
      <View style={{flex:1,height: height * 0.55,}}>
        <View style={ styles.bannerBox }>
          <Swiper
            style={ styles.banner }
            height={ 130 }                   //组件高度
            loop={ true }                    //如果设置为false，那么滑动到最后一张时，再次滑动将不会滑到第一张图片。
            autoplay={ true }                //自动轮播
            autoplayTimeout={ 3 }                //每隔3秒切换
            horizontal={ true }              //水平方向，为false可设置为竖直方向
            paginationStyle={ { bottom: -20 } } //小圆点的位置：距离底部10px
            showsButtons={ false }           //为false时不显示控制按钮
            showsPagination={ true }       //为false不显示下方圆点
            dot={ <View style={ {           //未选中的圆点样式
              backgroundColor: '#d9dadb',
              width: 4,
              height: 4,
              borderRadius: 4,
              margin: 5,
            } }/> }
            activeDot={ <View style={ {    //选中的圆点样式
              backgroundColor: '#bdbfc0',
              width: 8,
              height: 4,
              borderRadius: 4,
              margin: 5,
            } }/> }
          >
            {
              banner.map((item, index) => {
                return (
                  <Image style={ styles.bannerImg } key={ index } source={ item.url }/>
                );
              })
            }
          </Swiper>
        </View>
      </View>
    )
  }

};

const styles = StyleSheet.create({
  box:{
    flex:1,
    backgroundColor:'#fff'
  },
  shareIcon: {
    width: 30,
    height: 30,
  },
  bannerBox: {
    width: width,
    height: height * 0.5,
  },
  bannerImg: {
    width:'100%',
    height: '100%',
  },
});

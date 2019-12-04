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
import commodityDetails from '../purchase/commodityDetails';

const { width, height } = Dimensions.get('window');

const renderPagination = (index, total, context) => {
  return (
    <View style={ styles.paginationStyle }>
      <Text style={ { color: '#fff' } }>
        <Text style={ styles.paginationText }>{ index + 1 }</Text>/{ total }
      </Text>
    </View>
  );
};
export default class RecommendScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      slideShareAnimationDialog: false,
      interest: [
        {
          img: require('../../static/img/headBackground/img5.png'),
          name: '电车情人',
        },
      ],
      recommendBanner: [
        { url: require('../../static/img/product/commodity/img8.png') },
        { url: require('../../static/img/product/commodity/img9.png') },
        { url: require('../../static/img/product/commodity/img10.png') },
        { url: require('../../static/img/product/commodity/img11.png') },
      ],
      commodityDetails:[
        {
          img: require('../../static/img/product/shoes/1.png'),
          title:'YEEZY 500 2018版"UTILITY BLACK"黑500',
          prize:'999',
          number:'14755'
        }
      ],
      swiperText: [
        { text: '外套：Guuka' },
        { text: '领口采用了立领设计，外加可拆印的术贴布设计，别具一格，吸引眼球。简约的口袋配上字母印花设计，实用有型，耐看百搭。领口搭配可调节大小的魔术贴，实用耐看！非常暖和！' },
        { text: '背心：Nike X ambush' },
        { text: '鞋子：Yeezy500' },
      ],
      fabuiousHead: [
        { img: require('../../static/img/headBackground/img1.png') },
        { img: require('../../static/img/headBackground/img2.png') },
        { img: require('../../static/img/headBackground/img3.png') },
        { img: require('../../static/img/headBackground/img4.png') },
        { img: require('../../static/img/headBackground/img5.png') },
      ],
      commentList: [
        {
          id: 111,
          clike: 30,
          cIsMeLike: false,
          head: require('../../static/img/headBackground/img3.png'),
          name:'芝麻爱上街',
          comment:'人美衣品好',
          date:'1天前'
        },
        {
          id: 222,
          clike: 23,
          cIsMeLike: false,
          head: require('../../static/img/headBackground/img4.png'),
          name:'Catcake',
          comment:'500 8错',
          date:'6天前'
        },
        {
          id: 333,
          clike: 0,
          cIsMeLike: false,
          head: require('../../static/img/headBackground/img1.png'),
          name:'LIUYANG224399',
          comment:'长得好看的人不穿衣服都好看哈哈哈哈',
          date:'50分钟前'
        },
        {
          id: 444,
          clike: 15,
          cIsMeLike: false,
          head: require('../../static/img/headBackground/img2.png'),
          name:'Chaos-_',
          comment:'同款8同色',
          date:'2天前'
        },
      ],
      share:[
        { shareIcon: require('../../static/img/share/nice.png'), shareName:'nice' },
        { shareIcon: require('../../static/img/share/WechatMoments.png'), shareName:'朋友圈' },
        { shareIcon: require('../../static/img/share/WeChat.png'), shareName:'微信好友' },
        { shareIcon: require('../../static/img/share/QQ.png'), shareName:'QQ' },
        { shareIcon: require('../../static/img/share/QQZone.png'), shareName:'QQ空间' },
        { shareIcon: require('../../static/img/share/micro-blog.png'), shareName:'微博' },
        { shareIcon: require('../../static/img/share/Instagram.png'), shareName:'Instagram' },
        { shareIcon: require('../../static/img/share/Report.png'), shareName:'举报' },
      ]
    };
  };

  //页面跳转
  navigateTo = (routeName, ...params) => {
    const { navigate } = this.props.navigation;
    navigate(routeName, ...params);
  };

  //图片预览
  _openMax = (imgArr) => {
    this.navigateTo('PictureView', { imgArr });
  };

  //点赞
  renderFabulous(index, {cIsMeLike, clike}){
    return(
      <TouchableOpacity activeOpacity={ 1 } style={commonStyle.RowFlexEnd} onPress={() => this.setClike(index)}>
        {
          cIsMeLike
            ? (<Image source={require('../../static/img/icon/fabulousIcon.png')} style={styles.CommentIcon}/>)
            : (<Image source={require('../../static/img/icon/nofabulousIcon.png')} style={styles.CommentIcon}/>)
        }
        <Text style={{fontSize:12,marginLeft:2}}>{clike ? clike : ''}</Text>
      </TouchableOpacity>
    )
  };
  setClike = (index) => {
    let {commentList} = this.state
    let item = commentList[index]
    if(item.cIsMeLike) {
      item.cIsMeLike = false
      item.clike--
    } else {
      item.cIsMeLike = true
      item.clike++
    }
    commentList[index] = item
    this.setState({
      commentList
    })
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
    return (
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

  renderNav = () => {
    return (
      <View style={ commonStyle.navContainerColor }>
        <TouchableOpacity onPress={ () => this.props.navigation.goBack() } activeOpacity={ 1 }
                          style={ commonStyle.backBtn }>
          <Image source={ require('../../static/img/icon/arrow_left_C5.png') } style={ commonStyle.backImg }/>
        </TouchableOpacity>
        <Text style={ commonStyle.navHeaderTitle }>为你推荐</Text>
        <View style={ commonStyle.navHeaderNull }/>
      </View>
    );
  };

  renderContent = () => {
    const { interest, recommendBanner, commodityDetails, swiperText, fabuiousHead, commentList } = this.state;
    return (
      <View style={ styles.content }>
        {
          interest.map((item, index) => {
            return (
              <View style={ styles.intereatStyle } key={ index }>
                <View style={ [commonStyle.RowCenterBetween] }>
                  <Image source={ item.img } style={ styles.InterestUserPortrait }/>
                  <Text style={ styles.InterestContentTitle }>{ item.name }</Text>
                </View>
                <Text style={ styles.InterestMore }>+关注</Text>
              </View>
            );
          })
        }
        <Swiper
          style={ styles.swiper }
          renderPagination={ renderPagination }
          loop={ true }
        >
          {
            recommendBanner.map((item, index) => {
              return (
                <TouchableOpacity
                  onPress={() => this._openMax(item.recommendBanner) }
                  style={ styles.slide }
                  key={ index }
                  activeOpacity={ 1 }
                >
                  <Image style={ styles.image } source={ item.url }/>
                </TouchableOpacity>
              );
            })
          }
        </Swiper>
        {
          commodityDetails.map((item,index) => {
            return(
              <TouchableOpacity
                style={ styles.commodity }
                key={index}
                onPress={() => {this.props.navigation.navigate('CommodityDetails',{ title:'YEEZY 500 2018版"UTILITY BLACK"黑500' })}}
              >
                <View style={ styles.commodityLeft }>
                  <View style={ styles.commodityImg }>
                    <Image source={ item.img } style={ styles.image }/>
                  </View>
                  <View style={ styles.commodityTextContent }>
                    <Text style={ styles.commodityTitle }>{item.title}</Text>
                    <View style={ styles.commodityTextContentBottom }>
                      <Text style={ styles.prize }>￥{item.prize}</Text>
                      <Text style={ [styles.BuyNumber, { paddingHorizontal: 8 }] }>·</Text>
                      <Text style={ styles.BuyNumber }>{item.number}人付款</Text>
                    </View>
                  </View>
                </View>
                <Image source={ require('../../static/img/icon/arrow_right_black.png') } style={ commonStyle.RightImg }/>
              </TouchableOpacity>
            )
          })
        }
        <View style={ styles.swiperText }>
          {
            swiperText.map((item, index) => {
              return (
                <Text style={ styles.swiperTextStyle } key={ index }>{ item.text }</Text>
              );
            })
          }
        </View>
        <View style={ styles.fabulousContent }>
          <View style={ commonStyle.RowCenter }>
            <Image source={ require('../../static/img/icon/nofabulous.png') } style={ styles.fabuiousIcon }/>
            <View style={ styles.fabulousImg }>
              {
                fabuiousHead.map((item, index) => {
                  return (
                    <Image source={ item.img } key={ index } style={ styles.fabuiousHead }/>
                  );
                })
              }
            </View>
          </View>
          <TouchableOpacity onPress={ this._openShareDialog } activeOpacity={ 1 }>
            <Image source={ require('../../static/img/icon/shareIcon.png') } style={ styles.shareIcon }/>
          </TouchableOpacity>
        </View>
        <View style={ styles.commentBox }>
          <Text style={ styles.commentNumber }>4条评论</Text>
          {
            commentList.map((item, index) => {
              return (
                <View style={ styles.commentList } key={index}>
                  <Image source={ item.head } style={ styles.commentHead }/>
                  <View style={ styles.commentText }>
                    <View style={ styles.commentTextLeft }>
                      <Text style={ styles.commentName }>{item.name}</Text>
                      <Text style={ styles.commentContent }>{item.comment}</Text>
                      <Text style={ styles.commentDate }>{item.date}</Text>
                    </View>
                    { this.renderFabulous(index, item) }
                  </View>
                </View>
              );
            })
          }
        </View>
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

};

const styles = StyleSheet.create({
  box: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    flex: 1,
  },
  intereatStyle: {
    flexDirection: 'row',
    alignItems:'center',
    justifyContent: 'space-between',
    padding: 15,
  },
  InterestUserPortrait: {
    width: 46,
    height: 46,
    borderRadius: 5,
  },
  InterestContentTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333333',
    marginLeft: 15,
  },
  InterestMore: {
    width: width * 0.15,
    backgroundColor:'#f5e14b',
    fontSize:12,
    color:'#333333',
    textAlign: 'center',
    borderRadius: 5,
    paddingVertical:0,
    fontWeight:'bold',
    alignContent:'center'
  },
  swiper: {
    height: height * 0.65,
  },
  slide: {
    width,
    height: height * 0.65,
    backgroundColor: 'transparent',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  paginationStyle: {
    position: 'absolute',
    top: 20,
    right: 20,
    backgroundColor: 'rgba(204,204,204,0.5)',
    borderRadius: 100,
    paddingHorizontal: 10,
  },
  paginationText: {
    fontSize: 16,
  },
  commodity: {
    margin: 15,
    backgroundColor: '#f7f7f7',
    paddingTop: 1.5,
    paddingLeft: 1.5,
    paddingBottom: 1.5,
    paddingRight: 10,
    borderRadius: 5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  commodityLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  commodityImg: {
    width: 80,
    height: 80,
    borderRadius: 5,
  },
  commodityTextContent: {
    width: width - 160,
    marginLeft: 10,
  },
  commodityTitle: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  commodityTextContentBottom: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 5,
    marginTop: 15,
  },
  prize: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#333',
  },
  BuyNumber: {
    fontSize: 12,
    color: '#999',
  },
  swiperText: {
    paddingHorizontal: 15,
  },
  swiperTextStyle: {
    fontSize: 14,
    color: '#333',
    marginBottom: 5,
  },
  fabulousContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 15,
    paddingHorizontal: 15,
  },
  fabuiousIcon: {
    width: 60,
    height: 28,
  },
  fabulousImg: {
    width: (width - 150),
    flexDirection: 'row',
    alignItems: 'center',
  },
  fabuiousHead: {
    width: 28,
    height: 28,
    borderRadius: 5,
    marginLeft: 10,
  },
  shareIcon: {
    width: 30,
    height: 30,
  },
  commentBox: {
    paddingLeft: 15,
    paddingTop: 10,
    paddingBottom: 30,
  },
  commentNumber: {
    paddingVertical: 15,
    borderBottomWidth: 0.5,
    borderBottomColor: '#c5c5c5',
    fontSize: 14,
    color: '#999',
  },
  commentList: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    paddingVertical: 15,
  },
  commentHead: {
    width: 40,
    height: 40,
    borderRadius: 5,
  },
  commentText: {
    width: width - 70,
    paddingRight: 15,
    borderBottomWidth: 0.5,
    borderBottomColor: '#c5c5c5',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingBottom: 15,
  },
  commentName: {
    fontSize: 14,
    color: '#999',
  },
  commentContent: {
    fontSize: 14,
    color: '#333',
    paddingVertical: 5,
  },
  commentDate: {
    fontSize: 14,
    color: '#999',
  },
  commentContentText: {
    fontSize: 12,
    color: '#333',
    width: width * 0.75,
    letterSpacing: 0.5,
  },
  CommentIcon: {
    width: 20,
    height: 20,
  },
  //share
  shareContainer: {
    paddingBottom:0
  },
  shareTitle: {
    paddingVertical: 15,
    paddingLeft:5
  },
  shareRow: {
    flexDirection: 'row',
    paddingVertical: 5,
    flexWrap:'wrap',
  },
  shareItem: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
    paddingHorizontal:5
  },
  shareIco:{
    width:width / 5 - 18,
    height:width / 5 - 18,
  },
  shareText: {
    marginTop: 5,
    color: '#999',
    fontSize: 12
  },
});

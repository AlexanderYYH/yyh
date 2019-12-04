import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  Dimensions,
  Text,
  ScrollView,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import commonStyle from '../../public/style';
import Swiper from 'react-native-swiper';
import Dialog, { DialogContent, SlideAnimation, DialogFooter, DialogButton } from "react-native-popup-dialog";


const { width, height } = Dimensions.get('window');

const renderPagination = (index, total, context) => {
  return (
    <View style={styles.paginationStyle}>
      <Text style={{ color: '#fff' }}>
        <Text style={styles.paginationText}>{index + 1}</Text>/{total}
      </Text>
    </View>
  )
};

export default class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      slideShareAnimationDialog: false,
      dynamic:[
        {
          id: 111,
          headPortrait: require('../../static/img/headBackground/img3.png'),
          title:'芝麻爱上街',
          data:'11月22日',
          dynamicImgs:[
            { url: 'https://gd4.alicdn.com/imgextra/i2/0/O1CN017bSiqs1Ry1ZoXpLOj_!!0-item_pic.jpg_400x400.jpg', },
            { url: 'https://gd2.alicdn.com/imgextra/i2/251602179/O1CN01fGWE3i1Ry1Zl8trzR_!!251602179.jpg_400x400.jpg' },
            { url: 'https://gd1.alicdn.com/imgextra/i1/251602179/O1CN01uZb2WV1Ry1Zqf84rz_!!251602179.jpg_400x400.jpg' },
            { url: 'https://gd4.alicdn.com/imgextra/i4/251602179/O1CN01HKQC5A1Ry1ZkDVGtn_!!251602179.jpg_400x400.jpg' },
            { url:'https://gd3.alicdn.com/imgextra/i3/251602179/O1CN01CWNyIC1Ry1Zn9f26e_!!251602179.jpg_400x400.jpg' },
            { url:'https://gd3.alicdn.com/imgextra/i3/251602179/O1CN012kUS0j1Ry1akTSz0u_!!0-item_pic.jpg_400x400.jpg' }
          ],
          imageTextContent:'长袖T恤男复古高街骷髅潮牌oversize宽松嘻哈街舞秋季套头打底衫',
          fabuiousHead:[
            { img: require('../../static/img/headBackground/img1.png') },
            { img: require('../../static/img/headBackground/img2.png') },
          ],
          commentList:[
            {
              cid: 111,
              clike: 0,
              cIsMeLike: false,
              name:'芝麻爱上街',
              text:'长袖T恤男复古高街骷髅潮牌oversize'
            },
            {
              cid: 222,
              clike: 0,
              cIsMeLike: false,
              name:'小甜甜',
              text:'宽松嘻哈街舞秋季套头打底衫'
            },
          ]
        },
        {
          id: 222,
          headPortrait: require('../../static/img/headBackground/img3.png'),
          title:'芝麻爱上街',
          data:'11月22日',
          dynamicImgs:[
            { url:'https://img.alicdn.com/imgextra/i1/2279342495/O1CN01nOXIeR1UIkfgxiT3G_!!0-item_pic.jpg_430x430q90.jpg' },
            { url:'https://img.alicdn.com/imgextra/i1/2279342495/O1CN01DkMgIu1UIkknutRij_!!2279342495.jpg_430x430q90.jpg' },
            { url:'https://img.alicdn.com/imgextra/i3/2279342495/TB2LqdZbFYqK1RjSZLeXXbXppXa_!!2279342495.jpg_430x430q90.jpg' },
            { url:'https://img.alicdn.com/imgextra/i4/2279342495/O1CN01xPOisZ1UIkl7MyXgP_!!2279342495.jpg_430x430q90.jpg' },
          ],
          imageTextContent:'熊猫本 冬季棉服男潮牌OVERSIZE情侣工装保暖外套国潮棉衣男短款',
          fabuiousHead:[
            { img: require('../../static/img/headBackground/img1.png') },
            { img: require('../../static/img/headBackground/img2.png') },
          ],
          commentList:[
            {
              cid: 111,
              clike: 0,
              cIsMeLike: false,
              name:'熊猫本',
              text:'冬季棉服男潮牌OVERSIZE'
            },
          ]
        },
        {
          id: 333,
          headPortrait: require('../../static/img/headBackground/img3.png'),
          title:'芝麻爱上街',
          data:'11月22日',
          dynamicImgs:[
            { url:'https://gd3.alicdn.com/imgextra/i3/1076575865/TB2MY_Bc4XkpuFjy0FiXXbUfFXa_!!1076575865.jpg_400x400.jpg' },
            { url:'https://gd3.alicdn.com/imgextra/i3/1076575865/TB2DPUNeRfM8KJjSZFrXXXSdXXa_!!1076575865.jpg_400x400.jpg' },
            { url:'https://gd1.alicdn.com/imgextra/i1/1076575865/TB27hrndSFmpuFjSZFrXXayOXXa_!!1076575865.jpg_400x400.jpg' },
            { url:'https://gd1.alicdn.com/imgextra/i1/1076575865/TB2UHrpdS8mpuFjSZFMXXaxpVXa_!!1076575865.jpg_400x400.jpg' }
          ],
          imageTextContent:'食钓SEDUCEgear原创教练夹克外套男女情侣休闲加绒国潮牌嘻哈',
          fabuiousHead:[
            { img: require('../../static/img/headBackground/img1.png') },
            { img: require('../../static/img/headBackground/img2.png') },
          ],
          commentList:[
            {
              cid: 111,
              clike: 0,
              cIsMeLike: false,
              name:'张三',
              text:'教练夹克外套男女情侣休闲'
            },
          ]
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
        { shareIcon: require('../../static/img/share/download.png'), shareName:'保存照片' },
        { shareIcon: require('../../static/img/share/delete.png'), shareName:'删除' },
      ]
    };
  }

  setClike = (index, index4) => {
    let {dynamic} = this.state
    let item = dynamic[index].commentList[index4]
    if(item.cIsMeLike) {
      item.cIsMeLike = false
      item.clike--
    } else {
      item.cIsMeLike = true
      item.clike++
    }
    dynamic[index].commentList[index4] = item
    this.setState({
      dynamic
    })
  };

  navigateTo = (routeName, ...params) => {
    const {navigate} = this.props.navigation
    navigate(routeName, ...params)
  };

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

  _openMax = (imgArr) => {
    this.navigateTo("PictureView",{imgArr})
  };

  render() {
    return (
      <View style={ styles.box }>
        { this.renderHeader() }
        <ScrollView
          showsVerticalScrollIndicator={ false }
        >
          { this.renderInterest() }
        </ScrollView>
        { this.renderShareDialog() }
      </View>
    );
  };

  //点赞
  renderFabulous(index, index4, {cIsMeLike, clike}){
      return(
        <TouchableOpacity activeOpacity={ 1 } style={commonStyle.RowFlexEnd} onPress={() => this.setClike(index, index4)}>
          {
            cIsMeLike
            ? (<Image source={require('../../static/img/icon/fabulousIcon.png')} style={styles.CommentIcon}/>)
            : (<Image source={require('../../static/img/icon/nofabulousIcon.png')} style={styles.CommentIcon}/>)
          }
          <Text style={{fontSize:12,color:'#333',marginLeft:2}}>{clike ? clike : ''}</Text>
        </TouchableOpacity>
      )
  };

  //Nav导航
  renderHeader() {
    return (
      <View style={ [commonStyle.navContainerColor] }>
        <Text style={[commonStyle.navHeaderNull]}/>
        <Text style={ [commonStyle.navHeaderTitle] }>芝麻爱上街</Text>
        <Text style={[commonStyle.navHeaderNull]}/>
      </View>
    );
  }

  //可能感兴趣的人
  renderInterest() {
    const {dynamic} = this.state;
    const interest = [
      {
        img: 'https://gd2.alicdn.com/imgextra/i2/251602179/O1CN01fGWE3i1Ry1Zl8trzR_!!251602179.jpg_400x400.jpg',
        name:'PACT 派克特',
      }
    ];
    return (
      <View style={{paddingBottom:5}}>
        <View style={styles.InterestBox}>
          <View style={[commonStyle.RowCenterBetween]}>
            <Text style={styles.InterestHeadText}>可能感兴趣的人</Text>
            <Text style={styles.InterestHeadIcon}>···</Text>
          </View>
          {
            interest.map((item,index) => {
              return (
            <View style={[commonStyle.RowCenterBetween, {marginTop:3}]} key={index}>
            <View style={[commonStyle.RowCenterBetween]}>
            <Image source={{uri: item.img}} style={styles.InterestUserPortrait}/>
            <View style={styles.InterestContentText}>
            <Text style={styles.InterestContentTitle}>{item.name}</Text>
            <Text style={styles.InterestContentTips}>推荐关注</Text>
            </View>
            </View>
            <Text style={styles.InterestMore}>+</Text>
            </View>
            )
          })
          }
        </View>
        {
          dynamic.map((item,index) => {
            return(
              <View style={styles.InterestList} key={index}>
                <View style={styles.InterestListHead}>
                  <View style={[commonStyle.RowCenterBetween]}>
                    <Image source={item.headPortrait} style={styles.InterestUserImg}/>
                    <Text style={styles.InterestContentName}>{item.title}</Text>
                  </View>
                  <Text style={styles.InterestData}>{item.data}</Text>
                </View>
                <View>
                  <View style={styles.Swiper}>
                    <Swiper
                      style={styles.wrapper}
                      renderPagination={renderPagination}
                      loop={true}
                    >
                      {
                        item.dynamicImgs.map((item2,index2) => {
                          return(
                            <TouchableOpacity
                              onPress={() => this._openMax(item.dynamicImgs)}
                              style={styles.slide}
                              key={index2}
                              activeOpacity={ 1 }
                            >
                              <Image style={styles.image} source={{uri: item2.url}} />
                            </TouchableOpacity>
                          )
                        })
                      }
                    </Swiper>
                  </View>
                  <Text numberOfLines={3} style={styles.imageTextContent}>{item.imageTextContent}</Text>
                </View>

                <View style={styles.TextContent}>
                  <View style={styles.fabulousContent}>
                    <View style={commonStyle.RowCenter}>
                      <Image source={require('../../static/img/icon/nofabulous.png')} style={styles.fabuiousIcon}/>
                      <View style={commonStyle.RowCenter}>
                        {
                          item.fabuiousHead.map((item3,index3) => {
                            return (
                              <Image source={item3.img} key={index3} style={styles.fabuiousHead}/>
                            )
                          })
                        }
                      </View>
                    </View>
                    <TouchableOpacity onPress={this._openShareDialog} activeOpacity={ 1 }>
                      <Text style={styles.InterestHeadIcon}>···</Text>
                    </TouchableOpacity>
                  </View>

                  <View>
                    {
                      item.commentList.map((item4,index4) => {
                        return(
                          <View style={styles.commentList} key={index4}>
                            <View style={styles.commentContent}>
                              <Text style={styles.commentContentName}>{item4.name}</Text>
                              <Text style={styles.commentContentText}>{item4.text}</Text>
                            </View>
                            {this.renderFabulous(index, index4, item4)}
                          </View>
                        )
                      })
                    }
                    <TextInput
                      multiline={true}
                      placeholder="说点什么"
                      style={styles.input}
                      maxLength={100}
                    />
                  </View>
                </View>
              </View>
            )
          })
        }
      </View>
    )
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
                        <Image source={item.shareIcon} style={styles.shareIcon}/>
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
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  headerStyle: {
    width: width,
    paddingVertical: 15,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  HeaderTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  InterestBox:{
    paddingHorizontal:15,
    paddingTop:5,
    paddingBottom:8,
    borderBottomWidth:0.5,
    borderBottomColor:'#f5f5f5',
  },
  InterestHeadText:{
    fontSize: 12,
    color:'#999999'
  },
  InterestHeadIcon:{
    fontSize:24,
    color:'#c5c5c5',
    fontWeight: 'bold',
    width:30,
    height:30,
    textAlign:'right',
  },
  InterestUserPortrait:{
    width:50,
    height:50,
    borderRadius:5
  },
  InterestContentText:{
    marginLeft:10,
  },
  InterestContentTitle:{
    fontSize:14,
    fontWeight:'bold',
    color:'#333333'
  },
  InterestContentTips:{
    color:'#999999',
    fontSize:12,
    marginTop: 5
  },
  InterestMore:{
    width: width * 0.15,
    backgroundColor:'#f5e14b',
    fontSize:22,
    color:'#333333',
    textAlign: 'center',
    borderRadius: 5,
    paddingVertical:0,
    fontWeight:'bold',
    alignContent:'center'
  },
  InterestList:{
    marginBottom:15
  },
  InterestListHead:{
    flexDirection:'row',
    alignItems: 'center',
    justifyContent:'space-between',
    paddingHorizontal:15,
    paddingTop:10,
    paddingBottom:8,
  },
  InterestUserImg:{
    width:40,
    height:40,
    borderRadius:5
  },
  InterestContentName:{
    fontSize:14,
    fontWeight:'bold',
    color:'#333333',
    marginLeft: 10
  },
  InterestData:{
    fontSize:12,
    color:'#999999'
  },

  Swiper:{
    width,
    height:400
  },
  wrapper:{
  },
  slide: {
    width,
    height:450,
    backgroundColor: 'transparent',
  },
  image: {
    width:'100%',
    height:'100%',
  },
  imageTextContent:{
    paddingHorizontal:15,
    paddingTop:10,
    color:'#333',
    fontSize:14,
    textAlign: 'auto',
    lineHeight:20,
    fontWeight:'bold',
  },
  paginationStyle: {
    position: 'absolute',
    top: 20,
    right: 20,
    backgroundColor: 'rgba(204,204,204,0.5)',
    borderRadius:100,
    paddingHorizontal:10,
  },
  paginationText: {
    fontSize: 16
  },
  TextContent:{
    paddingHorizontal:15,
  },
  fabulousContent:{
    flexDirection: 'row',
    alignItems:'center',
    justifyContent:'space-between',
    paddingVertical: 10
  },
  fabuiousIcon:{
    width:60,
    height:28,
  },
  fabuiousHead:{
    width:28,
    height:28,
    borderRadius:5,
    marginLeft:10
  },
  commentList:{
    alignItems:'flex-start',
    justifyContent:'space-between',
    flexDirection:'row',
    paddingBottom:5,
    marginTop:5
  },
  commentContent:{
    width:width * 0.75,
  },
  commentContentName:{
    fontSize:12,
    color:'#333',
    paddingBottom:5,
    fontWeight:'bold'
  },
  commentContentText:{
    fontSize:12,
    color:'#999',
    width:width * 0.75,
    letterSpacing: 0.5
  },
  CommentIcon:{
    width:20,
    height:20
  },
  input:{
    borderBottomWidth: 0.5,
    borderBottomColor: '#c5c5c5',
    padding:0,
    fontSize:12,
    color:'#333'
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
  shareIcon:{
    width:width / 5 - 18,
    height:width / 5 - 18,
  },
  shareText: {
    marginTop: 5,
    color: '#999',
    fontSize: 12
  },

});





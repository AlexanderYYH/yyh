import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  Dimensions,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import commonStyle from '../../public/style';
import Swiper from 'react-native-swiper';
const { width, height } = Dimensions.get('window');

export default class PersonalCenterScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      personalCenter:[{
        name:'芝麻爱上街',
        gender:'男',
        address:'常驻浙江 杭州',
        fabulous:'25',
        comment:'18',
        autograph:'我喜欢海，不喜欢浪'
      }],
      titleList:[
        { title:'照片', number:'14' },
        { title:'我有', number:'0' },
        { title:'关注', number:'22' },
        { title:'粉丝', number:'23' },
      ],
      dynamicImgs:[
        { url: 'https://gd4.alicdn.com/imgextra/i2/0/O1CN017bSiqs1Ry1ZoXpLOj_!!0-item_pic.jpg_400x400.jpg', },
        { url: 'https://gd2.alicdn.com/imgextra/i2/251602179/O1CN01fGWE3i1Ry1Zl8trzR_!!251602179.jpg_400x400.jpg' },
        { url: 'https://gd1.alicdn.com/imgextra/i1/251602179/O1CN01uZb2WV1Ry1Zqf84rz_!!251602179.jpg_400x400.jpg' },
        { url: 'https://gd4.alicdn.com/imgextra/i4/251602179/O1CN01HKQC5A1Ry1ZkDVGtn_!!251602179.jpg_400x400.jpg' },
        { url:'https://gd3.alicdn.com/imgextra/i3/251602179/O1CN01CWNyIC1Ry1Zn9f26e_!!251602179.jpg_400x400.jpg' },
        { url:'https://gd3.alicdn.com/imgextra/i3/251602179/O1CN012kUS0j1Ry1akTSz0u_!!0-item_pic.jpg_400x400.jpg' },
        { url:'https://img.alicdn.com/imgextra/i1/2279342495/O1CN01nOXIeR1UIkfgxiT3G_!!0-item_pic.jpg_430x430q90.jpg' },
        { url:'https://img.alicdn.com/imgextra/i1/2279342495/O1CN01DkMgIu1UIkknutRij_!!2279342495.jpg_430x430q90.jpg' },
        { url:'https://img.alicdn.com/imgextra/i3/2279342495/TB2LqdZbFYqK1RjSZLeXXbXppXa_!!2279342495.jpg_430x430q90.jpg' },
        { url:'https://img.alicdn.com/imgextra/i4/2279342495/O1CN01xPOisZ1UIkl7MyXgP_!!2279342495.jpg_430x430q90.jpg' },
        { url:'https://gd3.alicdn.com/imgextra/i3/1076575865/TB2MY_Bc4XkpuFjy0FiXXbUfFXa_!!1076575865.jpg_400x400.jpg' },
        { url:'https://gd3.alicdn.com/imgextra/i3/1076575865/TB2DPUNeRfM8KJjSZFrXXXSdXXa_!!1076575865.jpg_400x400.jpg' },
        { url:'https://gd1.alicdn.com/imgextra/i1/1076575865/TB27hrndSFmpuFjSZFrXXayOXXa_!!1076575865.jpg_400x400.jpg' },
        { url:'https://gd1.alicdn.com/imgextra/i1/1076575865/TB2UHrpdS8mpuFjSZFMXXaxpVXa_!!1076575865.jpg_400x400.jpg' }
      ],
    };
  };

  //页面跳转
  navigateTo = (routeName, ...params) => {
    const { navigate } = this.props.navigation;
    navigate(routeName, ...params);
  };

  _openMax = (imgArr) => {
    this.navigateTo("PictureView",{imgArr})
  };

  render() {
    return (
      <View style={styles.box}>
        { this.renderNav() }
        <ScrollView
          showsVerticalScrollIndicator={ false }
        >
          { this.renderNavHeader() }
          { this.renderContent() }
        </ScrollView>
      </View>
    )
  };

  renderNav(){
    return(
      <View style={styles.navContainer}>
        <TouchableOpacity onPress={() => this.props.navigation.goBack()} activeOpacity={ 1 } style={commonStyle.backBtn}>
          <Image source={require('../../static/img/icon/arrow_left_white.png')} style={commonStyle.backImg}/>
        </TouchableOpacity>
        <View style={styles.navHeaderRight}>
          <TouchableOpacity activeOpacity={ 1 }>
            <Image source={require('../../static/img/icon/QR_code.png')} style={styles.QRcode}/>
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={ 1 }>
            <Text style={styles.menu}>···</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }

  renderNavHeader = () => {
    const { personalCenter } = this.state;
    return (
      <ImageBackground source={require('../../static/img/headBackground/img3.png')} style={styles.headerBackground}>
        <View style={styles.bannerBox}>
          {
            personalCenter.map((item,index) => {
              return (
                <Swiper
                  key={index}
                  style={ styles.banner }
                  height={ 300 }                   //组件高度
                  loop={ true }                    //如果设置为false，那么滑动到最后一张时，再次滑动将不会滑到第一张图片。
                  autoplay={ false }                //自动轮播
                  autoplayTimeout={ 3 }                //每隔3秒切换
                  horizontal={ true }              //水平方向，为false可设置为竖直方向
                  paginationStyle={ { top: -220 } } //小圆点的位置：距离顶部位置
                  showsButtons={ false }           //为false时不显示控制按钮
                  showsPagination={ true }       //为false不显示下方圆点
                  dot={ <View style={ {           //未选中的圆点样式
                    backgroundColor: '#8c9195',
                    width: 4,
                    height: 4,
                    borderRadius: 4,
                    margin: 5,
                  } }/> }
                  activeDot={ <View style={ {    //选中的圆点样式
                    backgroundColor: '#d9dadb',
                    width: 8,
                    height: 4,
                    borderRadius: 4,
                    margin: 5,
                  } }/> }
                >
                  <View style={styles.personalCenter}>
                    <View style={styles.personalCenterContent}>
                      <Text style={styles.personalCenterName}>{item.name}</Text>
                      <View style={styles.personalCenterData}>
                        <View>
                          <View style={styles.personalCenterDataList}>
                            <Text style={styles.personalCenterText}>{item.gender}、</Text>
                            <Text style={styles.personalCenterText}>{item.address}</Text>
                          </View>
                          <Text style={styles.personalCenterText}>照片被赞{item.fabulous}次</Text>
                          <Text style={styles.personalCenterText}>评论被赞{item.comment}次</Text>
                        </View>
                        <Text style={styles.personalCenterMore}>编辑资料</Text>
                      </View>
                    </View>
                  </View>
                  <View style={styles.autograph}>
                    <Text style={styles.personalCenterText}>{item.autograph}</Text>
                  </View>
                </Swiper>
              )
            })
          }

        </View>
      </ImageBackground>
    )
  };

  renderContent = () => {
    const { titleList, dynamicImgs } = this.state;
    return(
      <View style={styles.ContentBox}>
        <View style={styles.ContentText}>
          {
            titleList.map((item,index) => {
              return (
                <View style={styles.ContentTextList} key={index}>
                  <Text style={styles.ContentTextListTitle}>{item.title}</Text>
                  <Text style={styles.ContentTextListNumber}>{item.number}</Text>
                </View>
              )
            })
          }
        </View>
        <View style={styles.ContentImg}>
          {
            dynamicImgs.map((item,index) => {
              return (
                <TouchableOpacity
                  // onPress={() => this._openMax(item.dynamicImgs)}
                  key={index}
                  activeOpacity={ 1 }
                >
                  <Image source={{uri: item.url}} style={styles.ContentImgList}/>
                </TouchableOpacity>
              )
            })
          }
        </View>
      </View>
    )
  };


};

const styles = StyleSheet.create({
  box: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  headerBackground:{
    flex:1,
    height:300,
  },
  navContainer:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    backgroundColor: 'transparent',
    width:width,
    height: 50,
    alignItems: 'center',
    position:'absolute',
    top:0,
    left:0,
    zIndex:999
  },
  navHeaderRight:{
    flexDirection:'row',
    alignItems:'center'
  },
  QRcode:{
    width:25,
    height:25,
    marginRight:15
  },
  menu:{
    fontSize:24,
    color:'#fff',
    fontWeight: 'bold'
  },
  bannerBox:{
    width,
    height:300,
    overflow: 'hidden',
  },
  personalCenter:{
    width,
    height:300,
  },
  personalCenterContent:{
    width:'100%',
    paddingHorizontal: 15,
    marginTop:200,
  },
  personalCenterName:{
    fontSize: 22,
    color: '#fff',
    fontWeight: 'bold',
    marginBottom:10
  },
  personalCenterData:{
    width:'100%',
    flexDirection:'row',
    alignItems:'flex-end',
    justifyContent:'space-between'
  },
  personalCenterDataList:{
    flexDirection:'row',
    alignItems:'center'
  },
  personalCenterText:{
    fontSize:12,
    color:'#fff'
  },
  personalCenterMore:{
    width:80,
    height:30,
    textAlign: 'center',
    color:'#fff',
    fontSize:12,
    lineHeight:30,
    borderRadius:5,
    backgroundColor:'rgba(153,153,153,0.5)'
  },
  autograph:{
    width,
    height:300,
    backgroundColor:'rgba(0,0,0,0.5)',
    justifyContent:'center',
    alignItems:'center',
    paddingHorizontal:15
  },
  ContentBox:{
    flex:1
  },
  ContentText:{
    flexDirection:'row',
    paddingHorizontal:15,
    alignItems:'center',
    justifyContent:'space-between',
    height:60,
    width,
  },
  ContentTextList:{
    width: width / 4 - 8,
    alignItems:'center',
    justifyContent:'center',
  },
  ContentTextListTitle:{
    fontSize:12,
    color:'#3b3b3b',
  },
  ContentTextListNumber:{
    fontSize:14,
    fontWeight:'bold',
    color:'#333333'
  },
  ContentImg:{
    flex:1,
    flexDirection:'row',
    alignItems:'center',
    flexWrap:'wrap',
    justifyContent:'flex-start'
  },
  ContentImgList:{
    width:width / 3 - 4,
    height:width / 3 - 4,
    marginHorizontal:2,
    marginVertical:2
  }
});

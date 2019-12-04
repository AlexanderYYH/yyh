import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  Dimensions,
  Text,
  ScrollView,
  Image,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import Swiper from 'react-native-swiper';
import { ScrollableTabView, DefaultTabBar, ScrollableTabBar, TabBarType } from 'react-native-vtron-scrollable-tab';

const { width, height } = Dimensions.get('window');

export default class HotScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      banner: [
        { bannerImg: require('../../static/img/product/hotBanner/banner1.png') },
        { bannerImg: require('../../static/img/product/hotBanner/banner2.png') },
        { bannerImg: require('../../static/img/product/hotBanner/banner3.png') },
        { bannerImg: require('../../static/img/product/hotBanner/banner4.png') },
        { bannerImg: require('../../static/img/product/hotBanner/banner5.png') },
      ],
    };
  };


  //页面跳转
  navigateTo = (routeName, ...params) => {
    const { navigate } = this.props.navigation;
    navigate(routeName, ...params);
  };

  render() {
    return (
      <View style={ styles.box }>
        { this.renderSearch() }

        <ScrollView
          showsVerticalScrollIndicator={ false }
        >
          { this.renderShopTab() }
        </ScrollView>
      </View>
    );
  };

  //搜索框
  renderSearch() {
    return (
      <View style={ styles.search }>
        <TouchableOpacity
          activeOpacity={ 1 }
          style={styles.navHeaderRight}
        >
          <Image source={require('../../static/img/icon/searchIcon.png')} style={styles.searchIcon}/>
          <Text style={styles.searchText}>黑天使</Text>
        </TouchableOpacity>
      </View>
    );
  }

  renderShopTab() {
    const { banner } = this.state;
    return (
      <View style={ styles.TabStyle }>
        <ScrollableTabView
          onChangeTab={ (fromIndex, toIndex) => {
            this.setState({ selectedIndex: toIndex });
          } }
          renderTabBar={ () => {
            return (
              <ScrollableTabBar
                containerStyle={ { borderBottomWidth: 0 } }
                tabContainerStyle={ {
                  flex: 1,
                  height: 44,
                  alignItems: 'flex-end',
                  marginBottom:10,
                  paddingRight:48
                } }
                activeTabStyle={ {} }
                activeTabTitleStyle={ {
                  fontSize: 22,
                  color: '#333333',
                  paddingRight: 15,
                  lineHeight: 30,
                  fontWeight: 'bold',
                } }
                inactiveTabStyle={ { paddingRight: 20 } }
                inactiveTabTitleStyle={ { fontSize: 14, color: '#333333', fontWeight: 'bold' } }
                tabBgStyle={ { height: 0 } }
              />
            );
          } }
        >
          <View tab={ { title: '全部' } } style={ styles.TabContent }>
            <View style={ styles.bannerBox }>
              <Swiper
                style={ styles.banner }
                height={ 130 }                   //组件高度
                loop={ true }                    //如果设置为false，那么滑动到最后一张时，再次滑动将不会滑到第一张图片。
                autoplay={ true }                //自动轮播
                autoplayTimeout={ 3 }                //每隔3秒切换
                horizontal={ true }              //水平方向，为false可设置为竖直方向
                paginationStyle={ { bottom: 3 } } //小圆点的位置：距离底部10px
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
                {
                  banner.map((item, index) => {
                    return (
                      <Image style={ styles.bannerImg } key={ index } source={ item.bannerImg }/>
                    );
                  })
                }
              </Swiper>
            </View>
          </View>
          <View tab={ { title: '二手' } } style={ styles.TabContent }>
            <View style={ styles.contentBox }>
              <Text>111111111111111111</Text>
            </View>
          </View>
          <View tab={ { title: '潮物' } } style={ styles.TabContent }>
            <View style={ styles.contentBox }>
              <Text>22222222222222222</Text>
            </View>
          </View>
          <View tab={ { title: '球鞋' } } style={ styles.TabContent }>
            <View style={ styles.contentBox }>
              <Text>33333333333333333333</Text>
            </View>
          </View>
          <View tab={ { title: '服饰' } } style={ styles.TabContent }>
            <View style={ styles.contentBox }>
              <Text>4444444444444444444444</Text>
            </View>
          </View>
          <View tab={ { title: '国潮' } } style={ styles.TabContent }>
            <View style={ styles.contentBox }>
              <Text>5555555555555555</Text>
            </View>
          </View>
          <View tab={ { title: '背包' } } style={ styles.TabContent }>
            <View style={ styles.contentBox }>
              <Text>6666666666666666666666</Text>
            </View>
          </View>
        </ScrollableTabView>
        <TouchableOpacity
          activeOpacity={ 1 }
          style={styles.classification}
          onPress={() => this.navigateTo('Classification')}
        >
          <Image source={require('../../static/img/icon/classification.png')} style={styles.classificationIcon}/>
          <Text style={styles.classificationText}>分类</Text>
        </TouchableOpacity>
      </View>
    );
  }

};

const styles = StyleSheet.create({
  box: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  search: {
    width,
    paddingHorizontal: 15,
    paddingTop:10
  },
  navHeaderRight:{
    height:40,
    flexDirection:'row',
    alignItems:'center',
    width:'100%',
    backgroundColor:'#f2f2f2',
    borderRadius:10,
    paddingHorizontal:10
  },
  searchIcon:{
    width:16,
    height:16
  },
  searchText:{
    fontSize:18,
    fontWeight:'bold',
    color:'#c5c5c5',
    marginLeft:10,
    letterSpacing: 0.5,
  },
  TabStyle: {
    width,
    marginHorizontal:15,
  },
  TabContent: {
    width,
    paddingVertical: 10,
    overflow: 'hidden',
  },
  classification:{
    position: 'absolute',
    top:0,
    right:15,
    height:44,
    width:44,
    alignItems: 'center',
    backgroundColor:'#fff',
    paddingTop:5
  },
  classificationIcon:{
    width:18,
    height:18,
  },
  classificationText:{
    fontSize:12,
    color:'#333',
    marginTop:2
  },
  bannerBox: {
    width: width - 30,
    height: 130,
    borderRadius: 5,
    overflow: 'hidden',
  },
  bannerImg: {
    width:'100%',
    height: '100%',
  },
  contentBox: {
    flex: 1,
    flexDirection: 'row',
    paddingBottom: 40,
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
});

import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  Dimensions,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
} from 'react-native';
import Swiper from 'react-native-swiper';
import { ScrollableTabView, DefaultTabBar, ScrollableTabBar, TabBarType } from 'react-native-vtron-scrollable-tab';
import LinearGradient from 'react-native-linear-gradient';
import commonStyle from '../../public/style';

const { width, height } = Dimensions.get('window');

export default class FindScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      banner: [
        { bannerImg: require('../../static/img/product/findBanner/banner1.png') },
        { bannerImg: require('../../static/img/product/findBanner/banner2.png') },
        { bannerImg: require('../../static/img/product/findBanner/banner3.png') },
        { bannerImg: require('../../static/img/product/findBanner/banner4.png') },
        { bannerImg: require('../../static/img/product/findBanner/banner5.png') },
      ],
      hot: [
        {
          id: 111,
          clike: 109,
          cIsMeLike: false,
          img: require('../../static/img/product/commodity/img8.png'),
          title: 'Guuka',
          head: require('../../static/img/headBackground/img5.png'),
          name: '电车情人',
        },
        {
          id: 222,
          clike: 0,
          cIsMeLike: false,
          img: require('../../static/img/product/commodity/img1.png'),
          title: '上衣：ENSHADOWER隐蔽者刺绣',
          head: require('../../static/img/headBackground/img1.png'),
          name: 'XYXYOP',
        },
        {
          id: 333,
          clike: 0,
          cIsMeLike: false,
          img: require('../../static/img/product/commodity/img3.png'),
          title: '帅帅77的黑色穿搭',
          head: require('../../static/img/headBackground/img2.png'),
          name: 'Wivill',
        },
        {
          id: 444,
          clike: 0,
          cIsMeLike: false,
          img: require('../../static/img/product/commodity/img5.png'),
          title: '上衣：Bape夜光鲨鱼',
          head: require('../../static/img/headBackground/img1.png'),
          name: '奕万富婆',
        },
        {
          id: 555,
          clike: 0,
          cIsMeLike: false,
          img: require('../../static/img/product/commodity/img7.png'),
          title: '小助手',
          head: require('../../static/img/headBackground/img2.png'),
          name: 'Esc 白兰地',
        },
        {
          id: 666,
          clike: 0,
          cIsMeLike: false,
          img: require('../../static/img/product/commodity/img2.png'),
          title: 'nice每次搭配精选，今日份奉上',
          head: require('../../static/img/headBackground/img2.png'),
          name: 'nice小助手',
        },
        {
          id: 777,
          clike: 0,
          cIsMeLike: false,
          img: require('../../static/img/product/commodity/img4.png'),
          title: '中国李宁✚中国华为会有什么化学反应',
          head: require('../../static/img/headBackground/img1.png'),
          name: 'JK 莫可乐',
        },
        {
          id: 888,
          clike: 0,
          cIsMeLike: false,
          img: require('../../static/img/product/commodity/img6.png'),
          title: '机能马甲',
          head: require('../../static/img/headBackground/img2.png'),
          name: 'MakWon',
        },
      ],
      china: [
        {
          id: 111,
          clike: 10,
          cIsMeLike: false,
          img: require('../../static/img/product/commodity/img1.png'),
          title: '上衣：ENSHADOWER隐蔽者刺绣',
          head: require('../../static/img/headBackground/img1.png'),
          name: 'XYXYOP',
        },
        {
          id: 222,
          clike: 0,
          cIsMeLike: false,
          img: require('../../static/img/product/commodity/img2.png'),
          title: 'nice每次搭配精选，今日份奉上',
          head: require('../../static/img/headBackground/img2.png'),
          name: 'nice小助手',
        },
        {
          id: 333,
          clike: 0,
          cIsMeLike: false,
          img: require('../../static/img/product/commodity/img3.png'),
          title: '帅帅77的黑色穿搭',
          head: require('../../static/img/headBackground/img2.png'),
          name: 'Wivill',
        },
        {
          id: 444,
          clike: 0,
          cIsMeLike: false,
          img: require('../../static/img/product/commodity/img4.png'),
          title: '中国李宁✚中国华为会有什么化学反应',
          head: require('../../static/img/headBackground/img1.png'),
          name: 'JK 莫可乐',
        },
        {
          id: 555,
          clike: 0,
          cIsMeLike: false,
          img: require('../../static/img/product/commodity/img5.png'),
          title: '上衣：Bape夜光鲨鱼',
          head: require('../../static/img/headBackground/img1.png'),
          name: '奕万富婆',
        },
        {
          id: 666,
          clike: 0,
          cIsMeLike: false,
          img: require('../../static/img/product/commodity/img6.png'),
          title: '机能马甲',
          head: require('../../static/img/headBackground/img2.png'),
          name: 'MakWon',
        },
        {
          id: 777,
          clike: 0,
          cIsMeLike: false,
          img: require('../../static/img/product/commodity/img7.png'),
          title: '小助手',
          head: require('../../static/img/headBackground/img2.png'),
          name: 'Esc 白兰地',
        },
      ],
      unpacking: [
        {
          id: 777,
          clike: 0,
          cIsMeLike: false,
          img: require('../../static/img/product/commodity/img7.png'),
          title: '小助手',
          head: require('../../static/img/headBackground/img2.png'),
          name: 'Esc 白兰地',
        },
        {
          id: 666,
          clike: 0,
          cIsMeLike: false,
          img: require('../../static/img/product/commodity/img6.png'),
          title: '机能马甲',
          head: require('../../static/img/headBackground/img2.png'),
          name: 'MakWon',
        },
        {
          id: 555,
          clike: 0,
          cIsMeLike: false,
          img: require('../../static/img/product/commodity/img5.png'),
          title: '上衣：Bape夜光鲨鱼',
          head: require('../../static/img/headBackground/img1.png'),
          name: '奕万富婆',
        },
        {
          id: 444,
          clike: 0,
          cIsMeLike: false,
          img: require('../../static/img/product/commodity/img4.png'),
          title: '中国李宁✚中国华为会有什么化学反应',
          head: require('../../static/img/headBackground/img1.png'),
          name: 'JK 莫可乐',
        },
        {
          id: 333,
          clike: 0,
          cIsMeLike: false,
          img: require('../../static/img/product/commodity/img3.png'),
          title: '帅帅77的黑色穿搭',
          head: require('../../static/img/headBackground/img2.png'),
          name: 'Wivill',
        },
        {
          id: 222,
          clike: 0,
          cIsMeLike: false,
          img: require('../../static/img/product/commodity/img2.png'),
          title: 'nice每次搭配精选，今日份奉上',
          head: require('../../static/img/headBackground/img2.png'),
          name: 'nice小助手',
        },
        {
          id: 111,
          clike: 0,
          cIsMeLike: false,
          img: require('../../static/img/product/commodity/img1.png'),
          title: '上衣：ENSHADOWER隐蔽者刺绣',
          head: require('../../static/img/headBackground/img1.png'),
          name: 'XYXYOP',
        },
      ],
      collocation: [
        {
          id: 111,
          clike: 0,
          cIsMeLike: false,
          img: require('../../static/img/product/commodity/img1.png'),
          title: '上衣：ENSHADOWER隐蔽者刺绣',
          head: require('../../static/img/headBackground/img1.png'),
          name: 'XYXYOP',
        },
        {
          id: 333,
          clike: 0,
          cIsMeLike: false,
          img: require('../../static/img/product/commodity/img3.png'),
          title: '帅帅77的黑色穿搭',
          head: require('../../static/img/headBackground/img2.png'),
          name: 'Wivill',
        },
        {
          id: 555,
          clike: 0,
          cIsMeLike: false,
          img: require('../../static/img/product/commodity/img5.png'),
          title: '上衣：Bape夜光鲨鱼',
          head: require('../../static/img/headBackground/img1.png'),
          name: '奕万富婆',
        },
        {
          id: 777,
          clike: 0,
          cIsMeLike: false,
          img: require('../../static/img/product/commodity/img7.png'),
          title: '小助手',
          head: require('../../static/img/headBackground/img2.png'),
          name: 'Esc 白兰地',
        },
        {
          id: 222,
          clike: 0,
          cIsMeLike: false,
          img: require('../../static/img/product/commodity/img2.png'),
          title: 'nice每次搭配精选，今日份奉上',
          head: require('../../static/img/headBackground/img2.png'),
          name: 'nice小助手',
        },
        {
          id: 444,
          clike: 0,
          cIsMeLike: false,
          img: require('../../static/img/product/commodity/img4.png'),
          title: '中国李宁✚中国华为会有什么化学反应',
          head: require('../../static/img/headBackground/img1.png'),
          name: 'JK 莫可乐',
        },
        {
          id: 666,
          clike: 0,
          cIsMeLike: false,
          img: require('../../static/img/product/commodity/img6.png'),
          title: '机能马甲',
          head: require('../../static/img/headBackground/img2.png'),
          name: 'MakWon',
        },
      ],
      Newest: [

        {
          id: 222,
          clike: 0,
          cIsMeLike: false,
          img: require('../../static/img/product/commodity/img2.png'),
          title: 'nice每次搭配精选，今日份奉上',
          head: require('../../static/img/headBackground/img2.png'),
          name: 'nice小助手',
        },
        {
          id: 444,
          clike: 0,
          cIsMeLike: false,
          img: require('../../static/img/product/commodity/img4.png'),
          title: '中国李宁✚中国华为会有什么化学反应',
          head: require('../../static/img/headBackground/img1.png'),
          name: 'JK 莫可乐',
        },
        {
          id: 666,
          clike: 0,
          cIsMeLike: false,
          img: require('../../static/img/product/commodity/img6.png'),
          title: '机能马甲',
          head: require('../../static/img/headBackground/img2.png'),
          name: 'MakWon',
        },
        {
          id: 111,
          clike: 0,
          cIsMeLike: false,
          img: require('../../static/img/product/commodity/img1.png'),
          title: '上衣：ENSHADOWER隐蔽者刺绣',
          head: require('../../static/img/headBackground/img1.png'),
          name: 'XYXYOP',
        },
        {
          id: 333,
          clike: 0,
          cIsMeLike: false,
          img: require('../../static/img/product/commodity/img3.png'),
          title: '帅帅77的黑色穿搭',
          head: require('../../static/img/headBackground/img2.png'),
          name: 'Wivill',
        },
        {
          id: 555,
          clike: 0,
          cIsMeLike: false,
          img: require('../../static/img/product/commodity/img5.png'),
          title: '上衣：Bape夜光鲨鱼',
          head: require('../../static/img/headBackground/img1.png'),
          name: '奕万富婆',
        },
        {
          id: 777,
          clike: 0,
          cIsMeLike: false,
          img: require('../../static/img/product/commodity/img7.png'),
          title: '小助手',
          head: require('../../static/img/headBackground/img2.png'),
          name: 'Esc 白兰地',
        },
      ],
      nearby: [
        {
          id: 777,
          clike: 0,
          cIsMeLike: false,
          img: require('../../static/img/product/commodity/img7.png'),
          title: '小助手',
          head: require('../../static/img/headBackground/img2.png'),
          name: 'Esc 白兰地',
        },
        {
          id: 111,
          clike: 0,
          cIsMeLike: false,
          img: require('../../static/img/product/commodity/img1.png'),
          title: '上衣：ENSHADOWER隐蔽者刺绣',
          head: require('../../static/img/headBackground/img1.png'),
          name: 'XYXYOP',
        },
        {
          id: 444,
          clike: 0,
          cIsMeLike: false,
          img: require('../../static/img/product/commodity/img4.png'),
          title: '中国李宁✚中国华为会有什么化学反应',
          head: require('../../static/img/headBackground/img1.png'),
          name: 'JK 莫可乐',
        },
        {
          id: 222,
          clike: 0,
          cIsMeLike: false,
          img: require('../../static/img/product/commodity/img2.png'),
          title: 'nice每次搭配精选，今日份奉上',
          head: require('../../static/img/headBackground/img2.png'),
          name: 'nice小助手',
        },
        {
          id: 666,
          clike: 0,
          cIsMeLike: false,
          img: require('../../static/img/product/commodity/img6.png'),
          title: '机能马甲',
          head: require('../../static/img/headBackground/img2.png'),
          name: 'MakWon',
        },
        {
          id: 333,
          clike: 0,
          cIsMeLike: false,
          img: require('../../static/img/product/commodity/img3.png'),
          title: '帅帅77的黑色穿搭',
          head: require('../../static/img/headBackground/img2.png'),
          name: 'Wivill',
        },
        {
          id: 555,
          clike: 0,
          cIsMeLike: false,
          img: require('../../static/img/product/commodity/img5.png'),
          title: '上衣：Bape夜光鲨鱼',
          head: require('../../static/img/headBackground/img1.png'),
          name: '奕万富婆',
        },
      ],
    };
  };

  setClike = (label, index) => {
    if (label === '热门') {
      let { hot } = this.state;
      let item = hot[index];
      if (item.cIsMeLike) {
        item.cIsMeLike = false;
        item.clike--;
      } else {
        item.cIsMeLike = true;
        item.clike++;
      }
      hot[index] = item;
      this.setState({
        hot,
      });
    } else if (label === '国货') {
      let { china } = this.state;
      let item = china[index];
      if (item.cIsMeLike) {
        item.cIsMeLike = false;
        item.clike--;
      } else {
        item.cIsMeLike = true;
        item.clike++;
      }
      china[index] = item;
      this.setState({
        china,
      });
    } else if (label === '开箱') {
      let { unpacking } = this.state;
      let item = unpacking[index];
      if (item.cIsMeLike) {
        item.cIsMeLike = false;
        item.clike--;
      } else {
        item.cIsMeLike = true;
        item.clike++;
      }
      unpacking[index] = item;
      this.setState({
        unpacking,
      });
    } else if (label === '穿搭') {
      let { collocation } = this.state;
      let item = collocation[index];
      if (item.cIsMeLike) {
        item.cIsMeLike = false;
        item.clike--;
      } else {
        item.cIsMeLike = true;
        item.clike++;
      }
      collocation[index] = item;
      this.setState({
        collocation,
      });
    } else if (label === '最新') {
      let { Newest } = this.state;
      let item = Newest[index];
      if (item.cIsMeLike) {
        item.cIsMeLike = false;
        item.clike--;
      } else {
        item.cIsMeLike = true;
        item.clike++;
      }
      Newest[index] = item;
      this.setState({
        Newest,
      });
    }
  };

  //点赞
  renderFabulous(label, index, { cIsMeLike, clike }) {
    return (
      <TouchableOpacity style={ commonStyle.RowFlexEnd } onPress={ () => this.setClike(label, index) }>
        {
          cIsMeLike
            ? (<Image source={ require('../../static/img/icon/fabulousIcon.png') } style={ styles.CommentIcon }/>)
            : (<Image source={ require('../../static/img/icon/nofabulousIcon.png') } style={ styles.CommentIcon }/>)
        }
        <Text style={ { fontSize: 12, color: '#333', marginLeft: 2 } }>{ clike ? clike : '' }</Text>
      </TouchableOpacity>
    );
  };

  //页面跳转
  navigateTo = (routeName, ...params) => {
    const { navigate } = this.props.navigation;
    navigate(routeName, ...params);
  };

  render() {
    return (
      <LinearGradient colors={
        ['#ffffff', '#f2f2f2'] } style={ styles.box }>
        { this.renderSearch() }
        { this.renderShopTab() }
      </LinearGradient>
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
    const { banner, hot,china, unpacking, collocation, Newest, nearby } = this.state;
    return (
      <View style={ styles.TabStyle }>
        <ScrollableTabView
          onChangeTab={ (fromIndex, toIndex) => {
            this.setState({ selectedIndex: toIndex });
          } }
          renderTabBar={ () => {
            return (
              <DefaultTabBar
                containerStyle={ { borderBottomWidth: 0 } }
                tabContainerStyle={ {
                  flex: 1,
                  height: 44,
                  alignItems: 'flex-end',
                  paddingHorizontal: 15,
                  marginBottom:10,
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
          {/*热门*/}
          <ScrollView tab={ { title: '热门' } } style={ styles.TabContent }>
              <View style={ styles.bannerBox }>
                <Swiper
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
              <View style={ styles.contentBox }>
                {
                  hot.map((item, index) => {
                    return (
                      <TouchableOpacity
                        style={ styles.CommentList }
                        key={ index }
                        activeOpacity={ 1 }
                        onPress={() => this.navigateTo('Recommend')}
                      >
                        <View style={styles.CommentImgBox}>
                          <Image
                            source={ item.img }
                            style={ styles.commodityImg }
                          />
                        </View>
                        <View style={ styles.commodityContent }>
                          <Text numberOfLines={ 2 } style={ styles.commodityTitle }>{ item.title }</Text>
                          <View style={ styles.fabulous }>
                            <View style={ styles.author }>
                              <Image source={ item.head } style={ styles.authorIcon }/>
                              <Text style={ styles.authorName }>{ item.name }</Text>
                            </View>
                            { this.renderFabulous('热门', index, item) }
                          </View>
                        </View>
                      </TouchableOpacity>
                    );
                  })
                }
              </View>
          </ScrollView>

          {/*国货*/}
          <ScrollView tab={ { title: '国货' } } style={ styles.TabContent }>
            <View style={ styles.contentBox }>
              {
                china.map((item, index) => {
                  return (
                    <View style={ styles.CommentList } key={ index }>
                      <View style={styles.CommentImgBox}>
                        <Image
                          source={ item.img }
                          style={ styles.commodityImg }
                        />
                      </View>
                      <View style={ styles.commodityContent }>
                        <Text numberOfLines={ 3 } style={ styles.commodityTitle }>{ item.title }</Text>
                        <View style={ styles.fabulous }>
                          <View style={ styles.author }>
                            <Image source={ item.head } style={ styles.authorIcon }/>
                            <Text style={ styles.authorName }>{ item.name }</Text>
                          </View>
                          { this.renderFabulous('国货', index, item) }
                        </View>
                      </View>
                    </View>
                  );
                })
              }
            </View>
          </ScrollView>

          {/*开箱*/}
          <ScrollView tab={ { title: '开箱' } } style={ styles.TabContent }>
            <View style={ styles.contentBox }>
              {
                unpacking.map((item, index) => {
                  return (
                    <View style={ styles.CommentList } key={ index }>
                      <View style={styles.CommentImgBox}>
                        <Image
                          source={ item.img }
                          style={ styles.commodityImg }
                        />
                      </View>
                      <View style={ styles.commodityContent }>
                        <Text numberOfLines={ 3 } style={ styles.commodityTitle }>{ item.title }</Text>
                        <View style={ styles.fabulous }>
                          <View style={ styles.author }>
                            <Image source={ item.head } style={ styles.authorIcon }/>
                            <Text style={ styles.authorName }>{ item.name }</Text>
                          </View>
                          { this.renderFabulous('开箱', index, item) }
                        </View>
                      </View>
                    </View>
                  );
                })
              }
            </View>
          </ScrollView>

          {/*穿搭*/}
          <ScrollView tab={ { title: '穿搭' } } style={ styles.TabContent }>
            <View style={ styles.contentBox }>
              {
                collocation.map((item, index) => {
                  return (
                    <View style={ styles.CommentList } key={ index }>
                      <View style={styles.CommentImgBox}>
                        <Image
                          source={ item.img }
                          style={ styles.commodityImg }
                        />
                      </View>
                      <View style={ styles.commodityContent }>
                        <Text numberOfLines={ 3 } style={ styles.commodityTitle }>{ item.title }</Text>
                        <View style={ styles.fabulous }>
                          <View style={ styles.author }>
                            <Image source={ item.head } style={ styles.authorIcon }/>
                            <Text style={ styles.authorName }>{ item.name }</Text>
                          </View>
                          { this.renderFabulous('穿搭', index, item) }
                        </View>
                      </View>
                    </View>
                  );
                })
              }
            </View>
          </ScrollView>

          {/*最新*/}
          <ScrollView tab={ { title: '最新' } } style={ styles.TabContent }>
            <View style={ styles.contentBox }>
              {
                Newest.map((item, index) => {
                  return (
                    <View style={ styles.CommentList } key={ index }>
                      <View style={styles.CommentImgBox}>
                        <Image
                          source={ item.img }
                          style={ styles.commodityImg }
                        />
                      </View>
                      <View style={ styles.commodityContent }>
                        <Text numberOfLines={ 2 } style={ styles.commodityTitle }>{ item.title }</Text>
                        <View style={ styles.fabulous }>
                          <View style={ styles.author }>
                            <Image source={ item.head } style={ styles.authorIcon }/>
                            <Text style={ styles.authorName }>{ item.name }</Text>
                          </View>
                          { this.renderFabulous('最新', index, item) }
                        </View>
                      </View>
                    </View>
                  );
                })
              }
            </View>
          </ScrollView>

          {/*附近*/}
          <ScrollView tab={ { title: '附近' } } style={ styles.TabContent }>
            <View style={ styles.contentBox }>
              {
                nearby.map((item, index) => {
                  return (
                    <View style={ styles.CommentList } key={ index }>
                      <View style={styles.CommentImgBox}>
                        <Image
                          source={ item.img }
                          style={ styles.commodityImg }
                        />
                      </View>
                      <View style={ styles.commodityContent }>
                        <Text numberOfLines={ 3 } style={ styles.commodityTitle }>{ item.title }</Text>
                        <View style={ styles.fabulous }>
                          <View style={ styles.author }>
                            <Image source={ item.head } style={ styles.authorIcon }/>
                            <Text style={ styles.authorName }>{ item.name }</Text>
                          </View>
                          { this.renderFabulous('附近', index, item) }
                        </View>
                      </View>
                    </View>
                  );
                })
              }
            </View>
          </ScrollView>

        </ScrollableTabView>
      </View>
    );
  }

};

const styles = StyleSheet.create({
  box: {
    flex: 1,
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
    flex: 1,
  },
  TabContent: {
    paddingHorizontal: 15,
    paddingVertical: 10,

  },
  bannerBox: {
    width: width - 30,
    height: 130,
    borderRadius: 5,
    overflow: 'hidden',
    marginBottom: 10
  },
  bannerImg: {
    width:'100%',
    height:'100%',
  },

  contentBox: {
    flex: 1,
    flexDirection: 'row',
    paddingBottom: 40,
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  CommentList: {
    width: width / 2 - 20,
    borderRadius: 5,
    backgroundColor: '#ccc',
    marginRight: 0,
    overflow: 'hidden',
    marginBottom: 10,
  },
  CommentImgBox:{
    width: width / 2 - 20,
    height: width / 1.6,
  },
  commodityImg: {
    width: '100%',
    height: '100%',
  },
  commodityContent: {
    paddingHorizontal: 8,
    backgroundColor: '#fff',
    paddingBottom: 15,
  },
  commodityTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#333',
    letterSpacing: 0.5,
    paddingVertical: 10,
    height: 60,
    lineHeight: 18,
  },
  fabulous: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  author: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  authorIcon: {
    width: 20,
    height: 20,
    borderRadius: 5,
  },
  authorName: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#333333',
    marginLeft: 5,
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
});

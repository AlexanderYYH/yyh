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
import commonStyle from '../../public/style';

const { width, height } = Dimensions.get('window');

export default class MyScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      head: [
        {
          img: require('../../static/img/headBackground/img3.png'),
          name: '芝麻爱上街',
          photoNumber: '8',
          fabulous: '9',
          follow: '22',
          fans: '23',
          photo: [
            { photoImg: require('../../static/img/headBackground/img4.png') },
            { photoImg: require('../../static/img/headBackground/img2.png') },
            { photoImg: require('../../static/img/headBackground/img1.png') },
            { photoImg: require('../../static/img/headBackground/img3.png') },
          ],
        },
      ],
      TabList: [
        { title: '通知', notice: '' },
        { title: '私聊', notice: '1' },
        { title: '好货交易', notice: '' },
        { title: '我有', notice: '' },
        { title: '想要', notice: '' },
        { title: '标签', notice: '' },
        { title: '直播', notice: '' },
        { title: '发现好友', notice: '' },
        { title: '好友动态', notice: '' },
        { title: '设置', notice: '' },
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
        <ScrollView
          showsVerticalScrollIndicator={ false }
        >
          { this.renderContent() }
        </ScrollView>
      </View>
    );
  };

  renderContent = () => {
    const { head, TabList } = this.state;
    return (
      <View style={ styles.myBox }>
        {
          head.map((item, index) => {
            return (
              <View key={ index }>
                <TouchableOpacity
                  style={ styles.myHead }
                  onPress={() => this.navigateTo('PersonalCenter')}
                  ctiveOpacity={1}
                  focusedOpacity={1}
                  activeOpacity={ 1 }
                >
                  <View style={ styles.myHeadLeft }>
                    <Image source={ item.img } style={ styles.myHeadImg }/>
                    <View style={ styles.myHeadLeftText }>
                      <Text style={ styles.MyName }>{ item.name }</Text>
                      <View style={ styles.myHeadLeftTextList }>
                        <Text style={ styles.myHeadText }>照片{ item.photoNumber }张，</Text>
                        <Text style={ styles.myHeadText }>被赞{ item.fabulous }次</Text>
                      </View>
                      <View style={ styles.myHeadLeftTextList }>
                        <Text style={ styles.myHeadText }>关注{ item.follow }人，</Text>
                        <Text style={ styles.myHeadText }>粉丝{ item.fans }人</Text>
                      </View>
                    </View>
                  </View>

                  <Image source={ require('../../static/img/icon/arrow_right.png') } style={ commonStyle.arrow }/>
                </TouchableOpacity>
                <TouchableOpacity
                  style={ styles.photo }
                  onPress={() => this.navigateTo('PersonalCenter')}
                  ctiveOpacity={1}
                  focusedOpacity={1}
                  activeOpacity={ 1 }
                >
                  {
                    item.photo.map((item2, index2) => {
                      return (
                        <Image source={ item2.photoImg } style={ styles.phtotList } key={ index2 }/>
                      );
                    })
                  }
                </TouchableOpacity>
              </View>
            );
          })
        }
        <View style={ styles.myTab }>
          {
            TabList.map((item, index) => {
              if( index === 7 || index === 9 ) {
                return (
                  <TouchableOpacity
                    style={ [styles.myTabList,{paddingTop: 35}] }
                    key={ index }
                    activeOpacity={ 1 }
                  >
                    <Text style={ styles.myTabListName }>{ item.title }</Text>
                    <View style={ styles.myTabListRight }>
                      {
                        item.notice
                          ?(<Text style={ styles.myNotice }>{ item.notice }</Text>)
                          :null
                      }
                      <Image style={ commonStyle.arrow } source={ require('../../static/img/icon/arrow_right.png') }/>
                    </View>
                  </TouchableOpacity>
                )
              }
              return (
                <TouchableOpacity style={ styles.myTabList } key={ index }>
                  <Text style={ styles.myTabListName }>{ item.title }</Text>
                  <View style={ styles.myTabListRight }>
                    {
                      item.notice
                        ?(<Text style={ styles.myNotice }>{ item.notice }</Text>)
                        :null
                    }
                    <Image style={ commonStyle.arrow } source={ require('../../static/img/icon/arrow_right.png') }/>
                  </View>
                </TouchableOpacity>
              );
            })
          }
        </View>
      </View>
    );
  };

};

const styles = StyleSheet.create({
  box: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  myBox: {
    paddingLeft: 15,
  },
  myHead: {
    paddingRight: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 30,
  },
  myHeadLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  myHeadImg: {
    width: width / 4 - 35,
    height: width / 4 - 35,
    borderRadius: 5,
  },
  myHeadLeftText: {
    marginLeft: 10,
  },
  MyName: {
    fontSize: 22,
    color: '#333',
    fontWeight: 'bold',
    marginBottom: 2,
  },
  myHeadLeftTextList: {
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
  myHeadText: {
    fontSize: 12,
    color: '#999',
  },
  photo: {
    paddingVertical: 10,
    marginRight: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    overflow: 'hidden',
  },
  phtotList: {
    width: width / 4 - 35,
    height: width / 4 - 35,
    marginRight: 10.5,
  },
  myTab: {
    paddingBottom:30
  },
  myTabList: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingRight: 15,
    borderBottomWidth: 0.5,
    borderBottomColor: '#eeeeee',
    paddingVertical: 15,
  },
  myTabListName: {
    fontSize: 18,
    color: '#333333',
    fontWeight: 'bold',
  },
  myTabListRight: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  myNotice: {
    fontSize: 12,
    color: '#fff',
    backgroundColor: '#d93831',
    width: 22,
    height: 22,
    borderRadius: 100,
    lineHeight: 20,
    textAlign: 'center',
    marginRight: 15,
  },

});

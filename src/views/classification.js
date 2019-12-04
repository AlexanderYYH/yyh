import React, {Component} from 'react'
import {View, Text, Image, TouchableOpacity, StyleSheet, FlatList, SectionList, Dimensions} from 'react-native'
import commonStyle from '../public/style';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const CateData = require('./classificationData');

export default class CategoryList extends Component {

  constructor(props) {
    super(props);
    this._flatList = null;
    this._sectionList = null;
    this.state = {
      selectedRootCate: 0
    }
  }

  _renderItem = item => {
    let index = item.index;
    let title = item.item.title;
    return (
      <TouchableOpacity
        key={index}
        style={[{alignItems: 'center', justifyContent: 'center', width: 100, height: 60 },
          this.state.selectedRootCate === index ? {backgroundColor: '#fff', borderLeftWidth: 0, } : {backgroundColor: 'white'}]}
        onPress={() => {
          setTimeout(() => {
            (CateData.data.length - index) * 45 > height - 65 ? this._flatList.scrollToOffset({animated: true, offset: index * 45}) : null
            this._sectionList.scrollToLocation({itemIndex: 0, sectionIndex: 0, animated: true, viewOffset: 20})
          }, 100);
          this.setState({selectedRootCate: index})
        }}
      >
        <Text style={{fontSize: this.state.selectedRootCate === index ? 26 : 16, fontWeight:'bold', color: this.state.selectedRootCate === index ? '#333' : '#333'}}>{title}</Text>
      </TouchableOpacity>
    )
  };

  renderRootCate() {
    let data = [];
    CateData.data.map((item, index) => {
      data.push({key: index, title: item.firstCateName})
    });
    return (
      <View style={{backgroundColor: '#fff'}}>
        <FlatList
          ref={flatList => this._flatList = flatList}
          data={data}
          ListHeaderComponent={() => (<View/>)}
          ListFooterComponent={() => (<View/>)}
          ItemSeparatorComponent={() => <View/>}
          renderItem={this._renderItem}
          onEndReachedThreshold={20}
          showsVerticalScrollIndicator={false}
        >
        </FlatList>
      </View>
    )
  }

  sectionComp(item) {
    return (
      <View style={{
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems:'center',
        flexDirection:'row',
        marginVertical:20
      }}>
        <Text style={{height:1,width:60,backgroundColor:'#f2f2f2'}}/>
        <Text style={{color: '#333',paddingHorizontal:15,fontSize:14,fontWeight: 'bold'}}>{item.section.key}</Text>
        <Text style={{height:1,width:60,backgroundColor:'#f2f2f2'}}/>
      </View>
    )
  }

  renderCell(item, sectionIndex, index) {
    return (
      <TouchableOpacity
        key={index}
        style={{
          height: 110,
          width: (width - 141) / 3,
          marginBottom:10,
          marginRight: 10,
          alignItems: 'center'
        }}
        onPress={() => alert(`点击了第${sectionIndex}组中的第${index}个商品`)}
      >
        <View style={{
          width:(width - 141) / 3,
          height:90,
          justifyContent:'center',
          alignItems:'center',
        }}>
          <Image style={{width:'80%',height:'80%',}} source={{uri: item.itemImg}}/>
        </View>
        <Text style={{color: '#333', fontSize: 12,height:20,lineHeight:30,}}>{item.title}</Text>
      </TouchableOpacity>
    )
  }

  renderItem(item) {
    let sectionIndex = item.section.data.sectionId;
    let data = item.section.data;
    return item.index === 0 ?
      <View key={item.index} style={{flexDirection: 'row', flexWrap: 'wrap',paddingBottom:40}}>
        {data.map((cell, index) => this.renderCell(cell, sectionIndex, index))}
      </View> : null
  }

  renderItemCate() {
    let tempArr = CateData.data[this.state.selectedRootCate].secondCateItems.map((item, index) => {
      let tempObj = {};
      tempObj.key = item.secondCateName
      tempObj.data = item.items;
      tempObj.data.sectionId = index;
      return tempObj
    });
    return (
      <View style={{flex: 1, backgroundColor: '#fff', paddingLeft: 10, paddingTop: 20,borderLeftWidth: 0.8,borderLeftColor:'#f2f2f2'}}>
        <SectionList
          ref={(ref) => this._sectionList = ref}
          renderSectionHeader={this.sectionComp}
          renderItem={(data) => this.renderItem(data)}
          sections={tempArr}
          ItemSeparatorComponent={() => <View/>}
          ListHeaderComponent={() => <View/>}
          ListFooterComponent={() => <View/>}
          showsVerticalScrollIndicator={false}
          keyExtractor={(item, index) => 'key' + index + item}
        />
      </View>
    )
  };

  renderNav(){
    return(
      <View style={styles.navContainer}>
        <TouchableOpacity onPress={() => this.props.navigation.goBack()} activeOpacity={ 1 } style={commonStyle.backBtn}>
          <Image source={require('../static/img/icon/arrow_left_C5.png')} style={commonStyle.backImg}/>
        </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={ 1 }
            style={styles.navHeaderRight}
          >
            <Image source={require('../static/img/icon/searchIcon.png')} style={styles.searchIcon}/>
            <Text style={styles.searchText}>黑天使</Text>
          </TouchableOpacity>
      </View>
    )
  }

  renderCategory() {
    return (
      <View style={{flexDirection: 'row', flex: 1, backgroundColor: '#fff'}}>
        {this.renderRootCate()}
        {this.renderItemCate()}
      </View>
    )
  }

  render() {
    return (
      <View style={styles.box}>
        {this.renderNav()}
        {this.renderCategory()}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  box: {
    flex: 1,
    backgroundColor:'#fff'
  },
  navContainer:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    backgroundColor: '#fff',
    height: 50,
    alignItems: 'center',
    width,
    marginBottom: 15,
    paddingTop: 10
  },
  navHeaderRight:{
    height:40,
    flexDirection:'row',
    alignItems:'center',
    width:width * 0.8,
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
  }
});

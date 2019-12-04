import { StyleSheet, Dimensions } from 'react-native'
const {width, height} = Dimensions.get('window');

export default StyleSheet.create({
  searchImg: {
    transform: [{
      scale: 0.65,
    }]
  },
  navContainerColor:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    width,
    paddingVertical:8,
    alignItems: 'center',
  },
  navHeaderTitleBold: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  navHeaderTitle: {
    fontSize: 18,
    width: width * 0.6,
    textAlign: 'center'
  },
  navHeaderNull: {
    width: 25
  },
  tabBottomImg: {
    transform: [{
      scale: 0.46,
    }]
  },
  arrow:{
    width:12,
    height:12
  },

  navContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    backgroundColor: 'transparent',
    width:width,
    height: 50,
    alignItems: 'center'
  },
  backBtn: {
    flexDirection: 'row',
    width: 25,
    height: 25,
    borderRadius: 12.5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  backImg: {
    transform: [{
      scale: 0.6,
    }],
  },
  RightImg: {
    transform: [{
      scale: 0.4,
    }],
  },

  //横向左右居中
  RowCenterBetween:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between'
  },
  //横向居中
  RowCenter:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between'
  },
  //横向底部排列
  RowFlexEnd:{
    flexDirection:'row',
    alignItems:'flex-end',
  },
});

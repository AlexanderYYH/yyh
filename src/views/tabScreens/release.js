import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Dimensions,
  TextInput,
  Alert
} from 'react-native';

const { width, height } = Dimensions.get('window');
import ImagePicker from 'react-native-image-picker';
import commonStyle from '../../public/style';
const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});


export default class ReleaseScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // contentPicture
      contentPicture: [],
    };
  };

  _showAlert = () => {
    Alert.alert(
      '发布成功'
    )
  };



  //上传商品图片
  selectPhotoTapped() {
    let {contentPicture} = this.state;
    const options = {
      title: '选择图片',
      cancelButtonTitle: '取消',
      takePhotoButtonTitle: '拍照',
      chooseFromLibraryButtonTitle: '选择照片',
      cameraType: 'back',
      mediaType: 'photo',
      videoQuality: 'medium',
      // 图片质量
      durationLimit: 10,
      maxWidth: (width - 30) /3,
      // 图片大小
      maxHeight: (width - 30) /3,
      // 图片大小
      quality: 0.8,
      angle: 0,
      allowsEditing: false,
      noData: false,
      storageOptions: {skipBackup: true},
    };
    ImagePicker.showImagePicker(options, (response) => {
      console.log('Response = ', response);
      if (response.didCancel) {
        console.log('User cancelled photo picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      } else {
        let source = {uri: response.uri};

        // You can also display the image using data:
        // let source = { uri: 'data:image/jpeg;base64,' + response.data };
        contentPicture = [...contentPicture, source];
        this.setState({
          contentPicture
        });
      }
    });
  }

  render() {
    return (
      <View style={styles.box}>
        {this.renderNav()}
        {this.renderCamera()}
      </View>
    );
  };

  //导航
  renderNav = () =>{
    return (
      <View style={ [commonStyle.navContainerColor,{backgroundColor:'#f5f5f5'}] }>
        <Text style={[commonStyle.navHeaderNull,{width:80}]}/>
        <Text style={ [commonStyle.navHeaderTitle] }>发布预览</Text>
        <TouchableOpacity
          onPress = {() => this._showAlert()}
        >
          <Text style={styles.navMore}>发布</Text>
        </TouchableOpacity>
      </View>
    )
  };

  //发布内容
  renderCamera = () => {
    const {contentPicture} = this.state;
    const share = [
      {img:require('../../static/img/icon/WechatMoments.png')},
      {img:require('../../static/img/icon/micro-blog.png')},
      {img:require('../../static/img/icon/QQZone.png')}
    ];
    return (
      <View style={styles.publishContent}>
        <View style={styles.publishContentText}>
          <TextInput
            style={styles.InputStyle}
            placeholder={'说点什么...'}
            placeholderTextColor={'#999'}
            underlineColorAndroid={'transparent'}
            multiline
            value={ Text }
            onChangeText={(text) => this.setState({text})}
          />
        </View>
        <View style={styles.camearBox}>
          {
            contentPicture.map((pic, index) =>
                <View
                  sky={index}
                  style={{
                    width:(width - 40) /3,
                    height:(width - 40) /3,
                    marginLeft:5,
                    marginBottom:5
                  }}
                >
                  <Image source={pic} key={index} style={styles.picture}/>
                </View>
              )
          }
          <TouchableOpacity
            style={styles.camearIconBox}
            onPress={() => this.selectPhotoTapped()}
            activeOpacity={ 1 }
          >
            <Image source={require('../../static/img/icon/camera_ico.png')} style={styles.cameraIcon}/>
          </TouchableOpacity>
        </View>
        <View style={styles.shareBox}>
          <Text style={styles.shareTitle}>分享至</Text>
          <View style={styles.shareIconBox}>
            {
              share.map((item,index) => {
                return (
                  <TouchableOpacity activeOpacity={ 1 }>
                    <Image source={item.img} key={index} style={styles.shareIcon}/>
                  </TouchableOpacity>
                )
              })
            }
          </View>
        </View>
      </View>
    )
  };


}

const styles = StyleSheet.create({
  box: {
    flex: 1,
    backgroundColor: '#fff'
  },
  navMore:{
    width:80,
    height:30,
    backgroundColor: '#f5e14b',
    lineHeight:30,
    textAlign: 'center',
    borderRadius:5
  },
  publishContent:{
    width,
  },
  publishContentText:{
    height:150,
  },
  InputStyle: {
    lineHeight: 24,
    fontSize:16,
    letterSpacing: 0.5,
    paddingHorizontal: 15,
  },
  camearBox:{
    width,
    paddingBottom:10,
    flexDirection:'row',
    alignItems: 'center',
    flexWrap:'wrap',
    paddingHorizontal:10,
  },
  picture:{
    width:'100%',
    height:'100%'
  },
  camearIconBox:{
    width:(width - 30) /3,
    height:(width - 30) /3,
    borderWidth:1,
    borderColor:'#f5f5f5',
    justifyContent:'center',
    alignItems:'center',
    marginLeft:5,
    marginBottom:5
  },
  cameraIcon:{
    width:'45%',
    height:'45%'
  },
  shareBox:{
    marginHorizontal:15,
    paddingVertical:15,
    borderTopWidth:1,
    borderTopColor:'#eeeeee',
    flexDirection: 'row',
    alignItems:'center',
    justifyContent: 'space-between',
  },
  shareTitle:{
    fontSize: 14,
    fontWeight: 'bold',
  },
  shareIconBox:{
    flexDirection:'row',
    alignItems:'center'
  },
  shareIcon:{
    width:26,
    height:26,
    marginLeft:15
  }
});

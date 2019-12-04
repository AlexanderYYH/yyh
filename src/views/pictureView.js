import React, { Component } from 'react';
import {
  View,
  Modal,
  Dimensions,
  ActivityIndicator,
} from 'react-native';
import CameraRoll from '@react-native-community/cameraroll'
import ImageViewer from 'react-native-image-zoom-viewer';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
export default class LookPhotoModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      animating: true,
      modalVisible: true,
      index: 0,
      imgArr: []
    };
    this.renderLoad = this.renderLoad.bind(this);
    this.savePhoto = this.savePhoto.bind(this);
    this._Close = this._Close.bind(this);
  }

  componentDidMount() {
    const {imgArr} = this.props.navigation.state.params
    // Alert.alert('1', JSON.stringify(imgArr))
    this.setState({
      imgArr
    })
  }

  _Close() {
    // this.props.cancel();
    this.props.navigation.goBack()
  }

  renderLoad() { //这里是写的一个loading
    return (
      <View style={ { marginTop: (height / 2) - 20 } }>
        <ActivityIndicator animating={ this.state.animating } size={ 'large' }/>
      </View>
    );
  }
  savePhoto(url) {
    const promise = CameraRoll.saveToCameraRoll(url);
    promise.then(function (result) {
      alert('已保存到系统相册');
    }).catch(function (error) {
      alert('保存失败！\n' + error);
    });
  }

  render() {
    const {imgArr} = this.state;
    if(imgArr.length === 0) {
      return (
        <View />
      )
    }
    // const imgArr = [
    //   { url: 'https://avatars3.githubusercontent.com/u/7970947?s=460&v=4' },
    // ]
    return (
      <View style={ { position: 'absolute', top: 0, bottom: 0, left: 0, right: 0 } }>
        <Modal
          animationType={ 'slide' }
          transparent={ true }
          visible={ this.props.modalVisible }
          //    onRequestClose={() => { this._pressSignClose() }}
        >
          <ImageViewer
            imageUrls={ imgArr } // 照片路径
            enableImageZoom={ true } // 是否开启手势缩放
            saveToLocalByLongPress={ true } //是否开启长按保存
            index={this.state.index} // 初始显示第几张
            // failImageSource={} // 加载失败图片
            loadingRender={ this.renderLoad }
            enableSwipeDown={ true }
            menuContext={ { 'saveToLocal': '保存图片', 'cancel': '取消' } }
            onClick={ () => { // 图片单击事件
              this._Close();
            } }
            onSwipeDown={() => this._Close()}
            onSave={ (url) => {
              this.savePhoto(url);
            } }
          />
        </Modal>
      </View>
    );
  }
}




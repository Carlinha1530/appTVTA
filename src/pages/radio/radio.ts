import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { StreamingMedia, StreamingAudioOptions } from '@ionic-native/streaming-media';

/**
 * Generated class for the RadioPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-radio',
  templateUrl: 'radio.html',
})
export class RadioPage {

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    private streamingMedia: StreamingMedia
  ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RadioPage');
  }

  startAudio() {
    let options: StreamingAudioOptions = {
      successCallback: () => { console.log('Video played') },
      errorCallback: (e) => { alert(e) },
      initFullscreen: false
    };
    
    this.streamingMedia.playAudio('http://streamer1.streamhost.org:1935/salive/GMI3anjoa/playlist.m3u8', options);
  }
 
  stopAudio() {
    this.streamingMedia.stopAudio();
  }
}

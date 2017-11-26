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
      successCallback: () => { console.log('Finished Audio') },
      errorCallback: (e) => { console.log('Error: ', e) },
      initFullscreen: false // iOS only!
    };
 
    //http://soundbible.com/2196-Baby-Music-Box.html
    this.streamingMedia.playAudio('http://soundbible.com/grab.php?id=2196&type=mp3', options);
    // this.streamingMedia.playAudio('rtmp://streamer1.streamhost.org/salive/GMI3anjoa', options);
  }
 
  stopAudio() {
    this.streamingMedia.stopAudio();
  }

  

}

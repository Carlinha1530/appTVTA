import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform } from 'ionic-angular';
import { YoutubeVideoPlayer } from '@ionic-native/youtube-video-player';
import { StreamingMedia, StreamingAudioOptions } from '@ionic-native/streaming-media';

import { RadioPage } from '../radio/radio';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, private navParams: NavParams, private youtube: YoutubeVideoPlayer, private plt: Platform, private streamingMedia: StreamingMedia) { }

  openPageRadio(){
    this.navCtrl.push(RadioPage);
  }

  openVideoYouTube(video) {
    if (this.plt.is('cordova')) {
      this.youtube.openVideo('WgO0gwuJWFU');
    } else {
      window.open('https://www.youtube.com/watch?v=' + 'WgO0gwuJWFU');
    }
  }

}

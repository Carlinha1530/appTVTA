import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform } from 'ionic-angular';
import { YoutubeVideoPlayer } from '@ionic-native/youtube-video-player';
import { StreamingMedia, StreamingAudioOptions } from '@ionic-native/streaming-media';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(private navParams: NavParams, private youtube: YoutubeVideoPlayer, private plt: Platform, private streamingMedia: StreamingMedia) { }

  openVideoYouTube(video) {
    if (this.plt.is('cordova')) {
      this.youtube.openVideo('WgO0gwuJWFU');
    } else {
      window.open('https://www.youtube.com/watch?v=' + 'WgO0gwuJWFU');
    }
  }

  playAudio() {
    let options: StreamingAudioOptions = {
      successCallback: () => { console.log('Video played') },
      errorCallback: (e) => { console.log('Error streaming') },
      initFullscreen: false
    };
    
    this.streamingMedia.playAudio('streamer1.streamhost.org/salive/GMI3anjoa', options);
  }

}

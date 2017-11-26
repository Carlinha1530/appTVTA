import { RadioPage } from '../radio/radio';
import { TvPage } from '../tv/tv';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
// import { StreamingVideoOptions } from '@ionic-native/streaming-media';
// import { StreamingMedia, StreamingVideoOptions, StreamingAudioOptions  } from '@ionic-native/streaming-media';
import { StreamingMedia, StreamingVideoOptions } from '@ionic-native/streaming-media';
// import { YoutubeVideoPlayer } from '@ionic-native/youtube-video-player';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  // [x: string]: any;

  constructor(public navCtrl: NavController,private streamingMedia: StreamingMedia) { }

  openPageTv(){
    this.navCtrl.push(TvPage);
  }

  openPageRadio(){
    this.navCtrl.push(RadioPage);
  }

  // openVideo(){
  //   this.youtube.openVideo('M7lc1UVf-VE');
  // }
  
  startVideo() {
    let options: StreamingVideoOptions = {
      successCallback: () => { console.log('Finished Video') },
      errorCallback: (e) => { console.log('Error: ', e) },
      orientation: 'portrait'
    };
 
    // http://www.sample-videos.com/
    // this.streamingMedia.playVideo('https://youtu.be/xJYyf0Z9N80', options);
    this.streamingMedia.playVideo('http://www.sample-videos.com/video/mp4/720/big_buck_bunny_720p_30mb.mp4', options);
  }

}

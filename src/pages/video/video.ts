import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { VideoServiceProvider } from '../../providers/video-service/video-service';
import { StreamingMedia, StreamingVideoOptions } from '@ionic-native/streaming-media';

// import { YoutubeVideoPlayer } from '@ionic-native/youtube-video-player';

import { IVideos } from '../../interfaces/ivideo';

/**
 * Generated class for the VideoPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-video',
  templateUrl: 'video.html',
})
export class VideoPage {

  public listaVideos: IVideos[];

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public videoService: VideoServiceProvider, 
    private streamingMedia: StreamingMedia
    // private YoutubeVideoPlayer: YoutubeVideoPlayer,

  ) {
    this.videoService.listaVideos().subscribe(
      data => {
        console.log(data);
        this.listaVideos = data; //aqui chama a lista da interface
      },
      erro => {
        console.log(erro);
      }
    );
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad VideoPage');
  }


  // startVideo(video:IVideos) {
  startVideo() {
    let options: StreamingVideoOptions = {
      successCallback: () => { console.log('Finished Video') },
      errorCallback: (e) => { console.log('Error: ', e) },
      orientation: 'portrait'
    };
 
    this.streamingMedia.playVideo(
      // video.link_original, options);
      'http://www.sample-videos.com/video/mp4/720/big_buck_bunny_720p_30mb.mp4', options);
  }

}

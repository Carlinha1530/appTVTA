import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

// import { VideoServiceProvider } from '../../providers/video-service/video-service';
// import { Videos } from '../../interfaces/videos';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

  // public listaVideos: Videos[];

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams
    // public videoService: VideoServiceProvider
  ) {

    //lista os videos
    // this.videoService.listaVideos().subscribe(
  	// 	data => {
	  //     console.log(data);
	  //     this.listaVideos = data;
	  //   },erro =>{
	  //     console.log(erro);
	  //   });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ContactPage');
  }


}

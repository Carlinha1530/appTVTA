import { NewsletterPage } from '../newsletter/newsletter';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { VideoPage } from '../video/video';
import { ContactPage } from '../contact/contact';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  constructor(public navCtrl: NavController) { }

  openPageNewsletterPage(){
    this.navCtrl.push(NewsletterPage);
  }

  openPageVideoPage(){
    this.navCtrl.push(VideoPage);
  }
  
  openPageContactPage(){
    this.navCtrl.push(ContactPage);
  }

}

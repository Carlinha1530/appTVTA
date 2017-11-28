
import { NewsletterPageModule } from '../pages/newsletter/newsletter.module';
import { TvPageModule } from '../pages/tv/tv.module';
import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { HttpModule } from '@angular/http';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';                                                                                                                                                                                                 
import { SplashScreen } from '@ionic-native/splash-screen';
import { RadioPageModule } from "../pages/radio/radio.module";
import { VideoServiceProvider } from '../providers/video-service/video-service';
import { VideoPageModule } from '../pages/video/video.module';
import { StreamingMedia } from '@ionic-native/streaming-media';
import { YoutubeVideoPlayer } from '@ionic-native/youtube-video-player';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
    TvPageModule,
    NewsletterPageModule,
    RadioPageModule,
    VideoPageModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    VideoServiceProvider,
    StreamingMedia,
    YoutubeVideoPlayer
  ]
})
export class AppModule {}

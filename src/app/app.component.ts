import { Component } from '@angular/core';
import { Platform, Events } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { TabsPage } from '../pages/tabs/tabs';
import { Deeplinks } from '../../node_modules/@ionic-native/deeplinks';
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage: any = TabsPage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, public deeplinks: Deeplinks, public events: Events) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
      this.deeplinksFunc();
    });
  }

  deeplinksFunc() {
    this.deeplinks.route({
      '/about-us': AboutPage,
      '/uni': ContactPage,
    }).subscribe(match => {
      
      if (match.$link.path == '/about-us') {
        this.events.publish('tabs', 1);
      } else {
        this.events.publish('tabs', 2);
      }

      // match.$route - the route we matched, which is the matched entry from the arguments to route()
      // match.$args - the args passed in the link
      // match.$link - the full link data
    }, nomatch => {
      // nomatch.$link - the full link data
      console.error('Got a deeplink that didn\'t match', nomatch);
    });
  }
}

import { Component, ViewChild } from '@angular/core';

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import { Tabs, Events } from 'ionic-angular';
import { Deeplinks } from '../../../node_modules/@ionic-native/deeplinks';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  @ViewChild('MyTabs') MyTabs: Tabs;

  tab1Root = HomePage;
  tab2Root = AboutPage;
  tab3Root = ContactPage;

  constructor(public events: Events) {
    this.events.subscribe('tabs', (tabNo) => {

      this.MyTabs.select(tabNo);
      // this.MyTabs.selectedIndex = tabNo;
    });
  }

  // ngOnChanges(){
  //   this.events.subscribe('tabs', (tabNo) => {
  //     alert(tabNo);
  //     this.setDeafaultTab(tabNo);
  //   });
  // }



  ngInit() {

  }

  setDeafaultTab(id) {
    // this.events.unsubscribe('tabs');
  }

  ngAfterViewInit() {

  }
}

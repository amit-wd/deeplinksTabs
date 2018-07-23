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
  @ViewChild('tab-t0-0') tab1: any
  @ViewChild('tab-t0-1') tab2: any
  @ViewChild('tab-t0-2') tab3: any

  mySelectedIndex;
  tab1Root = HomePage;
  tab2Root = AboutPage;
  tab3Root = ContactPage;

  constructor(public events: Events) {

  }

  ionViewWillEnter() {
    this.events.subscribe('tabs', (tabNo) => {
      this.MyTabs.select(tabNo);
      if (tabNo == 0) {
        document.getElementById('tab-t0-0').className ="tab-button has-title has-icon disable-hover active";
        document.getElementById('tab-t0-1').className ="tab-button has-title has-icon disable-hover not-active";
        document.getElementById('tab-t0-2').className ="tab-button has-title has-icon disable-hover not-active";
      } else if (tabNo == 1) {
        document.getElementById('tab-t0-1').className ="tab-button has-title has-icon disable-hover active";
        document.getElementById('tab-t0-0').className ="tab-button has-title has-icon disable-hover not-active";
        document.getElementById('tab-t0-2').className ="tab-button has-title has-icon disable-hover not-active";
      } else if (tabNo == 2) {
        document.getElementById('tab-t0-2').className = "tab-button has-title has-icon disable-hover active";
        document.getElementById('tab-t0-0').className = "tab-button has-title has-icon disable-hover not-active";
        document.getElementById('tab-t0-1').className = "tab-button has-title has-icon disable-hover not-active";
      }
    });
  }


  ngOnInit() {

  }

  ngAfterViewInit() {

  }
}

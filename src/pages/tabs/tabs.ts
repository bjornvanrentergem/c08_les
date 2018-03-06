import { Component, ViewChild } from '@angular/core';

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import { Events, NavController, Tabs } from 'ionic-angular';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  @ViewChild(Tabs) tabs: Tabs;

  tab1Root = HomePage;
  tab2Root = AboutPage;
  tab3Root = ContactPage;

  constructor(private events: Events, private navCtrl: NavController) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TabsPage');

    this.events.subscribe("tabsNavigateToAbout", (pizza)=>{
      //this.navCtrl.push(AboutPage);
      this.tabs.select(1).then(()=>{
        this.events.publish("addPizzaToCart", pizza);
      });
    })
  }
  
}

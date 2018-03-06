import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
  }

  about(){
    this.navCtrl.parent.select(1);
  }

}

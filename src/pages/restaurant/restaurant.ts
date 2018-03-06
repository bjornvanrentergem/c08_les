import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FireDataServiceProvider } from '../../providers/fire-data-service/fire-data-service';

/**
 * Generated class for the RestaurantPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-restaurant',
  templateUrl: 'restaurant.html',
})
export class RestaurantPage {

  stores:any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private db: FireDataServiceProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RestaurantPage');
    this.stores = this.db.getAll();

    this.stores.subscribe((result)=>{
      console.log("Got this data from provider", result);
    },(error)=>{
      console.log("Didn't get any data", error);
    });
    
    let store = {
      name:"New pizza store"
    }

    this.db.update("0", store);
  }
  

}

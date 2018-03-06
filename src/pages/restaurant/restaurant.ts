import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FireDataServiceProvider } from '../../providers/fire-data-service/fire-data-service';

import { Camera, CameraOptions } from '@ionic-native/camera';

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

  stores: any;
  avatarData="";

  readonly options: CameraOptions = {
    quality: 100,
    destinationType: this.camera.DestinationType.DATA_URL,
    encodingType: this.camera.EncodingType.JPEG,
    mediaType: this.camera.MediaType.PICTURE,
    allowEdit: true,
    targetHeight: 250,
    targetWidth: 250
  }

  constructor(public navCtrl: NavController, public navParams: NavParams, private db: FireDataServiceProvider, private camera: Camera) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RestaurantPage');
    this.stores = this.db.getAll();

    this.stores.subscribe((result) => {
      console.log("Got this data from provider", result);
    }, (error) => {
      console.log("Didn't get any data", error);
    });

    /*let store = {
      name:"New pizza store"
    }

    this.db.update("0", store);*/
  }

  takePicture() {
    this.camera.getPicture(this.options).then((imageData) => {
      // imageData is either a base64 encoded string or a file URI
      // If it's base64:
      let base64Image = 'data:image/jpeg;base64,' + imageData;
      this.avatarData = base64Image;

      let store = {
        imageData:base64Image
      }

      this.db.update("0",store);
     }, (err) => {
      // Handle error
     });
  }


}

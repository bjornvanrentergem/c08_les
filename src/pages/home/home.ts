import { Component } from '@angular/core';
import { NavController, Events } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  pizza={
    title:"my awesome pizza",
    toppings:[{
      id:1,
      name:"pineapple"
    },{
      id:1,
      name:"mushrooms"
    }
  ]
  }

  constructor(public navCtrl: NavController, private events:Events) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
  }

  about(){
    this.events.publish("tabsNavigateToAbout",this.pizza);

    //navigate to other tab  using parent
    //this.navCtrl.parent.select(1);
  }

}

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
import { TabsPage } from '../tabs/tabs';
import { RegisterPage } from '../register/register';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  user = {email: "you@me.com", password: "youme1"}

  constructor(public navCtrl: NavController, public navParams: NavParams, private authService: AuthServiceProvider, private menuCtrl:MenuController) {
    menuCtrl.enable(false);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  loginWithGoogle(){
    this.authService.loginWithGoogle();
  }
  login() {
    console.log('Tried to login with.',this.user);
    this.authService.login(this.user.email, this.user.password).then((result) => {
      console.log("AuthService replied with",result);
      if (this.authService.isLoggedIn) {
        // if auth success, go to home
        this.navCtrl.setRoot(TabsPage);
      }
    });
  }

  register(){
    this.navCtrl.push(RegisterPage);
  }

}

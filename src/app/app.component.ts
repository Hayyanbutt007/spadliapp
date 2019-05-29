/**
 * @author    ThemesBuckets <themebucketbd@gmail.com>
 * @copyright Copyright (c) 2018
 * @license   Fulcrumy
 * 
 * File path - '../../src/app/app.component'
 */

import { Component, ViewChild } from '@angular/core';
import { Nav, Platform, MenuController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { TranslateService } from '@ngx-translate/core';
import { DataProvider } from '../providers/data/data';
//import { SignInPage } from'../pages/login/login';
import { SignInPage } from '../pages/authentication/sign-in/sign-in';
import { AuthService } from '../services/auth.services';
import { Storage } from '@ionic/storage';
import {Events} from 'ionic-angular';
import { HomePage } from '../pages/home/home';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {

  @ViewChild(Nav) nav: Nav;

  // Root Page of Application
  rootPage: any;

  // Side Menu Pages
  pages: any;

  // Selected Side Menu
  selectedMenu: any;
  public name='test';
  public email='test@test.com';
  public photo='assets/imgs/avatar.png';
  
  constructor(public platform: Platform,
    public statusBar: StatusBar,
    public splashScreen: SplashScreen,
    public menuCtrl: MenuController,
    public translateService: TranslateService,
    public dataProvider: DataProvider,private auth: AuthService,
    private storage: Storage,
    public events: Events) {
    this.initializeApp();
    // Set Default Language
    translateService.setDefaultLang('en');
    // Get List of Side Menu Data
    this.getSideMenuData();
    events.subscribe('user:login', (user, time) => {      
      this.name=user.name;
      this.email=user.email;
      this.photo=user.photo;
      // user and time are the same arguments passed in `events.publish(user, time)`      
    });
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      /*this.storage.get('login').then((val) => {   
        console.log(val);   
        if(val && val.name){          
          this.rootPage = HomePage;       
          this.events.publish('user:login', val, Date.now());          
        }else{
          this.rootPage = SignInPage;
        }
      });*/
      this.rootPage = SignInPage;
      this.statusBar.styleDefault();
      this.splashScreen.hide();

    });
  }

  /**
   * Get Menu Data from Service of `DataProvider`
   * You get `DataProvider` Service at - 'src/providers/data/data';
   */
  getSideMenuData() {
    this.pages = this.dataProvider.getSideMenus();
  }

  /**
   * Open Selected Page
   * @param component 
   * @param index 
   */
  openPage(component, index) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    if (component) {
      this.nav.setRoot(component);
      this.menuCtrl.close();
    } else {
      if (this.selectedMenu) {
        this.selectedMenu = 0;
      } else {
        this.selectedMenu = index;
      }
    }
  }

  // Logout
  logout() {
    this.storage.clear();
    this.nav.setRoot('SignInPage');
  }
}

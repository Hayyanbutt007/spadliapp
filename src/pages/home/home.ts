/**
 * @author    ThemesBuckets <themebucketbd@gmail.com>
 * @copyright Copyright (c) 2018
 * @license   Fulcrumy
 * 
 * This File Represent Home Page Component
 * File path - '../../src/pages/home/home'
 */

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public menuCtrl: MenuController,
    private camera: Camera) {
    this.menuCtrl.enable(true); // Enable SideMenu
  }

  takephoto(){
    let opts={
         quality: 80,
         destinationType: this.camera.DestinationType.FILE_URI,
          sourceType: this.camera.PictureSourceType.CAMERA,
          mediaType:this.camera.MediaType.PICTURE,
          encondingType:this.camera.EncodingType.JPEG,
          CameraDirection:this.camera.Direction.BACK,
          TargetWidth:300,
          TargetHeight:400,
    };
    this.camera.getPicture(opts).then((imageData) => {
      // imageData is either a base64 encoded string or a file URI
      // If it's base64 (DATA_URL):
      let base64Image = 'data:image/jpeg;base64,' + imageData;
      console.log(base64Image);
     }, (err) => {
       console.profile(err);
      // Handle error
     });
  }

  /**
   * Open Search Page
   */
  goToSearchPage() {
    this.navCtrl.setRoot('SearchPage');
  }
}


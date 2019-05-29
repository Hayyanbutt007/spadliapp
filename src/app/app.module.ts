import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { MyApp } from './app.component';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { DataProvider } from '../providers/data/data';
import { Ionic2RatingModule } from 'ionic2-rating';
import { IonicImageViewerModule } from 'ionic-img-viewer';
import { SwingModule } from 'angular2-swing';
import { SuperTabsModule } from 'ionic2-super-tabs';
import { CalendarModule } from "ion2-calendar";
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuth } from 'angularfire2/auth';
import { firebaseconfig } from '../config';
//import { LoginPage } from '../pages/login/login';
import { SignInPage } from '../pages/authentication/sign-in/sign-in';
import { AuthService } from '../services/auth.services';
import { IonicStorageModule } from '@ionic/storage'; 
// By default TranslateLoader will look for translation json files in i18n/
// So change this lool in the src/assets directory.
import firebase from 'firebase';
import { Camera } from '@ionic-native/camera/ngx';
firebase.initializeApp({
  apiKey: "AIzaSyBbcbJT7KczQpeRtEQRmeYW6RTPq9L-37I",
  authDomain: "spadli-app.firebaseapp.com",
  databaseURL: "https://spadli-app.firebaseio.com",
  projectId: "spadli-app",
  storageBucket: "spadli-app.appspot.com",
  messagingSenderId: "404040014948"
});
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    MyApp,
    SignInPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    SwingModule,
    
    SuperTabsModule.forRoot(),
    AngularFireModule.initializeApp(firebaseconfig.fire),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    IonicModule.forRoot(MyApp, {
      menuType: 'overlay'
    }),
    IonicStorageModule.forRoot(),
    Ionic2RatingModule,
    IonicImageViewerModule,
    CalendarModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    SignInPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    HttpClient,
   DataProvider,
   AngularFireAuth,
   AuthService,
   Camera
  ]
})
export class AppModule { }

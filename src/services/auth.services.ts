import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import {App} from "ionic-angular";
import { Storage } from '@ionic/storage';
import {Events} from 'ionic-angular';
import AuthProvider = firebase.auth.AuthProvider;

@Injectable()
export class AuthService {
	private user: firebase.User;

	public objLoggedUser = {
		name:"name",
		email:"test",
		photo:"assets/imgs/avatar.png"
  	}

	constructor(public events: Events,public afAuth: AngularFireAuth,public app: App,private storage: Storage) {
		afAuth.authState.subscribe(user => {
			this.user = user;
		});
	}

	signInWithEmail(credentials) {
		console.log('Sign in with email');
		return this.afAuth.auth.signInWithEmailAndPassword(credentials.email,
			 credentials.password);
	}

	signUp(credentials) {
		return this.afAuth.auth.createUserWithEmailAndPassword(credentials.email,credentials.password);
	}

	get authenticated(): boolean {
		return this.user !== null;
	}

	getEmail() {
		return this.user && this.user.email;
	}

	signOut(): Promise<void> {
		return this.afAuth.auth.signOut();
	}

	signInWithGoogle() {
		console.log('Sign in with google');
		return this.oauthSignIn(new firebase.auth.GoogleAuthProvider());
	}

	private oauthSignIn(provider: AuthProvider) {
		if (!(<any>window).cordova) {
			return this.afAuth.auth.signInWithPopup(provider).then(
				result=>{
					let nav = this.app.getActiveNav()								
					this.objLoggedUser.email=result.user.email;
					this.objLoggedUser.name=result.user.displayName;
					this.objLoggedUser.photo=result.user.photoURL;										
					this.storage.set('login', this.objLoggedUser);
					nav.setRoot('HomePage');
					this.events.publish('user:login', this.objLoggedUser, Date.now());
				}
			).catch(function(error) {
				// Handle Errors here.
				alert(error.message);
			});
		} else {
			return this.afAuth.auth.signInWithRedirect(provider)
			.then(() => {
				return this.afAuth.auth.getRedirectResult().then( result => {
					let nav = this.app.getActiveNav()								
					this.objLoggedUser.email=result.user.email;
					this.objLoggedUser.name=result.user.displayName;
					this.objLoggedUser.photo=result.user.photoURL;										
					this.storage.set('login', this.objLoggedUser);
					nav.setRoot('HomePage');
					this.events.publish('user:login', this.objLoggedUser, Date.now());
				}).catch(function(error) {
					// Handle Errors here.
					alert(error.message);
				});
			});
		}
	}
	

}
import { Injectable } from '@angular/core';

import { AuthService } from "angularx-social-login";
import { FacebookLoginProvider} from "angularx-social-login";
import { SocialUser } from "angularx-social-login";

@Injectable({
  providedIn: 'root'
})

export class AuthManagerService {

  user: SocialUser;
  loggedIn: boolean;

  constructor( private authService: AuthService ) { }

  signInWithFB() {
    this.authService.signIn(FacebookLoginProvider.PROVIDER_ID)
    .then((userData) => {
        this.user = userData;
        console.log("FB AUTH");
        console.log(this.user)
    })
  }

  getAuthStatus() {
    console.log("STATUS");
    this.authService.authState.subscribe((user) => {
      this.user = user;
      this.loggedIn = (user != null);
    });
    return this.user;
  }







}

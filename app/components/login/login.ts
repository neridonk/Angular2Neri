import {Component} from 'angular2/core';
import {Router} from 'angular2/router';
import {Benutzer} from '../../model/benutzer';
import {LoginService} from '../../services/LoginService';

import {FORM_DIRECTIVES, ControlGroup, Control} from 'angular2/common';



@Component({
  selector: 'login',
  templateUrl: './components/login/login.html',
  styleUrls: ['./components/login/login.css'],
  directives: [FORM_DIRECTIVES]

})

export class Login {

  loginUser : Benutzer = new Benutzer();
  loginForm: ControlGroup;

  loginFehler = false;

  constructor(private router: Router, private loginService : LoginService) {
    this.loginForm = new ControlGroup({
      benutzername: new Control(''),
      passwort: new Control('')
    });
  }



  login() {
    // this.loginFehler = true;
    console.log(JSON.stringify(this.loginUser));

    this.loginService.setLoggedBenutzer(JSON.stringify(this.loginUser));



    this.router.navigate(['AppLoggedCmp']);



  }


}

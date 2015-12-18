import {Component} from 'angular2/core';
import {LoginService} from '../../services/LoginService';



@Component({
  selector: 'nav',
  templateUrl: './components/nav/nav.html',
  styleUrls: ['./components/nav/nav.css']
})
export class Nav {

  jwt: string;

  constructor(loginService: LoginService) {
    this.jwt = loginService.getLoggedBenutzer();

    console.log(JSON.stringify(this.jwt));
  }

}

import {Component, ViewEncapsulation} from 'angular2/core';
import {Nav} from '../nav/nav';
import {LoginService} from '../../services/LoginService';
import 'rxjs/add/operator/map';


import {
RouteConfig, Router,
ROUTER_DIRECTIVES
} from 'angular2/router';


import {Login} from '../login/login';
import {AppLoggedCmp} from './appLogged/appLogged';

@Component({
  selector: 'app',
  templateUrl: './components/app/app.html',
  styleUrls: ['./components/app/app.css'],
  encapsulation: ViewEncapsulation.None,
  directives: [ROUTER_DIRECTIVES, Nav]

})
@RouteConfig([
  { path: '/', component: Login, name: 'Login' },
  {
    path: '/appLogged/...',
    name: 'AppLoggedCmp',
    component: AppLoggedCmp,
    useAsDefault: true
  },

])
export class AppCmp {




  constructor(router: Router, private loginService: LoginService) {

    if (loginService.getLoggedBenutzer() !== null) {
      router.navigate(['AppLoggedCmp']);
    }


  }

  logError(err) {
    console.error('There was an error: ' + err);
  }



}

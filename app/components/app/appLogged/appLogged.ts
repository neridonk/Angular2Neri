import {Component} from 'angular2/core';
import {RouteConfig, RouterOutlet} from 'angular2/router';
// import {HTTP_PROVIDERS} from 'angular2/http';

import {HomeCmp} from '../../home/home';
import {AboutCmp} from '../../about/about';


@Component({
  selector: 'app',
  templateUrl: './components/app/appLogged/appLogged.html',
  styleUrls: ['./components/app/appLogged/appLogged.css'],
  directives: [RouterOutlet]
})
@RouteConfig([
  { path: '/', component: HomeCmp, name: 'Home', useAsDefault: true },
  { path: '/about', component: AboutCmp, name: 'About' },
  { path: '/home', component: HomeCmp, name: 'Home' }
])
export class AppLoggedCmp { }

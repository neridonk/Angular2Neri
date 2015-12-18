import {provide} from 'angular2/core';
import {bootstrap} from 'angular2/platform/browser';
import {ROUTER_PROVIDERS, APP_BASE_HREF, LocationStrategy, HashLocationStrategy} from 'angular2/router';
import {JSONP_PROVIDERS, Jsonp} from 'angular2/http';
import 'rxjs/add/operator/map';


//Meine
import {AppCmp} from './components/app/app';
import {LoginService} from './services/LoginService';

bootstrap(AppCmp, [
  provide(APP_BASE_HREF, { useValue: '<%= APP_ROOT %>' }),
  ROUTER_PROVIDERS, LoginService, JSONP_PROVIDERS, Jsonp,
  provide(LocationStrategy, { useClass: HashLocationStrategy })
]);

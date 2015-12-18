import {Component} from 'angular2/core';
import {Http, JSONP_PROVIDERS, Headers, HTTP_PROVIDERS, Request, RequestMethod} from 'angular2/http';
import {XHR} from 'angular2/compiler';


@Component({
  selector: 'home',
  templateUrl: './components/home/home.html',
  styleUrls: ['./components/home/home.css'],
  providers: [Http, JSONP_PROVIDERS, HTTP_PROVIDERS]
})
export class HomeCmp {
  secretQuote;
  $http;

  constructor(private http: Http) {
  }

  klick() {
    var authHeader = new Headers();
    authHeader.append('Authorization', "Basic " + btoa(unescape(encodeURIComponent("Dominicdf" + ":" + "admin"))));

    this.http.get('http://localhost:5000/user/', {
      headers: authHeader
    })
      .map(res => res.text())
      .subscribe(
      data => alert(data),
      err => this.logError(err),
      () => console.log('Secret Quote Complete')
      );



  }


  logError(err) {
    console.error('There was an error: ' + err);
  }

}

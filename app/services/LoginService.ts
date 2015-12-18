import {Injectable} from 'angular2/core';


@Injectable()
export class LoginService {

  getLoggedBenutzer(): string {
    return localStorage.getItem('jwt');
  }

  setLoggedBenutzer(token: string) {
    localStorage.setItem('jwt', token);
  }

}

import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot,Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { AuthenticationService } from './services/authentication.service';

@Injectable()
export class GuardGuard implements CanActivate {
  constructor(private auth: AuthenticationService) {}


  canActivate() {
    console.log('aaaaaaaaaa  ... guard')
    return this.auth.isLoggedIn();
  }
}

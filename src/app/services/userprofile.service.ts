import { Injectable } from '@angular/core';
import { Http, Headers,RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class UserprofileService {

  constructor(
    private http:Http
  ) { }

  getProfile(username){
    console.log('userprofile service',username)
    return this.http.get('/api/userprofile/' + username).map(res => res.json())
  }

}

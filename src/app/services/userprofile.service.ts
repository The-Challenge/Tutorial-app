import { Injectable } from '@angular/core';
import { Http, Headers,RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'

@Injectable()
export class UserprofileService {

  constructor(
    private http:Http
  ) { 
       this.http = http;

  }

  getProfile(username){
    console.log('userprofile service',username)
    return this.http.get('/api/userprofile/' + username).map(res => res.json())
  }

  addNewTutorial(TutorialID,username) {

        console.log('!!!!!!!!!!!!!!id &&& username',username,TutorialID)
        // localStorage.setItem('currentUser', JSON.stringify(user));
        return this.http.put('/api/updateuser', TutorialID,username).map((response: Response) => response.json());

       
    }

}

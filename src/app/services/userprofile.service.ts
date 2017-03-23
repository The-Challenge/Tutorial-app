import { Injectable } from '@angular/core';
import { Http, Headers,RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
// import 'rxjs/Rx';
import 'rxjs/add/operator/map'

@Injectable()
export class UserprofileService {
  constructor(private http:Http) { 
      //  this.http = http;
  }

  getProfile(username){
    console.log('userprofile service',username)
    return this.http.get('/api/userprofile/' + username).map(res => res.json())
  }

  addNewTutorial(TutorialID,username) {
    let ob={username:username,
    TutorialID:TutorialID}
    // ob[username]=username

    console.log('!!!!!!!!!!!!!!id &&& username',ob)
    // localStorage.setItem('currentUser', JSON.stringify(user));
    return this.http.put('/api/updateuser',ob).map(res => res.json())
    //  return this.http.put('/api/updateuser', ob)
    //         .map((response: Response) => {
    //           console.log('hhhhhhhhhhhhhhhhhhhhhh')
    //           response.json()})
    //         .catch((error:any) => Observable.throw('Server error'));

  }
  
   getUserTutorial(TutorialID){
    console.log('userprofile service',TutorialID)
    return this.http.get('/api/userprofile/' + TutorialID).map(res => res.json())
  }

}

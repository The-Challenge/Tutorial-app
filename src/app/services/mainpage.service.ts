import { Injectable } from '@angular/core';
import { Http, Headers,RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'

class Tutorial {
	tutorialname : string;
	description : string;
	ownername : string;
    duration : string;
    users : string;
    image : string;
}

@Injectable()
export class MainpageService {

  constructor(private http: Http) { 
  }

  create (tutorial: Tutorial) {
            console.log('!!!!!!!!!!!!!!create',tutorial)

        return this.http.post('/api/tutorial', tutorial).map((response: Response) => response.json());
    }

 gettutorials () {
        return this.http.get('/api/tutorials').map((response: Response) => response.json());
    }

 addNewComment(TutorialID,TutorialComment){
     let ob={_id:TutorialID,
    comments:TutorialComment}
    // ob[username]=username

    console.log('!!!!!!!!!!!!!!id &&& username',ob)
    // localStorage.setItem('currentUser', JSON.stringify(user));
    return this.http.put('/api/Addcommit',ob).map(res => res.json())
 }

}

import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { UserprofileService } from '../services/userprofile.service'
import { AuthenticationService } from '../services/authentication.service' 
@Component({
  selector: 'app-userpage',
  templateUrl: './userpage.component.html',
  styleUrls: ['./userpage.component.css'],
  providers: [UserprofileService,AuthenticationService]
})
export class UserpageComponent implements OnInit {
  private storage;
  model: any = {};

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private userprofileService: UserprofileService,
    private authenticationService: AuthenticationService
    ) { }

  ngOnInit() {
    this.storage = this.route.queryParams.subscribe(params =>{
      console.log('@@@@@@@userpage//params',params)
      let username =params['username'];
      console.log('@@@@@@@userpage//username',username)
      this.userprofileService.getProfile(username)
    })
  }

  logout(){
    this.authenticationService.logout()
    // console.log('logout',)

  }
 

}

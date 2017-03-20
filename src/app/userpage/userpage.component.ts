import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { UserprofileService } from '../services/userprofile.service'
import { AuthenticationService } from '../services/authentication.service' 
import { LoginComponent  } from '../login/login.component'
@Component({
  selector: 'app-userpage',
  templateUrl: './userpage.component.html',
  styleUrls: ['./userpage.component.css'],
  providers: [UserprofileService,AuthenticationService,LoginComponent]
})
export class UserpageComponent implements OnInit {
  private storage;
  model: any = {};

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private userprofileService: UserprofileService,
    private authenticationService: AuthenticationService,
    private loginComponent : LoginComponent
    ) { }

  ngOnInit() {
    // if(this.loginComponent.looged!==true){
    //       this.router.navigate(['/']);
    // }  

    // this.storage = this.route.queryParams.subscribe(params =>{
    //   // console.log('@@@@@@@userpage//params',params)
    //   let username =params['username'];
    //   // console.log('@@@@@@@userpage//username',username)
    //   this.userprofileService.getProfile(username)
    // })

  }

  logout(){
    this.loginComponent.looged=false
    // console.log(this.loginComponent.looged=false)
    this.authenticationService.logout()
    this.router.navigate(['main/']);


  }
 

}

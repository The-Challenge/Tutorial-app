import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

import { UserprofileService } from '../services/userprofile.service'
import { AuthenticationService } from '../services/authentication.service' 
import { LoginComponent  } from '../login/login.component'
import { MainpageService } from '../services/mainpage.service';


@Component({
  selector: 'app-userpage',
  templateUrl: './userpage.component.html',
  styleUrls: ['./userpage.component.css'],
  providers: [UserprofileService,AuthenticationService,LoginComponent,MainpageService]
})
export class UserpageComponent implements OnInit {
  private storage;
  model: any = {};
  public  Tutorials : any;


  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private mainpageService: MainpageService,
    private userprofileService: UserprofileService,
    private authenticationService: AuthenticationService,
    private loginComponent : LoginComponent
    ) { }

  ngOnInit() {
       var TutorialID = JSON.parse(localStorage.getItem('TutorialID'))


  // this.userprofileService.getUserTutorial(TutorialID)
  //  .subscribe(
  //               data => {
  //                   console.log('mai page component data!!!!!!!!!!!!!!!!!',data)
  //               },
  //               error =>{
  //               });

  }

  logout(){
    this.loginComponent.looged=false
    // console.log(this.loginComponent.looged=false)
    this.authenticationService.logout()
    this.router.navigate(['main/']);
    location.reload();

  }
 

}

import { Component, OnInit } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

import { Router, ActivatedRoute, Params } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';
import { Subject } from 'rxjs/Subject';
import { UserprofileService } from '../services/userprofile.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [AuthenticationService,UserprofileService]
})
export class LoginComponent implements OnInit {
    private storage;
    model: any = {};
    loading = false;
    public looged;
    returnUrl: string;

    constructor(
      private route: ActivatedRoute,
      private router: Router,
      private authenticationService: AuthenticationService
    //   private userprofileService : UserprofileService
  ) { }
      ngOnInit() {

    //          this.storage = this.route.queryParams.subscribe(params =>{
    //   // console.log('@@@@@@@userpage//params',params)
    //   let username =params['username'];
    //   // console.log('@@@@@@@userpage//username',username)
    //   this.userprofileService.getProfile(username)
    // })
        // reset login status
        // this.authenticationService.logout();

        // get return url from route parameters or default to '/'
        // this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    }

    login() {
        this.loading = true;
        // console.log('login component',this.model)
        this.authenticationService.login(this.model)
            .subscribe(
                data => {
                    this.looged=true;
                    console.log(this.looged)
                    console.log('this.model.username!!!!!!!!!!!!!!!!!',this.model)
                    // this.router.navigate([this.returnUrl]);
                    this.router.navigate(['userprofile/'+ this.model.username]);
                    // console.log('kmalll')
                      location.reload();

                },
                error =>{
                    this.loading =false

                    this.router.navigate(['/Login']);


                });
    }
}
                
              
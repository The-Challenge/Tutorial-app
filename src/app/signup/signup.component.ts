import { Component, OnInit } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';




@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
  providers:[AuthenticationService]
})
export class SignupComponent implements OnInit {
  model: any = {};
  loading = false;

  constructor( 
    private router: Router,
    private authenticationService: AuthenticationService


   ) {
   }

  ngOnInit() {
  }
  Signup(){
    this.loading = true;
        this.authenticationService.create(this.model)
            .subscribe(
                data => {
                  console.log('!!!!!!!!!!!!!!singup',this.model)
                    this.router.navigate(['/login']);
                },
                error => {
                    this.loading = false;
                });

  }

}

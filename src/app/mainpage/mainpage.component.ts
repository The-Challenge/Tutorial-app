import { Component, OnInit } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { MainpageService } from '../services/mainpage.service';
import { HttpModule} from '@angular/http';
import { LoginComponent  } from '../login/login.component';
import { AuthenticationService } from '../services/authentication.service' 


@Component({
  selector: 'app-mainpage',
  // declarations: [ LoginComponent ],
  templateUrl:'./mainpage.component.html',
  styleUrls: ['./mainpage.component.css'],
  providers:[MainpageService,HttpModule,AuthenticationService,LoginComponent]
})
//./mainpage.component.html
export class MainpageComponent implements OnInit {
  loading = false;
  public  Tutorials : any;
  // public looged
  // looged =this.logincomponent.looged;
  constructor(
    private router: ActivatedRoute,
    private mainpageService: MainpageService,
    private authenticationService: AuthenticationService,
    public logincomponent : LoginComponent

  ) { }

  ngOnInit() {
    // console.log('!!!!!!!!!!!!!!Tutorials');
                  console.log(this.logincomponent.looged)
    this.loading = true;
        this.mainpageService.gettutorials()
            .subscribe(
                data => {
                  this.Tutorials = data;
                   // this.router.navigate(['/login']);
                },
                error => {
                    this.loading = false;
                });
  }

} 

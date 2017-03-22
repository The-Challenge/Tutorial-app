import { Component,OnInit } from '@angular/core';
import { AuthenticationService } from './services/authentication.service' 
import { LoginComponent  } from './login/login.component'
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
    providers: [LoginComponent]

})
export class AppComponent implements OnInit {
  title = 'title';
  curr = JSON.parse(localStorage.getItem('currentUser'));
    


  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthenticationService,
    private loginComponent : LoginComponent
    ) { }

  logout(){
    this.loginComponent.looged=false
    // console.log(this.loginComponent.looged=false)
    this.authenticationService.logout()
    this.router.navigate(['main/']);
  }

  ngOnInit() {
    this.curr
  }


}

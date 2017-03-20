import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';
import { Subject } from 'rxjs/Subject';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [AuthenticationService]
})
export class LoginComponent implements OnInit {
  model: any = {};
  loading = false;
  public looged;
  returnUrl: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthenticationService
  ) { }
      ngOnInit() {
        // reset login status
        // this.authenticationService.logout();

        // get return url from route parameters or default to '/'
        // this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    }

    login() {
        this.loading = true;
        console.log('login component',this.model)
        this.authenticationService.login(this.model)
            .subscribe(
                data => {
                    this.looged=true;
                    console.log(this.looged)
                    console.log('this.model.username!!!!!!!!!!!!!!!!!',this.model.username)
                    // this.router.navigate([this.returnUrl]);
                    this.router.navigate(['userprofile/'+ this.model.username]);

                },
                error =>{
                    this.loading =false

                    this.router.navigate(['/Login']);


                });
    }
}
                
              
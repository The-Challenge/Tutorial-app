import { Routes, RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {LocationStrategy,HashLocationStrategy} from '@angular/common' 
import 'rxjs/Rx';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { MainpageComponent } from './mainpage/mainpage.component';
import { UserpageComponent } from './userpage/userpage.component';
import { GuardGuard } from './guard.guard'

import { AuthenticationService } from './services/authentication.service';
import { UserprofileService } from './services/userprofile.service'

const ROUTES = [
  { path: '',redirectTo: 'main',pathMatch: 'full'},
  { path:'main',component: MainpageComponent,pathMatch: 'full'},
  { path: 'Signup',component: SignupComponent },
  { path: 'Login',component: LoginComponent},

  { path:'userprofile/:username',component: UserpageComponent,canActivate: [GuardGuard] },
  //otherwise redirect to home
  { path: '**',redirectTo:'main'},
  // {path :'userprofile/:id'}
  ];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    UserpageComponent,
    MainpageComponent
  ],
  imports: [RouterModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [GuardGuard,AuthenticationService,UserprofileService,{provide:LocationStrategy,useClass:HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }

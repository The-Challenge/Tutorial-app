import { Routes, RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { MainpageComponent } from './mainpage/mainpage.component';
import {LocationStrategy,HashLocationStrategy} from '@angular/common' 
import { UserpageComponent } from './userpage/userpage.component';
import { GuardGuard } from './guard.guard'

const ROUTES = [
  { path: '',redirectTo: 'main',pathMatch: 'full'},
  { path:'main',component: MainpageComponent},
  { path: 'Signup',component: SignupComponent ,canActivate: [GuardGuard]},
  { path: 'Login',component: LoginComponent},
  { path:'userprofile/:username',component: UserpageComponent,canActivate: [GuardGuard] },
  //otherwise redirect to home
  // { path: '**',redirectTo:''},
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
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [GuardGuard,{provide:LocationStrategy,useClass:HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }

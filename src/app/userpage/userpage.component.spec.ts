import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params ,RouterModule} from '@angular/router';
import { Http, Response, Headers, RequestOptions,HttpModule,ConnectionBackend,RequestOptionsArgs} from '@angular/http';
import { UserprofileService } from '../services/userprofile.service'
import { AuthenticationService } from '../services/authentication.service' 
import { LoginComponent  } from '../login/login.component'
import { NO_ERRORS_SCHEMA } from '@angular/core';

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserpageComponent } from './userpage.component';

describe('UserpageComponent', () => {
  let component: UserpageComponent;
  let fixture: ComponentFixture<UserpageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      // schemas : [NO_ERRORS_SCHEMA]
      imports: [HttpModule,{provide: Http, useValue: AuthenticationService }],
      declarations: [ UserpageComponent],
      schemas : [NO_ERRORS_SCHEMA],
      providers: [UserpageComponent,AuthenticationService,LoginComponent,{provide: Http, useValue: AuthenticationService },
      Http,HttpModule,ConnectionBackend,RequestOptions,RouterModule]

    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should Component.box Be true', () => {
    expect(component.box).toEqual(true);
  });

});



      // providers: [ AdminService ,
      // {provide: Http, useValue: AdminService }],
      // schemas : [NO_ERRORS_SCHEMA]

      // declarations: [ AdminComponent],
      // providers: [ AdminService ,
      // {provide: Http, useValue: AdminService }],
      // schemas : [NO_ERRORS_SCHEMA]
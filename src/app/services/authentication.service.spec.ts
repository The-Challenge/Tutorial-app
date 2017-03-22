import { TestBed, inject } from '@angular/core/testing';

import { AuthenticationService } from './authentication.service';
import {Http}  from '@angular/Http';
describe('Service : AuthenticationService ', () => {

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthenticationService,Http,
      {provide : Http, useValue : AuthenticationService }]
    });
  });

  it('should ...', inject([AuthenticationService], (service: AuthenticationService) => {
    expect(service).toBeTruthy();
  }));
});
  
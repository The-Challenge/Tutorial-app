import { TestBed, async } from '@angular/core/testing';
import {RouterTestingModule} from '@angular/router/testing'
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Router, ActivatedRoute, Params ,RouterModule,RouterOutlet} from '@angular/router';
import { AuthenticationService } from './services/authentication.service' 
import { LoginComponent  } from './login/login.component'
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LoginComponent,
        AppComponent,
      ],imports :[RouterTestingModule] ,
      providers: [AppComponent,AuthenticationService]
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it(`should have as title 'app works!'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('app works!');
  }));

  it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('a').textContent).toContain('Logout');
  }));

  
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginComponent ]
    })
    .compileComponents();  
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});


// src\app\login\login.component.spec.ts (5,1): Cannot find name 'describe'. (2304)
// src\app\login\login.component.spec.ts (9,3): Cannot find name 'beforeEach'. (2304)
// src\app\login\login.component.spec.ts (16,3): Cannot find name 'beforeEach'. (2304)
// src\app\login\login.component.spec.ts (22,3): Cannot find name 'it'. (2304)
// src\app\login\login.component.spec.ts (23,5): Cannot find name 'expect'. (2304)

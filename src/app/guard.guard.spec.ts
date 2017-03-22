import { TestBed, async, inject,ComponentFixture } from '@angular/core/testing';
import { AuthenticationService } from './services/authentication.service';
import { GuardGuard } from './guard.guard';
import { Http, Response, Headers, RequestOptions,HttpModule,ConnectionBackend,RequestOptionsArgs} from '@angular/http';

describe('GuardGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GuardGuard,AuthenticationService,Http,ConnectionBackend,RequestOptions]
    });
  });

  it('should ...', inject([GuardGuard], (guard: GuardGuard) => {
    expect(guard).toBeTruthy();
  }));
});

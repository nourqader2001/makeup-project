import { TestBed } from '@angular/core/testing';
// import { CanActivateFn } from '@angular/router';
import { AuthGuard } from './auth.guard'; // Assuming AuthGuard is the correct name for your guard class

describe('AuthGuard', () => {
  let guard: AuthGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthGuard]
    });
    guard = TestBed.inject(AuthGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});


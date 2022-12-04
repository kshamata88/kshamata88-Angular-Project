import { TestBed } from '@angular/core/testing';

import { MenuIdVerifyGuard } from './menu-id-verify.guard';

describe('MenuIdVerifyGuard', () => {
  let guard: MenuIdVerifyGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(MenuIdVerifyGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});

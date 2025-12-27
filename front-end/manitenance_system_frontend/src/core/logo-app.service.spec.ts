import { TestBed } from '@angular/core/testing';

import { LogoAppService } from './logo-app.service';

describe('LogoAppService', () => {
  let service: LogoAppService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LogoAppService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

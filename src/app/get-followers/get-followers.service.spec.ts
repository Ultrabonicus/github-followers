import { TestBed, inject } from '@angular/core/testing';

import { GetFollowersService } from './get-followers.service';

describe('GetFollowersService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GetFollowersService]
    });
  });

  it('should be created', inject([GetFollowersService], (service: GetFollowersService) => {
    expect(service).toBeTruthy();
  }));
});

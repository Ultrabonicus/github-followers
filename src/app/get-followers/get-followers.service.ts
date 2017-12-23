import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import {Follower} from '../models/follower';

@Injectable()
export class GetFollowersService {

  constructor(private http: HttpClient) { }

  public getFollowers(name: string): Observable<Follower[]> {
    return this.http.get(`http://api.github.com/users/${name}/followers`)
      .map(x => x as Follower[]);
  }
}

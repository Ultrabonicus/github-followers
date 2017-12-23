import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {GetFollowersService} from '../get-followers/get-followers.service';
import {Observable} from 'rxjs/Observable';
import {Follower} from '../models/follower';

@Component({
  selector: 'app-followers',
  templateUrl: './followers.component.html',
  styleUrls: ['./followers.component.css']
})
export class FollowersComponent implements OnInit {

  followers: Observable<Follower[]>;

  constructor(
    private route: ActivatedRoute,
    private getFollowersService: GetFollowersService
  ) {}
  ngOnInit() {
    this.route.params.subscribe(params => {
      this.followers = this.getFollowersService.getFollowers(params.name);
    });
  }
}

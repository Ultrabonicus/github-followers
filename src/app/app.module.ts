import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { GetFollowersService } from './get-followers/get-followers.service';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { FollowersComponent } from './followers/followers.component';


@NgModule({
  declarations: [
    AppComponent,
    FollowersComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [GetFollowersService],
  bootstrap: [AppComponent]
})
export class AppModule { }

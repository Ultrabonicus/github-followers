import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FollowersComponent } from './followers/followers.component';

const routes: Routes = [
  { path: '', redirectTo: 'followers/mosh-hamedani', pathMatch: 'full' },
  { path: 'followers/:name', component: FollowersComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RecruitersComponent } from './recruiters/recruiters.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'recruiters', component: RecruitersComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

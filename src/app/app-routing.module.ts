import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutPageComponent } from './about-page/about-page.component';
import { LeftPageComponent } from './left-page/left-page.component';
import { RightPageComponent } from './right-page/right-page.component';

const routes: Routes = [
  { path: 'abo', component: AboutPageComponent, data: { animation: 'isabo' } },
  { path: 'right', component: RightPageComponent, data: { animation: 'isRight' } },
  { path: 'left', component: LeftPageComponent, data: { animation: 'isLeft' } },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

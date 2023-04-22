import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { TestComponent } from './test/test.component';
import { HomeComponent } from './home/home.component';
import { EnquiryComponent } from './enquiry/enquiry.component';
import { DeleteComponent } from './delete/delete.component';

const routes: Routes = [
  {
    path:'test',
    component:TestComponent
  },
  {
    path:'main',
    component:MainComponent
  },
  {
    path:'home',
    component:HomeComponent
  },
  {
    path:'enquiry',
    component:EnquiryComponent
  },
  {
    path:'delete',
    component:DeleteComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

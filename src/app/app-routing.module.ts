import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './dashboard/home/home.component';
import { ContactComponent } from './dashboard/contact/contact.component';
import { ViewComponent } from './dashboard/view/view.component';

const routes: Routes = [
  {
    path:'',
    pathMatch:'full',
    redirectTo:'contact'
  },
  {
    path:'home',
    component:HomeComponent
  },
  {
    path:'contact', 
    component:ContactComponent
  },
  {
    path:'view',
    component:ViewComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { StudentAddComponent } from './student-add/student-add.component';
import { StudentListComponent } from './student-list/student-list.component';

const routes: Routes = [
  {
    path:"",
    redirectTo :"/list",
    pathMatch:"full"
  },
  {
    path:"list",
    component:StudentListComponent
  },{
    path:"add",
    component: StudentAddComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

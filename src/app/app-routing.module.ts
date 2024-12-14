import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditlistComponent } from './editlist/editlist.component';
import { AppComponent } from './app.component';
import { ListComponent } from './list/list.component';

const routes: Routes = [
  {
    path:'',
    component:ListComponent
  },

  {
    path:'name/:name',
    component:EditlistComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

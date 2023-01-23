import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AdvicesListComponent } from './advices-list/advices-list.component'; 

const routes: Routes = [
  { path: 'list', component: AdvicesListComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }

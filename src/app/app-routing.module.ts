import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrintcardComponent } from './printcard/printcard.component';

const routes: Routes = [
  // {
  //   path:'card',
  //   component:PrintcardComponent
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

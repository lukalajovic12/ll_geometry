import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SvgCircleComponent } from './svg-circle/svg-circle.component';
const routes: Routes = [
  {path: '', component:SvgCircleComponent}    
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

 }

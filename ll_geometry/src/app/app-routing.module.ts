import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ThreejsExampleComponent } from './threejs-example/threejs-example.component';

const routes: Routes = [
  {path:'three',component:ThreejsExampleComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  
 }

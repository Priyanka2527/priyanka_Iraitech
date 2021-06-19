import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Comp1Component } from './comp1/comp1.component';
import { AddComponent } from './comp2/add/add.component';
import { Comp2Component } from './comp2/comp2.component';
import { DefaultComponent } from './comp2/default/default.component';
import { UpdateComponent } from './comp2/update/update.component';
import { Comp3Component } from './comp3/comp3.component';
import { Comp4Component } from './comp4/comp4.component';
import { ShowComponent } from './show/show.component';

const routes: Routes = [
  {path:"",component:Comp1Component},
  {path:"comp2",component:Comp2Component,
  children:[
    {path:'',redirectTo:"default",pathMatch:'full'},
    {path:'default',component:DefaultComponent},
    {path:'add',component:AddComponent},
    {path:'update',component:UpdateComponent}
  ]

},
  {path:"comp3",component:Comp3Component},
  {path:"show",component:ShowComponent},
  {path:"comp4",component:Comp4Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Pagina1Component } from './pagina1/pagina1.component';
import { Pagina2Component } from './pagina2/pagina2.component';
import { Pagina3Component } from './pagina3/pagina3.component';
import { RouterModule, Routes } from '@angular/router';

const rutas : Routes=[
  {path: 'pagina1', component: Pagina1Component},
  {path: 'pagina2', component: Pagina2Component},
  {path: 'pagina3', component: Pagina3Component}
]

@NgModule({
  imports: [
    RouterModule.forRoot(rutas),
    CommonModule
  ],
  exports:[
    RouterModule
  ]
  declarations: []
})
export class AppRoutingModule { }

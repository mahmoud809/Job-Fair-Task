import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlankComponent } from './layout/blank/blank.component';
import { CustomerTableComponent } from './components/customer-table/customer-table.component';
import { GraphComponent } from './components/graph/graph.component';

import { NotFoundComponent } from './components/not-found/not-found.component';

const routes: Routes =
[
  {
    path:'',component:BlankComponent,
    children:  [
      {path: "" ,   redirectTo: 'customer-table',  pathMatch:  'full'  },

      {path: "customer-table" , component:CustomerTableComponent, title: "customerTable"  },
      {path: "graph/:customer_id" , component:GraphComponent,  title: "graph"},
    

    ]
  },
  {path:'**' , component:NotFoundComponent , title:'NotFound'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{scrollPositionRestoration:'top'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }

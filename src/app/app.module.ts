import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import  {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http"

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BlankComponent } from './layout/blank/blank.component';
import { CustomerTableComponent } from './components/customer-table/customer-table.component';
import { GraphComponent } from './components/graph/graph.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { FilterPipe } from './pipe/filter.pipe';
import { FormsModule } from '@angular/forms';
import { AmountFilterPipe } from './pipe/amount-filter.pipe';


@NgModule({
  declarations: [
    AppComponent,
    BlankComponent,
    NavbarComponent,
    FooterComponent,
    GraphComponent,
    CustomerTableComponent,
    NotFoundComponent,
    FilterPipe,
    AmountFilterPipe,
  


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers:[],
  bootstrap: [AppComponent]
})
export class AppModule { }

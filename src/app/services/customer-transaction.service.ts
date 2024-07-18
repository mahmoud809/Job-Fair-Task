import { Injectable } from '@angular/core';
import  { HttpClientModule} from "@angular/common/http"
import  { HttpClient} from "@angular/common/http"
import { filter, Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CustomerTransactionService {

  constructor(private httpClientModule : HttpClientModule, private  httpClient: HttpClient) { }


  getJsonData()  : Observable  <any>
  {
    return  this.httpClient.get('assets/db.json');
  }

  // getCustomerID(customer_id :number) : Observable <any>
  // {
  //   return  this.httpClient.get(`assets/db.json/${customer_id}`);
  // }

}

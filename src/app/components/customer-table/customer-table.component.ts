import { CommonModule } from '@angular/common';
import { HttpErrorResponse } from '@angular/common/http';
import { Component, NgZoneOptions, OnInit } from '@angular/core';
import { Customers } from 'src/app/interfaces/customers';
import { Transactions } from 'src/app/interfaces/transactions';
import { CustomerTransactionService } from 'src/app/services/customer-transaction.service';
import {FilterPipe} from 'src/app/pipe/filter.pipe';
import { AmountFilterPipe } from 'src/app/pipe/amount-filter.pipe';
import { FormsModule } from '@angular/forms';
import { CustomerTransaction } from 'src/app/interfaces/customer-transactions';

@Component({

  selector: 'app-customer-table',
  standalone: false ,
  templateUrl: './customer-table.component.html',
  styleUrls: ['./customer-table.component.css']
})
export class CustomerTableComponent  implements  OnInit {
  
  constructor(private customerTransactionService : CustomerTransactionService ){
    
  }
  
  customersData: Customers[] = [];
  transactionsData: Transactions[] = [];
  combinedData: CustomerTransaction[] = [];
  searchTerm: string = '';
  

ngOnInit(): void {


  this.customerTransactionService.getJsonData().subscribe({

      next:  (response) =>  {


        console.log("response of trans :",response.transactions)

       this.customersData = response.customers;
       this.transactionsData  =  response.transactions;
       this.combineData(); 
      
      },
      error: (err:  HttpErrorResponse)  =>  {

        console.log(err)
      },
    });
}

combineData(): void {
  this.combinedData = this.transactionsData.map(transaction => {
    const customer = this.customersData.find(cust => cust.id === transaction.customer_id);
    return { customer, transaction };
  });
}


}

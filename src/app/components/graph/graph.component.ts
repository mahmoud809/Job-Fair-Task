import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, OnInit } from '@angular/core';
import { CustomerTransactionService} from 'src/app/services/customer-transaction.service';
import { Chart,  registerables } from 'node_modules/chart.js';
import { HttpErrorResponse } from '@angular/common/http';
import { Customers } from 'src/app/interfaces/customers';
import { Transactions } from 'src/app/interfaces/transactions';
import { ActivatedRoute } from '@angular/router';

Chart.register(...registerables);
@Component({
  selector: 'app-graph',
  standalone: false ,
  //imports: [CommonModule],
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.css']
})
export class GraphComponent  implements  OnInit {


  constructor(private  customerTransactionService  : CustomerTransactionService , private _ActivatedRoute:ActivatedRoute){}


  chartData: any;

  lableData: any[]  = [];
  realData:any[]=[];
  colorData:any[]  =  [];


  customersData: Customers[] =  [];
  transactionsData : Transactions[]  =  [];

  customerID:number = 0

  date:string[] = []
  amount:number[] = []

  ngOnInit(): void {

    this._ActivatedRoute.paramMap.subscribe({
      next:(params)=>
        {
        const customerIDParam = params.get('customer_id');
        if (customerIDParam) 
          {
          this.customerID = +customerIDParam; // Convert to number
          console.log(this.customerID);
         
          }

    }})

    this.customerTransactionService.getJsonData()
    .subscribe({
      next: (response)  =>  {
        this.transactionsData = response.transactions
        // console.log("response" , response.transactions)
        
        for (let i = 0; i <  this.transactionsData.length; i++) 
          {
            if (this.transactionsData[i].customer_id == this.customerID) 
            {
              this.date.push(this.transactionsData[i].date);
              this.amount.push(this.transactionsData[i].amount);
            }
          
        }
      //   this.chartData  =  response;
      //   if(this.chartData  !=  null)
      //   {
      //     for(let i=0; i < this.chartData.length ;  i++)
      //     {

      //       this.lableData.push(this.chartData[i].date)
      //       this.realData.push(this.chartData[i].amount )
      //      // this.colorData.push(this.chartData[i].c)
      //     }
      //   }
      //   this.renderChart(this.lableData, this.realData);

      },

      error: (err:  HttpErrorResponse)  =>  {

        console.log(err)
      },
    })

  this.renderChart(this.date,this.amount);
  this.renderLineChart(this.date , this.amount);
  }


  renderChart(date:string[], amount:number[]): void {

    new Chart("piechart", 
      {
      type: 'bar',
      data: {
        labels: date,
        datasets: [{
          label: ' Double Click Here 📊 For Transactions Stats.',
          data: amount,
          backgroundColor: [
            // 'rgba(255, 99, 132, 0.2)',
           // 'rgba(255, 159, 64, 0.2)',
           //  'rgba(255, 205, 86, 0.2)',
           'rgba(75, 192, 192, 0.2)',
           'rgba(54, 162, 235, 0.2)',
          // 'rgba(153, 102, 255, 0.2)',
          // 'rgba(201, 203, 207, 0.2)'
          ],
          borderColor: [
            // 'rgb(255, 99, 132)',
           // 'rgb(255, 159, 64)',
            // 'rgb(255, 205, 86)',
            'rgb(75, 192, 192)',
            'rgb(54, 162, 235)',
            // 'rgb(153, 102, 255)',
            // 'rgb(201, 203, 207)'
          ],  
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
    
  }



  renderLineChart(date:string[], amount:number[]): void {

    new Chart("linechart", 
      {
      type: 'line',
      data: {
        labels: date,
        datasets: [{
          label: ' Double Click Here 📊 For Transactions Stats.',
          data: amount,
          backgroundColor: [
           // 'rgba(255, 99, 132, 0.2)',
           // 'rgba(255, 159, 64, 0.2)',
           //  'rgba(255, 205, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(54, 162, 235, 0.2)',
           // 'rgba(153, 102, 255, 0.2)',
           // 'rgba(201, 203, 207, 0.2)'
          ],
          borderColor: [
           // 'rgb(255, 99, 132)',
           // 'rgb(255, 159, 64)',
            // 'rgb(255, 205, 86)',
            'rgb(75, 192, 192)',
            'rgb(54, 162, 235)',
            // 'rgb(153, 102, 255)',
            // 'rgb(201, 203, 207)'
          ],  
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
  }
}

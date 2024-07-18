import { Pipe, PipeTransform } from '@angular/core';
import { CustomerTransaction } from '../interfaces/customer-transactions';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(combinedData: CustomerTransaction[], searchTerm: string): CustomerTransaction[] {
    if (!combinedData || !searchTerm) {
      return combinedData;
    }
    
    return combinedData.filter(item => item.customer?.name.toLowerCase().includes(searchTerm.toLowerCase()));
  }
}



// import { Pipe, PipeTransform } from '@angular/core';
// import { CustomerTransaction } from '../interfaces/customer-transactions';

// @Pipe({
//   name: 'filter'
// })
// export class FilterPipe implements PipeTransform {

//   transform(combinedData: CustomerTransaction[], searchTerm: string): CustomerTransaction[] {
//     if (!combinedData ||!searchTerm) {
//       return [];
//     }

//     if (!searchTerm) {
//       return combinedData;
//     }

//     const lowerCaseSearchTerm = searchTerm.toLowerCase();
//     const searchAmount = parseFloat(searchTerm);

//     return combinedData.filter(item => {
//       const isNameMatch = item.customer?.name.toLowerCase().includes(lowerCaseSearchTerm);
//       const isAmountMatch = !isNaN(searchAmount) && item.transaction.amount === searchAmount;
//       return isNameMatch || isAmountMatch;
//     });
//   }
// }



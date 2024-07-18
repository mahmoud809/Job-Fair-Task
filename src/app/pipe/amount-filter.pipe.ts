import { Pipe, PipeTransform } from '@angular/core';
import { CustomerTransaction } from '../interfaces/customer-transactions';

@Pipe({
  name: 'amountFilter'
})
export class AmountFilterPipe implements PipeTransform {

  transform(combinedData: CustomerTransaction[], searchTerm: string): CustomerTransaction[] {
    if (!combinedData || !searchTerm) {
      return combinedData;
    }

    // Ensure searchTerm is converted to a number if necessary
    const searchAmount = parseInt(searchTerm);

    // Check if searchAmount is a valid number
    if (isNaN(searchAmount)) {
      return combinedData;
    }

    return combinedData.filter(item => item.transaction.amount === searchAmount);
  }
}

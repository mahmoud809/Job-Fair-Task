import { Customers } from "./customers";
import { Transactions } from "./transactions";

export interface CustomerTransaction {
    
    customer: Customers | undefined;
    transaction: Transactions;
  }
  
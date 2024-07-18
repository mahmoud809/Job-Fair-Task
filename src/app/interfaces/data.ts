export interface data {
    customers: Customer[]
    transactions: Transaction[]
  }
  
  export interface Customer {
    id: number
    name: string
  }
  
  export interface Transaction {
    id: number
    customer_id: number
    date: string
    amount: number
  }
  
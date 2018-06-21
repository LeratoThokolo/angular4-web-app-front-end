import { Bank } from './bank';
import { Customer } from '../customer/customer';

export class BankDetail {
    bankDetailID: number;
    bank: Bank;
    accountNumber: number;
    pin: number;
    customer: Customer;
    userID: number;
}


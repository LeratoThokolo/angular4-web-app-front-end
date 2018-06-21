import { Customer } from '../customer/customer';
import { Product } from '../product/product';

export class Order {
    orderID: number;
    orderNumber: number;
    amount: number;
    dateCreated: Date;
    delivered: String;
    userID: number;
    driverID: number;
    houseNo: string;
    fullNames: string;
    area: string;
}

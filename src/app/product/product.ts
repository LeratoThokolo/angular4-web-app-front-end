import { Category } from '../category/category';
import { Supplier } from '../supplier/supplier';

export class Product {
    productID: number;
    name: string;
    purchased: boolean;
    unitPrice: number;
    quantity: number;
    image: string;
    category: Category;
    minimumQuantity: number;
    badgeQuantity: number;
    supplier: Supplier;
}

import billData from '../data/bill.csv';
import categoryData from '../data/categories.csv';
import { CategoryServcie } from './CategoryServcie';
import { BillService } from './BillService';


export const categoryServcie = new CategoryServcie(categoryData);
export const billService = new BillService(billData, categoryServcie);
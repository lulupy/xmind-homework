import { BillService } from './services/BillService';
import { CategoryServcie } from './services/CategoryServcie';

import moment from 'moment';



const billData = [
  {type: 0, time: +moment('2022-06'), category: '1', amount: 0.1}, // 支出: 家庭用品
  {type: 0, time: +moment('2022-06'), category: '1', amount: 0.2}, // 支出: 家庭用品
  {type: 1, time: +moment('2022-06'), category: '2', amount: -100}, // 支出: 基金投资
  {type: 1, time: +moment('2022-06'), category: '5', amount: 22000.50}, // 收入: 工资
  {type: 0, time: +moment('2022-06'), category: '4', amount: 500}, // 支出: 交通
];



const categoryData = [
  {id: '1', type: 0, name: '家庭用品'},
  {id: '2', type: 1, name: '基金投资'},
  {id: '3', type: 1, name: '其他'},
  {id: '4', type: 1, name: '交通'},
  {id: '5', type: 1, name: '工资'},
]


const categoryServcie = new CategoryServcie(categoryData);
const billService = new BillService(billData, categoryServcie);

describe('billService', () => {
  
  test('getList', () => {
    const list = billService.getList('2022-06');
    expect(list.length).toBe(5);

    const list1 = billService.getList('2022-06', '1'); 
    expect(list1.length).toBe(2);

    const list3 = billService.getList('2019-10', '3'); 
    expect(list3.length).toBe(0);
  });
  test('getTotalByMonth', () => {
    const total = billService.getTotalByMonth('2019-3');
    expect(total.income).toBe(0);
    expect(total.expenditure).toBe(0);

    const total1 = billService.getTotalByMonth('2022-06');
    expect(total1.income).toBe(22000.5);
    expect(total1.expenditure).toBe(600.3);
  });
  test('getRankByMonth', () => {
    const rank = billService.getRankByMonth('2022-06');
    expect(rank).toEqual([
      { name: '家庭用品', total: 0.3 },
      { name: '基金投资', total: 100 },
      { name: '交通', total: 500 },
    ]);
  });
});

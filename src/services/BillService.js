import { getMonthString } from '..//utils/getMonthString';
import moment from 'moment';

import { INCOME, EXPENDITURE } from '../constants';

// 金额的相加，精确到小数点后两位，主要处理'0.1 + 0.2'问题，暂不考虑超过最大数值的问题
function add(numb1, numb2) {
  return ( parseInt(numb1 * 100 ) + parseInt(numb2 * 100) ) /100;
}

export class BillService {
  static id = 0;
  constructor(list, categoryService) {
    this.list = list;
    this.categoryService = categoryService;
    this.list.forEach(this.format);
  }
  format = (item) => {
    const time =  moment(item.time);
    item.id = BillService.id ++;
    item.showedTime = time.format('YYYY年MM月DD日');
    item.monthTime = getMonthString(time);
    item.showedCategory = this.categoryService.getName(item.category);
  }
  getList(month, category) {
    
    let result = [];
    result = this.list
      .filter(item => {
        return item.monthTime === month;
      });
    if(category) {
      result = result
        .filter(item => item.category === category)
    }
    return result;
  }
  getRankByMonth(month) {
    const list = this.getList(month);
    const map = {};
    for(let i=0; i<list.length; i++) {
      const item = list[i];
      if(item.type === EXPENDITURE || item.amount < 0) {
        const amount = Math.abs(item.amount);
        if(map[item.category]) {
          map[item.category].total = add(amount, map[item.category].total);
        } else {
          map[item.category] = {
            name: this.categoryService.getName(item.category),
            total: amount,
          };
        }

      }
    }

    const rank = Object.values(map).sort((a, b) => a.total - b.total);
    return rank;
  }
  
  getTotalByMonth(month){
    const list = this.getList(month);
    let expenditure = 0 // 支出总数
    let income = 0; // 收入总数
    for(let i=0; i<list.length; i++) {
      const item = list[i];
      // 股票投资和基金投资 虽然类型为收入，但是有赚有赔，当为负时，那就是亏了
      if(item.type === INCOME) {
        if(item.amount < 0) {
          expenditure = add(-item.amount, expenditure)
        } else {
          income += item.amount;
        }
      } else if (item.type === EXPENDITURE) {
        expenditure = add(item.amount, expenditure);
      } else {
        throw new Error('type 错误，请检查数据');
      }
    }
    return {
      income,
      expenditure,
    };
  }
  addItem(item) {
    const { category, amount } = item;
    const type = this.categoryService.getType(category);
    
    const newBill = {
      category,
      type,
      amount: parseFloat(parseFloat(amount).toFixed(2)),
      time: new Date(),
    };
    this.format(newBill);
    this.list.push(newBill);
    return newBill;

  }
}
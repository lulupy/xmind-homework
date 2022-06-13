import { BillService } from './services/BillService';
import { CategoryServcie } from './services/CategoryServcie';


const billData = [
  {"type": 0, "time": 1561910400000, "category": "8s0p77c323", "amount": 5400, "date": "2019-7"},
  {"type": 0,"time": 1561910400000,"category": "0fnhbcle6hg","amount": 1500,"date": "2019-7" },
  {"type": 0,"time": 1563897600000,"category": "3tqndrjqgrg","amount": 3900,"date": "2019-7" },
  {"type": 0,"time": 1564502400000,"category": "bsn20th0k2o","amount": 1900,"date": "2019-7" },
  {"type": 0,"time": 1564588800000,"category": "8s0p77c323","amount": 5400,"date": "2019-8" },
  {"type": 0,"time": 1564588800000,"category": "0fnhbcle6hg","amount": 1500,"date": "2019-8" },
  {"type": 0,"time": 1564588800000,"category": "3tqndrjqgrg","amount": 5000,"date": "2019-8" },
  {"type": 0,"time": 1566316800000,"category": "bsn20th0k2o","amount": 2000,"date": "2019-8" },
  {"type": 0,"time": 1567267200000,"category": "8s0p77c323","amount": 5400,"date": "2019-9" },
  {"type": 0,"time": 1567267200000,"category": "0fnhbcle6hg","amount": 1500,"date": "2019-9" },
  {"type": 0,"time": 1569772800000,"category": "1bcddudhmh","amount": 3000,"date": "2019-9" },
  {"type": 0,"time": 1569772800000,"category": "bsn20th0k2o","amount": 1500,"date": "2019-9" },
  {"type": 0,"time": 1569772800000,"category": "3tqndrjqgrg","amount": 5000,"date": "2019-9" },
  {"type": 0,"time": 1569859200000,"category": "0fnhbcle6hg","amount": 1500,"date": "2019-10" },
  {"type": 0,"time": 1572364800000,"category": "odrjk823mj8","amount": 3000,"date": "2019-10" },
  {"type": 0,"time": 1572451200000,"category": "3tqndrjqgrg","amount": 4600,"date": "2019-10" },
  {"type": 0,"time": 1572451200000,"category": "3tqndrjqgrg","amount": 3800,"date": "2019-10" },
  {"type": 0,"time": 1572537600000,"category": "0fnhbcle6hg","amount": 1500,"date": "2019-11" },
  {"type": 0,"time": 1574179200000,"category": "odrjk823mj8","amount": 2000,"date": "2019-11" },
  {"type": 0,"time": 1574870400000,"category": "1bcddudhmh","amount": 3000,"date": "2019-11" },
  {"type": 0,"time": 1574956800000,"category": "8s0p77c323","amount": 5400,"date": "2019-11" },
  {"type": 0,"time": 1575043200000,"category": "3tqndrjqgrg","amount": 5000,"date": "2019-11" },
  {"type": 0,"time": 1575129600000,"category": "0fnhbcle6hg","amount": 1500,"date": "2019-12" },
  {"type": 0,"time": 1577289600000,"category": "3tqndrjqgrg","amount": 4000,"date": "2019-12" },
  {"type": 0,"time": 1577345333184,"category": "odrjk823mj8","amount": 2000,"date": "2019-12" },
  {"type": 0,"time": 1577345367638,"category": "1bcddudhmh","amount": 3000,"date": "2019-12" },
  {"type": 0,"time": 1577345378418,"category": "j1h1nohhmmo","amount": 800,"date": "2019-12" },
  {"type": 0,"time": 1577345504140,"category": "bsn20th0k2o","amount": 1000,"date": "2019-12" },
  {"type": 0,"time": 1577345517217,"category": "hc5g66kviq","amount": 2000,"date": "2019-12" },
  {"type": 0,"time": 1577345576917,"category": "8s0p77c323","amount": 5400,"date": "2019-12" },
  {"type": 0,"time": 1577345590283,"category": "1bcddudhmh","amount": 3000,"date": "2019-12" },
  {"type": 0,"time": 1577345789527,"category": "3tqndrjqgrg","amount": 3900,"date": "2019-12" },
  {"type": 0,"time": 1577548800000,"category": "8s0p77c323","amount": 5400,"date": "2019-12" },
  {"type": 1,"time": 1561910400000,"category": "s73ijpispio","amount": 30000,"date": "2019-7" },
  {"type": 1,"time": 1564502400000,"category": "5il79e11628","amount": 1000,"date": "2019-7" },
  {"type": 1,"time": 1567094400000,"category": "1vjj47vpd28","amount": -3000,"date": "2019-8" },
  {"type": 1,"time": 1567180800000,"category": "s73ijpispio","amount": 28000,"date": "2019-8" },
  {"type": 1,"time": 1569772800000,"category": "s73ijpispio","amount": 28000,"date": "2019-9" },
  {"type": 1,"time": 1569772800000,"category": "1vjj47vpd28","amount": 2000,"date": "2019-9" },
  {"type": 1,"time": 1572451200000,"category": "s73ijpispio","amount": 20000,"date": "2019-10" },

  {"type": 1,"time": 1577345267529,"category": "s73ijpispio","amount": 30000,"date": "2019-12" },
  {"type": 1,"time": 1577345303191,"category": "1vjj47vpd28","amount": -10000,"date": "2019-12" },
  {"type": 1,"time": 1577345317187,"category": "5il79e11628","amount": 1000,"date": "2019-12" },
  {"type": 1,"time": 1577345463930,"category": "s73ijpispio","amount": 3000,"date": "2019-12" },
  {"type": 1,"time": 1577345477581,"category": "5il79e11628","amount": 2000,"date": "2019-12" },
  {"type": 1,"time": 1577345638784,"category": "1vjj47vpd28","amount": 2000,"date": "2019-12" }
]

const categoryData = [
  {"id":"1bcddudhmh","type":"0","name":"车贷"}
  ,
  {"id":"hc5g66kviq","type":"0","name":"车辆保养"}
  ,
  {"id":"8s0p77c323","type":"0","name":"房贷"}
  ,
  {"id":"0fnhbcle6hg","type":"0","name":"房屋租赁"}
  ,
  {"id":"odrjk823mj8","type":"0","name":"家庭用品"}
  ,
  {"id":"bsn20th0k2o","type":"0","name":"交通"}
  ,
  {"id":"j1h1nohhmmo","type":"0","name":"旅游"}
  ,
  {"id":"3tqndrjqgrg","type":"0","name":"日常饮食"}
  ,
  {"id":"s73ijpispio","type":"1","name":"工资"}
  ,
  {"id":"1vjj47vpd28","type":"1","name":"股票投资"}
  ,
  {"id":"5il79e11628","type":"1","name":"基金投资"}
  
  ]


const categoryServcie = new CategoryServcie(categoryData);
const billService = new BillService(billData, categoryServcie);

describe('billService', () => {
  
  test('getList', () => {
    const list = billService.getList('2019-12');
    expect(list.length).toBe(17);

    const list1 = billService.getList('2019-12', '1vjj47vpd28'); 
    expect(list1.length).toBe(2);

    const list3 = billService.getList('2022-06'); 
    expect(list3.length).toBe(0);
  });
  test('getTotalByMonth', () => {
    const total = billService.getTotalByMonth('2022-06');
    expect(total.income).toBe(0);
    expect(total.expenditure).toBe(0);

    const total1 = billService.getTotalByMonth('2019-12');
    expect(total1.income).toBe(38000);
    expect(total1.expenditure).toBe(42000);
  });
});
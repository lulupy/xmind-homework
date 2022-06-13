import React from 'react';
import moment from 'moment';
import classNames from 'classnames';
import { Divider, Button, DatePicker, message } from 'antd';
import AddBillForm from '../AddBillForm';
import StatisticsModal from '../StatisticsModal';
import { billService } from '@/services';
import CategorySelect from '../CategorySelect';
import { EXPENDITURE } from '@/constants';
import { getMonthString } from '@/utils/getMonthString';
import './index.css';



const Bill = () => {
  const now = moment();
  const [bills, setBills] = React.useState([]);
  const [total, setTotal] = React.useState(null);
  const [category, setCategory] = React.useState('');
  const [time, setTime] = React.useState(now);
  const [addVisible, setAddVisilbe] = React.useState(false);
  const [statisticsVisible, setStatisticsVisible] = React.useState(false);

  const closeAddForm = () => {
    setAddVisilbe(false);
  }

  const addBill = (data) => {
    billService.addItem(data);
    const monthOfNow = getMonthString(now);
    const monthOfCurrent = getMonthString(time);
    message.success('成功');
    if(monthOfNow === monthOfCurrent) {
      setTotal(billService.getTotalByMonth(monthOfNow));
      setBills(billService.getList(monthOfNow, category));
    }
  }

  React.useEffect(() => {
    const month = getMonthString(time);
    
    setTotal(billService.getTotalByMonth(month));
    setBills(billService.getList(month, category));
  }, [time, category]);
  return (
    <div className='bill'>
      <h2 className='bill__title'>
        <span>记账本</span>
        <Button type='primary' onClick={() => setAddVisilbe(!addVisible)}>{addVisible ? '收起' : '记一笔'}</Button>
      </h2>
      <div className='bill__content'>
        <AddBillForm
          visible={addVisible}
          onSubmit={addBill}
          onCancel={closeAddForm}
        />
        <div className='bill__row'>
          <CategorySelect
            className='bill__category-select'
            value={category}
            onChange={(v) => setCategory(v)}
          />
          <span onClick={() => setStatisticsVisible(true)}>支出排行榜&gt;</span>
        </div>
        <Divider />
        <div className='bill__row'>
          <DatePicker
            value={time}
            allowClear={false}
            onChange={(v) => setTime(v)}
            picker="month"
            className='bill__time-select'
          />
          {total && <span>支出: ￥{total.expenditure} 收入: ￥{total.income}</span>}
          
        </div>
        <Divider />
        <div className='bill__list'>
          {bills.map((bill) => {
            const isExpenditure = bill.type === EXPENDITURE || bill.amount < 0;
            return (
               <div className='bill__item' key={bill.id}>
                <span className='bill__catetory'>{bill.showedCategory}</span>
                <span className='bill__time'>{bill.showedTime}</span>
                
                <span className={classNames('bill__amount', {
                  negative: isExpenditure,
                })}>￥{isExpenditure && '-'}{Math.abs(bill.amount)}</span>
              </div>
            )
          })}
        </div>

      </div>
      <StatisticsModal
        month={time.format('YYYY-MM')}
        visible={statisticsVisible}
        onCancel={() => setStatisticsVisible(false)}
      />
    </div>
  );
}

export default React.memo(Bill);
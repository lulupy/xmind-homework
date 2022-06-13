import { billService } from '@/services';
import { Modal } from 'antd';
import React from 'react';
import './index.css';

const StatisticsModal = ({  month, visible, ...other }) => {
  const [rank, setRank] = React.useState([]);
  React.useEffect(() => {
    if(visible){
      const list = billService.getRankByMonth(month);
      setRank(list);
    }
  }, [month, visible]);
  return (
    <Modal {...other} visible={visible} footer={null}>
      <div>
        <h2>{month}，支出排行榜:</h2>
        <div>
          {rank.map((item) => (
            <div key={item.name} className="statistics-item">
              <span>{item.name}</span>
              <span>￥{item.total}</span>
            </div>
          ))}        
        </div>
      </div>
    </Modal>
  );
}

export default React.memo(StatisticsModal);
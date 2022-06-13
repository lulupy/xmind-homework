import React from 'react';
import ReactDOM from 'react-dom/client';
import { ConfigProvider } from 'antd';
import './index.css';
import App from './App';
import 'moment/locale/zh-cn';
import zhCN from 'antd/lib/locale/zh_CN';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

    <ConfigProvider locale={zhCN}>
      <App />
    </ConfigProvider>
);


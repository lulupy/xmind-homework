import React from 'react';
import { Form, InputNumber, Button, Divider, Space } from 'antd';
import classNames from 'classnames';
import CategorySelect from '../CategorySelect';
import './index.css';

const AddBillForm = ({ visible, onSubmit, onCancel }) => {
  const [form] = Form.useForm();
  const submit = async () => {
    const data = await form.validateFields();
    onSubmit && onSubmit(data);
  };
  return (
    <Form
      form={form}
      layout="inline"
      className={classNames('add-bill-form', { visible })}
    >
      <Form.Item name="category" label="分类" rules={[{ required: true }]}>
        <CategorySelect showAll={false} style={{width: 100}}/>
      </Form.Item>
      <Form.Item name="amount" label="金额" rules={[{ required: true }]}>
        <InputNumber step={0.01}  stringMode/>
      </Form.Item>
      <Space>
        <Button type='primary' onClick={submit}>记账</Button>
        <Button onClick={onCancel}>取消</Button>
      </Space>
      <Divider />
    </Form>
  );
}

export default React.memo(AddBillForm);

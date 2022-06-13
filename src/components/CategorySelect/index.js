import React from 'react';
import { Select } from 'antd';
import { categoryServcie } from '@/services';



const { Option } = Select;

const CategorySelect = ({className, showAll = true, ...other}) => {
  const [categories, setCategories] = React.useState([]);
  React.useEffect(() => {
    setCategories(categoryServcie.getList());
  }, []);
  return (
    <Select {...other} className={className}>
      {showAll && <Option key="all" value="">全部账单</Option>}
      {categories.map(category => (
        <Option key={category.id} value={category.id}>{category.name}</Option>
      ))}
    </Select>
  );
}

export default CategorySelect;

import React from 'react';
import { Select } from 'antd';

const options = [];
for (let i = 10; i < 36; i++) {
  options.push({
    value: i.toString(36) + i,
    label: i.toString(36) + i,
  });
}
const handleChange = (value) => {
  console.log(`selected ${value}`);
};

const Sorting = () => (
  <>
    <Select
      showSearch
      style={{
        width: 200,
      }}
      placeholder="Search to Select"
      optionFilterProp="children"
      filterOption={(input, option) => (option?.label ?? '').includes(input)}
      filterSort={(optionA, optionB) =>
        (optionA?.label ?? '').toLowerCase().localeCompare((optionB?.label ?? '').toLowerCase())
      }
      options={[
        {
          value: '1',
          label: 'Not Identified',
        },
        {
          value: '2',
          label: 'Closed',
        },
        {
          value: '3',
          label: 'Communicated',
        },
        {
          value: '4',
          label: 'Identified',
        },
        {
          value: '5',
          label: 'Resolved',
        },
        {
          value: '6',
          label: 'Cancelled',
        },
      ]}
    />
    <Select
      mode="tags"
      style={{
        width: '100%',
      }}
      placeholder="Tags Mode"
      onChange={handleChange}
      options={options}
    />
  </>
);
export default Sorting;
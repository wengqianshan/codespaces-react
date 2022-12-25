import './App.css';
import { useState } from 'react';

function App() {
  // 商品列表
  const items = [
    {
      id: 1,
      name: '香蕉',
      price: 5.99,
    },
    {
      id: 2,
      name: '橘子',
      price: 3.2,
    },
    {
      id: 3,
      name: '梨',
      price: 2,
    },
    {
      id: 4,
      name: '猕猴桃',
      price: 8.8,
    },
    {
      id: 5,
      name: '柿子',
      price: 5.0,
    },
  ];

  // 记录选中项
  const [checked, setChecked] = useState([]);

  // 选中/反选点击
  const handleClick = ({ id }) => {
    const isChecked = checked.includes(id);
    if (isChecked) {
      const res = checked.filter((item) => item !== id);
      setChecked(res);
    } else {
      setChecked([...checked, id]);
    }
  };

  //  判断是否全选
  const checkall = items.length === checked.length;

  // 统计总金额
  const total = checked.reduce((prev, curr) => {
    const item = items.find((item) => item.id === curr);
    const { price } = item;
    return prev + price;
  }, 0);

  return (
    <div className='list'>
      {items.map((item, index) => {
        const isChecked = checked.includes(item.id);
        return (
          <div
            key={index}
            className='item'
            onClick={() => {
              handleClick(item);
            }}
          >
            <div>
              {item.id}: {item.name} (￥{item.price})
            </div>
            {isChecked && <div>✅</div>}
          </div>
        );
      })}
      <div className='bar'>
        <div>是否全选: {checkall ? '是' : '否'}</div>
        <div>总金额: {total.toFixed(2)}</div>
      </div>
    </div>
  );
}

export default App;

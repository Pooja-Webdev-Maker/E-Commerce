import React, { useContext } from 'react';   // ✅ useContext added
import './CSS/ShopCategory.css';
import { ShopContext } from '../context/ShopContext';

const ShopCategory = (props) => {
  const { all_product } = useContext(ShopContext);

  return (
    <div className='shop-category'>
      <img src={props.banner} alt="banner" />
    </div>
  );
}

export default ShopCategory;

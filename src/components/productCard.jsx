import React from 'react';
import { toMoneyValue } from '@/utils/utils';

const ProductCard = (props) => {
  const { product } = props;

  return (
    <div className="prod-cont">
      <div className='prod-img-cont'>
        <img className="img-fluid p-3" src={ product.thumbnail } alt={ product.title } />
      </div>
      <div>
        <div className="p-1">
          { toMoneyValue(product.price, 'COP', 2) }
          { product.shipping.free_shipping ? <i className="bi bi-truck icon-truck m-1" ></i> : '' }
        </div>
        <div style={{fontSize:'14px'}}>
          { product.title }
        </div>
      </div>
    </div>
  )
}

export default ProductCard;

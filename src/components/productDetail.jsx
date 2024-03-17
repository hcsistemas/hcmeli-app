import React from 'react';
import { getDataById } from '@/services/products';
import CarouselPicture from './carouselPicture';
import { toMoneyValue } from '@/utils/utils';
import { Button } from 'react-bootstrap';

const ProductDetail = async (props) => {
  const { id } = props;
  const product = await getDataById(id);

  return (
    <div>
      <div className="prod-detail-cont">
        <div className='prod-detail-img'>
          <CarouselPicture product={product}/>
        </div>
        <div>
          <div className='prod-detail-title'>{product.title}</div>
          <h3><strong>{ toMoneyValue(product.price, 'COP', 2)}</strong></h3>
          <Button className='mt-4 w-100' href={product.permalink} target='_blank' >Comprar</Button>
        </div>
      </div>
      <div>
        <h6>Descripción de producto</h6>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero deleniti architecto quaerat optio maiores voluptatem illo placeat dolores? 
          Quasi minima totam fuga dolor delectus architecto commodi aliquid in quam consequuntur.
        </p>
      </div>
    </div>
  )
}

export default ProductDetail;

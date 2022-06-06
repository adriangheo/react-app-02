import React from 'react'

function ProductItem(props) {
  const {id, name, price, currency, image} = props;

  return (
    <div className="col-4">
        <img src={image} alt="product" className='w-100'/>
        <p>{name}</p>
        <p>{price} {currency}</p>
    </div>
  )
}

export default ProductItem
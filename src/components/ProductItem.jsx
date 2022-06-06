import React from 'react'
import { connect } from 'react-redux';
import { addToCart } from '../redux/actions/cart';


function ProductItem(props) {
  const {id, name, price, currency, image, addToCartInjected} = props;

  return (
    <div className="col-4">
        <img src={image} alt="product" className='w-100'/>
        <p>{name}</p>
        <p>{price} {currency}</p>
        <button 
          className='btn btn-outline-dark'
          onClick={()=>{
            addToCartInjected({
              product: {
                name, //same as "name: name"
                price,
                currency,
                image
              }
            })
          }}
        >
           Adaugă în coș
        </button>
    </div>
  )
}

function mapDispatchToProps(dispatch){
  return {
    addToCartInjected: (payload) => dispatch(addToCart(payload))
  }
}

export default connect(null, mapDispatchToProps)(ProductItem) 

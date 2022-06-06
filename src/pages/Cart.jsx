import React from "react";
import Layout from "../components/Layout";
import { connect } from "react-redux";

function Cart(props) {
  const { cartProducts } = props;
  console.log(cartProducts);
  return (
       
      <div className="container-fluid container-min-max-width">
          Cart page

          {
              cartProducts.map((cartProduct) => {
                  return(
                      <div className="d-flex">
                          <p className="w-50">{cartProduct.name}</p>
                          <p className="w-50">{cartProduct.price} {cartProduct.currency}</p>
                      </div>
                  )
              })
          }
      </div>

  );
}

function mapStateToProps(state) {
  return {
    cartProducts: state.products,
  };
}

export default connect(mapStateToProps)(Cart);

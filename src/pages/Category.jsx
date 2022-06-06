import React, { Component } from 'react'
import Layout from '../components/Layout'
import products from '../utils/products.json'
import ProductList from '../components/ProductList';

class Category extends Component {
  constructor(props) {
      super(props);
      this.state = {
          category: {}
      }
  }

  componentDidMount() {
      console.log(this.props);
      const { match } = this.props;
      const categoryName = match.params.categoryName;
      // Actualizam atat informatiile despre categorie, cat si despre produse.
      this.setState({  category: products[categoryName] });
  }

  render() {
      console.log(this.state);
      return (
          <Layout>
              <div className="container-fluid container-min-max-width">
                  <h2>{ this.state.category.name }</h2>
                  {/* Pasam itemii mai departe catre ProductList */}
                  <ProductList products={this.state.category.items} />
              </div>
          </Layout>
      );
  }
}

export default Category;
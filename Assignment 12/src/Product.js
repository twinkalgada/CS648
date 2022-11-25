import React, {Component} from 'react';
import './App.css';
import Filter from './Filters';
import ProductTable from './ProductTable';
import ProductForm from './ProductForm';


let PRODUCTS = {
  '1': {id: 1, category: 'Jeans', price: '$120.99', name: 'Women High Rise'},
  '2': {id: 2, category: 'Jacket', price: '$1,000', name: 'Columbia'},
  '3': {id: 3, category: 'Jeans', price: '$100', name: 'Tuba'},
  '4': {id: 4, category: 'Shirt', price: '$99', name: 'Banana Republic Men'},
  '5': {id: 5, category: 'Fleece Jacket', price: '$1,300', name: 'Northface'},
  '6': {id: 6, category: 'Shirt', price: '$60', name: 'Gap'}
};


class Product extends Component {

  constructor(props) {
    super(props);
    this.state = {
        products : PRODUCTS,
        filterText : ''
      }
  }

  handleFilter = (filterInput) => {
    this.setState(filterInput);
  }

  handleSave = (product) => {
    if (!product.id) {
         product.id = new Date().getTime()
    }
    this.setState((prevState) => {
      let products = prevState.products
      product.price  = '$'+product.price;
      products[product.id] = product
      return { products }
    });

  }

  handleDestroy = (productId) => {
    this.setState((prevState) => {
      let products = prevState.products
      delete products[productId]
      return { products }
    });
}


  render() {
    return (
      <div className="container">
        <div className="row justify-content-md-center">
          <div className="col-md-6">
            <h1>My Inventory</h1>
            <Filter 
                onFilter={this.handleFilter}/>

            <ProductTable 
                products={this.state.products} 
                filterText={this.state.filterText}
                onDestroy={this.handleDestroy}/>

            <ProductForm
                onSave={this.handleSave}/>
            </div>
        </div>
      </div>
    )
  }
}

export default Product;
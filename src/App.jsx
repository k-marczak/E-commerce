import React, { useState, useEffect } from 'react';
import './index.css'
import { commerce } from './lib/commerce';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Products from './components/Products';
import NavBar from './components/NavBar';
import Footer from './components/Footer';






const App = () => {
  const [products, setProducts] = useState([]);
  const [basketData, setBasketData] = useState([]);

  const fetchProducts = async () => {
    const response = await commerce.products.list();
    setProducts((response && response.data) || []);
  };

  const fetchBasketData = async () => {
    const response = await commerce.cart.retrieve();
    setBasketData(response);
  };

  useEffect(() => {
    fetchProducts();
    fetchBasketData();
  }, []);

  

  

  return (
    <Router>
      <div>
        <NavBar />
         <Switch>
            <Route exact path='/'>
              <Products products={products} />
            </Route>
          </Switch>
          <Footer />
      </div>
    </Router>
  )
}

export default App;

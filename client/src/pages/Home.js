import React, { useState } from 'react'
import { useQuery } from '@apollo/client';
import { QUERY_PRODUCTS, QUERY_ME } from '../utils/queries';
import ProductList from '../components/ProductList'
import ProductForm from '../components/ProductForm'

import FilterBar from './FilterBar'
import ProductItem from './ProductItem'
import Auth from '../utils/auth'
import Basket from './Basket';
import HeaderBasket from './HeaderBasket'
import MainBasket from './MainBasket';
// import Search from './Search'


const Home = () => {
    
  
    const loggedIn = Auth.loggedIn();
    //use useQuery hook to make query request
    const { loading, data } = useQuery(QUERY_PRODUCTS)
    const products = data?.products || [];
    //use object destructuring to extract `data` from the useQuery Hook's response and rename it userData to be more descriptive
    const {data: userData} = useQuery(QUERY_ME)
    const [allProducts, setAllProducts] = useState(products)
     
    //SHOPPING CART~~~~~~~~~~~
    const [cartItems, setCartItems] = useState([]);
    
    const onAdd = (product) => {
      //ITS IS PRODUCT._ID!!!
      const exist = cartItems.find(x => x._id === product._id);
      if(exist) {
        setCartItems(
          cartItems.map(x => 
            x._id === product._id ? {...exist, qty: exist.qty + 1 } : x
        ));
      } else {

        setCartItems([...cartItems, {...product, qty: 1 }])
      }
    };
    
    const onRemove = (product) => {
      const exist  = cartItems.find((x)=> x._id === product._id);
      if(exist.qty === 1) {
        setCartItems(cartItems.filter((x)=> x._id !== product._id))
      } else {
        setCartItems(
          cartItems.map(x => 
            x._id === product._id ? {...exist, qty: exist.qty - 1 } : x
        ));
      }
    }
    //Generate DATA FOR FILTERBAR BRAND
      const generateBrandDataForDropDown = () => {
        return [...new Set(products.map(item => item.brand))];
      }
    


      const handleFilterCondition = (conditionInput) => {
        const filteredData = products.filter(item => {
          return item.condition.includes(conditionInput)
        })

        setAllProducts(filteredData)

        
      }

      const handleFilterBrand = (brandInput) => {
        const filteredData = products.filter(item => {
          if(item.brand === brandInput) {
            return item
          }
          // return item.brand.includes(brandInput)
        })

        setAllProducts(filteredData)
      }

    return (
      <main>
        <div>
          {loggedIn && userData? (
            <div>
              <p>{userData.username}{' '} can fill in the form when logged in.</p>
              {/* <ProductForm /> */}
            </div>
          ): null}
          <div>
            {loading ? (
              <div>Loading...</div>
            ) : (
              <div>
              <HeaderBasket countCartItems={cartItems.length}/>
              <MainBasket onAdd={onAdd} products={products}/>
              <Basket onAdd={onAdd} onRemove={onRemove } cartItems={cartItems}/>
                <FilterBar 
                brands={generateBrandDataForDropDown()} 
                onConditionFilter={handleFilterCondition}
                onBrandFilter={handleFilterBrand}/>
                <ProductList products={products} title="Available guitars: " />
                <div>
                {allProducts.map((item)=> (
                  <ProductItem item={item} key={item._id}/>    
                ))}  
                </div>
                {/* <div>
                  <Search products={products}/>
                </div> */}
                
              </div>
             
            )}
          </div>
        </div>
      </main>
    );
  };
  
export default Home;
  
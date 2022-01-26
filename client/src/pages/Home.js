import React,{useState} from 'react'
import { useQuery } from '@apollo/client';
import { QUERY_PRODUCTS, QUERY_ME } from '../utils/queries';
import ProductList from '../components/ProductList'
import './style.css'
import HeaderBasket from './HeaderBasket';
import MainBasket from './MainBasket';
import Basket from './Basket';
import FilterBar from './FilterBar';
// import Guitar from '../components/Store'

import Auth from '../utils/auth'
import { styleTransfer } from '@cloudinary/url-gen/actions/effect';
import Search from './Search';


const Home = (props) => {
  
    const loggedIn = Auth.loggedIn();
    //use useQuery hook to make query request
    const { loading, data } = useQuery(QUERY_PRODUCTS)
    const products = data?.products || [];
    //use object destructuring to extract `data` from the useQuery Hook's response and rename it userData to be more descriptive
    const {data: userData} = useQuery(QUERY_ME)

    // const [allProducts, setAllProducts] = useState(products)
    
     

    const [cartItems, setCartItems] = useState([]);
    const onAdd = (product) => {
      //ITS IS PRODUCT._ID!!!
      const exist = cartItems.find(x => x._id === product._id);
      if(exist) {
        setCartItems(
          cartItems.map(x => 
            x._id === product._id ? {...exist, qty: exist.qty + 1.94 } : x
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
      // const generateBrandDataForDropDown = () => {
      //   return [...new Set(products.map(item => item.brand))];
      // }
    


      // const handleFilterCondition = (conditionInput) => {
      //   const filteredData = products.filter(item => {
      //     return item.condition.includes(conditionInput)
      //   })

      //   setAllProducts(filteredData)

        
      // // }

      // const handleFilterBrand = (brandInput) => {
      //   const filteredData = products.filter(item => {
      //     if(item.brand === brandInput) {
      //       return item
      //     }
      //     // return item.brand.includes(brandInput)
      //   })

      //   setAllProducts(filteredData)
      // }
    const Cart = ()=> {
      const [selectedCart, setSelectedCart] =useState(true);
       
      return(<section>
        {selectedCart && <div 
               className='cart_cont'>
                 <div className='cart_title'>
                   <h3>Cart</h3>
                   <p onClick={()=>setSelectedCart(false)}>[close]</p>
                 </div>
                <div className='cart_form'>
                <HeaderBasket countCartItems={cartItems.length}/>
              <Basket onAdd={onAdd} onRemove={onRemove } cartItems={cartItems}/>
                </div>
               </div>}
      </section>);
    }
    const{selectedCart,setSelectedCart}=props;

    return (
      <main>
        <div>
        {loggedIn &&<Cart />}
          {loggedIn && userData? (
            <div className="filter_bar">
              <div>
              {/* <Search products={products}/> */}
               </div>
               <div className='cartt'> 
              
                <p className={`${selectedCart}`}
                onClick={()=> setSelectedCart(true)}>🛒</p>
                
               </div>
               
               </div>
              
          ): null}
          <div>
            {loading ? (
              <div>Loading...</div>
            ) : (
              <div>
                <ProductList onAdd={onAdd}  products={products}  />
               
              </div>
            )}
          </div>
        </div>
      </main>
    );
  };
  
export default Home;
  
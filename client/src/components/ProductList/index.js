import React, { useState } from 'react';
//link to a single product page?
// import { Link } from 'react-router-dom';
// import EncodeBase64 from '../Image'
import Product from '../../pages/ProductBasket';
import MainBasket from '../../pages/MainBasket';
import Guitar from '../Store'
import auth from '../../utils/auth';
import './style.css'

const ProductList = (props) => {
  const {cartItems, onAdd, onRemove, products, title} = props;

  const dataList = products.map(
    (data)=> {
        return data
    }
  )

  const [searchText, setSearchText] = useState('')
  const [data, setData] = useState(dataList)

  const excludeColumns = ['id', 'color'];
  const handleChange = value => {
    setSearchText(value)
    filterData(value)
  }

  const filterData = value => {
    const lowerCaseValue = value.toLowerCase().trim();
 
    if(!lowerCaseValue) {
        setData(dataList);
    } else {
 
        const filteredData = dataList.filter(item => {
         return Object.keys(item).some(key => {
             return excludeColumns.includes(key) ? false : item[key].toString().toLowerCase().includes(lowerCaseValue)
         })
        });
        setData(filteredData)
    }
}
  // if (!products.length) {
  //   return <h3>No Products Yet</h3>;
  // }
  // console.log(products);

  const loggedIn = auth.loggedIn();
  return (
    <section>
      {loggedIn && <div className='filter_box'>
      Search: <input 
            type="text"
            placeholder="Type to search..."
            value={searchText}
            onChange={e => handleChange(e.target.value)}
            />
            </div>}
    <div className='guitarCard2'>
  
      {data &&
        data.map((product, i) => (
          <div className='guitarCard' key={i}>
          
          <div key={product._id} style={{margin:'.5em'}}>
            <p className='brand'>
            {product.condition} 
               <strong> {product.brand}</strong> guitar.
            </p>
            <div>
             <p>Posted on{' '}{product.createdAt.split('at 12:40 am')} by  {product.username}</p>
             <Guitar className='img' product={product}/>
            </div>
            <div className='itemEl'>
              <div>
                <p>${product.price + 0.94}</p>
              </div>
              <div>
                <Product onAdd={onAdd} product={product} />
                {/* <button>Add-to Cart</button> */}
              </div>
            </div>
          </div>
          </div>
        ))}
        <div> 
                <p>
                    {data.length === 0 && <span>No records found to display!</span>}
                </p>
            </div>
        
    </div>
   </section>
  );
  
};

export default ProductList;
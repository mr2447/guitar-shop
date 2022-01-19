import React from 'react'
import { useQuery } from '@apollo/client';
import { QUERY_PRODUCTS, QUERY_ME } from '../utils/queries';
import ProductList from '../components/ProductList'
import ProductForm from '../components/ProductForm'
// import Guitar from '../components/Store'
// import Filter from './Filter'
import Auth from '../utils/auth'

const Home = () => {
    const loggedIn = Auth.loggedIn();
    //use useQuery hook to make query request
    const { loading, data } = useQuery(QUERY_PRODUCTS)
    const products = data?.products || [];
    //use object destructuring to extract `data` from the useQuery Hook's response and rename it userData to be more descriptive
    const {data: userData} = useQuery(QUERY_ME)
    
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
                <ProductList products={products} title="Available guitars: " />
                {/* <Guitar products={products}/> */}
                THis is filter: 
                {/* <Filter products={products}/> */}
              </div>
             
            )}
          </div>
        </div>
      </main>
    );
  };
  
export default Home;
  
import React from 'react'
import { useQuery } from '@apollo/client';
import { QUERY_PRODUCTS } from '../utils/queries';
import ProductList from '../components/ProductList'
import Image from '../components/Image'

const Home = () => {
    //use useQuery hook to make query request
    const { loading, data } = useQuery(QUERY_PRODUCTS)
    const products = data?.products || [];
    console.log(products)
    return (
      <main>
        <div>
    <div>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <div>
        <ProductList products={products} title="Available guitars: " />
        <Image/>
        </div>
      )}
    </div>
  </div>
      </main>
    );
  };
  
export default Home;
  
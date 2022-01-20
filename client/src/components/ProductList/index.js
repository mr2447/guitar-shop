import React, { useState } from 'react';
//link to a single product page?
import { Link } from 'react-router-dom';
// import EncodeBase64 from '../Image'
import CloudImage from '../ImageUpload'
import Guitar from '../Store'

const ProductList = ({ products, title }) => {
  
  //HANDLE SEARCH AND FILTER
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
  

  return (
    <div>
      Search: <input 
            type="text"
            placeholder="Type to search..."
            value={searchText}
            onChange={e => handleChange(e.target.value)}
            />
      <h3>{title}</h3>
      {data &&
        data.map((product, i) => (
          <div key={i}>
            <p>
              {product.username}{' '}is selling a {product.brand} guitar.
            </p>
            <div>
             <p>Uploaded on{' '}{product.createdAt}</p>
             <br/>
             <CloudImage />
             <Guitar product={product}/>
            </div>
          </div>
        ))}
        <div> 
            <p>
              {data.length === 0 && <span>No records found to display!</span>}
            </p>
        </div>
    </div>
  );
};

export default ProductList;
import React, { useState } from 'react';

const Search = (products) => {

    const dataList = products.products.map(
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
            <div>
                {data.map((d , i) => {
                    return <div key={i}>
                        <p><span>Brand: </span>{d.brand}</p>
                        <p><span>Condition: </span>{d.condition}</p>
                        </div>
                        
                    })}
            <div> 
                <p>
                    {data.length === 0 && <span>No records found to display!</span>}
                </p>
            </div>
            </div>
        </div>
    )
}

export default Search;

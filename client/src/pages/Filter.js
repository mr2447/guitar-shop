import React, { useState  } from "react"
import Select from 'react-select';
import makeAnimated from 'react-select/animated'

const brandOptions = [
    { value: 'fender', label: 'fender'},
    { value: 'gibson', label: 'gibson'}
]

const conditionOptions = [
    {value: 'new', label: 'new'},
    {value: 'used', label: 'used'}
]


const Filter = (products) => {
// const [products, setProducts] = useState('')
const [filterData, setFilterData] = useState([])

const handleFilterData = async (e) => {
    // await console.log("data from react select: ", typeof data.value)
     if(await e.value === "fender") {
        var filteredData = products.products.filter((data)=> {
        return data.brand === "fender"
        })
    }

    if(await e.value === "gibson") {
        var filteredData = products.products.filter((data)=> {
        return data.brand === "gibson"
    })}

    if(await e.value === "new") {
        var filteredData = products.products.filter((data)=> {
        return data.condition === "new"
    })}

    if(await e.value === "used") {
        var filteredData = products.products.filter((data)=> {
        return data.condition === "used"
    })}
  
    setFilterData(filteredData)

}

    return(
        <div>
            <div>
                <Select
                    options={brandOptions}
                    placeholder="Select Brand"
                    isSearchable
                    onChange={handleFilterData}
                />
            </div>
            <div>
                <Select 
                    options={conditionOptions}
                    placeholder="Select Condition"
                    isSearchable
                    onChange={handleFilterData}
                />
            </div>
            <div>Total: {filterData.length}</div>
            {filterData.map(function(product, i) {
                return <div key={i}>

                    <h5>Brand: {product.brand}</h5>
                    <h5>condition: {product.condition}</h5>
                </div>
            })}
        </div>
    )
}

export default Filter; 
  
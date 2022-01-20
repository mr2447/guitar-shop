import React, { useState } from 'react';

const FilterBar = ({brands, onConditionFilter, onBrandFilter}) => {
    const [filters, setFilters] = useState({
        condition:'', brand: ''
    })
    // const [condition, setCondition] = useState("");
    // const [brand, setBrand] = useState("")

    const handleInput = (field) => (event) => {
        const {value} = event.target;
        setFilters({
            ...filters,
            [field]:value,
        })
        switch (field) {
            case 'condition':
              
                onConditionFilter(value);
                break;
                // case 'condition': //ADD MORE INPUT CASES
                //     setCondition(value);
                //     onConditionFilter(value);
                //     break;
                case "brand":
                    onBrandFilter(value);
                    break
            default: 
                break
        }
        
    };
     
    return (
        <div>

            <div>
                <label htmlFor="condition">Condition</label>
                <input type="text" value={filters.condition} id="condition" onChange={handleInput("condition")}/>
            </div>

            <div>
                <label htmlFor="brand">Brand</label>
                <select id="brand" value={filters.brand} id="brand" onChange={handleInput("brand")}>
                    <option value="">Select</option>
                    {brands.map((brand)=> (
                        <option value={brand} key={brand}>
                            {brand}
                        </option>
                    ))}
                </select>
            </div>

        </div>
    )
}

export default FilterBar;
const ProductItem = ({ item, key}) => {
    // console.log(products.map((item)=>(console.log(item))))
    console.log(item)
    return (
      <div>
          {item?.brand}
          {item?.condition}
      </div>
    )
}

export default ProductItem;
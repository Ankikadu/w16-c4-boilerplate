import React, { useEffect } from "react";
import Homedecor from "./Homedecor";
import Kids from "./Kids";
import Men from "./Men";

// import { Select } from "./Styled";

import Women from "./Women";
  
const Products = () => {
  useEffect(() => {
    // fetch ProductsData using redux-thunk on every mount
  }, []);
  const handleSort = (e) => {
    // dispatch sort products on change
  };
  return (
    <>
      <h2>Products</h2>
      <div data-testid="product-sort-order" onChange={handleSort}>
        <option>Sort by--</option>
        <option value="asc">Low to High</option>
        <option value="desc">High to Low</option>
      </div>
      <div data-testid="products-container">

        {/* iterate data and show each POroduct card */}

        <Men/>
        <Women/>
        <Kids/>
        <Homedecor/>
        
      </div>
    </>
  );
};

export default Products;
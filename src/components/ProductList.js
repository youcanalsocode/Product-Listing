import React, { useState, useEffect } from "react";
import axios from "axios";
import Filters from "./Filters";
import "./ProductList.css";
import ProductHeader from "./ProductHeader";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [filters, setFilters] = useState({
    category: "",
    priceRange: [0, 500],
    brand: "",
    availability: "",
  });
  const [sortOption, setSortOption] = useState("Most Popular");

  useEffect(() => {
    const fetchData = async () => {
      try {
        console.log("Applying filters:", filters);
        const response = await axios.get("http://localhost:5000/api/products", {
          params: {
            ...filters,
            priceRange: filters.priceRange.join(","),
          },
        });
        setProducts(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [filters]);

  const handleFilterChange = (newFilters) => {
    setFilters({ ...filters, ...newFilters });
  };

  const handleSortChange = (e) => {
    const selectedSortOption = e.target.value;
    setSortOption(selectedSortOption);

    let sortedProducts = [...products];

    if (selectedSortOption === "Lowest Price") {
      sortedProducts.sort((a, b) => a.price - b.price);
    } else if (selectedSortOption === "Highest Price") {
      sortedProducts.sort((a, b) => b.price - a.price);
    }

    setProducts(sortedProducts);
  };

  return (
    <div className="product-list">
      <Filters filters={filters} onFilterChange={handleFilterChange} />
      <div className="content">
        <div>
          <ProductHeader
            displayedCount={products.length}
            sortOption={sortOption}
            onSortChange={handleSortChange}
          />
        </div>
        <main className="products">
          {products.map((product) => (
            <div key={product._id} className="product">
              <img
                src={product.image}
                alt={product.name}
                className="product-image"
              />
              <p>{product.brand}</p>
              <h2>{product.name}</h2>
              <p>${product.price}</p>
            </div>
          ))}
        </main>
      </div>
    </div>
  );
};

export default ProductList;

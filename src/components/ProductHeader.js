import React from "react";

const ProductHeader = ({ displayedCount, sortOption, onSortChange }) => {
  return (
    <div
      className="product-header"
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: "16px",
      }}
    >
      <div>{displayedCount} products available</div>
      <div>
        <select value={sortOption} onChange={onSortChange}>
          <option value="Most Popular">Most Popular</option>
          <option value="Lowest Price">Lowest Price</option>
          <option value="Highest Price">Highest Price</option>
        </select>
      </div>
    </div>
  );
};

export default ProductHeader;

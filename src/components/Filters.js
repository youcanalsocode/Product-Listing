import React from "react";

const categoryOptions = [
  { value: "Furniture", label: "Furniture" },
  { value: "Lighting", label: "Lighting" },
  { value: "HomeUsage", label: "HomeUsage" },
  { value: "Toys", label: "Toys" },
];

const brandOptions = [
  { value: "Poliform", label: "Poliform" },
  { value: "Ettic", label: "Ettic" },
  { value: "Kare", label: "Kare" },
];

const availabilityOptions = [
  { value: "In Stock", label: "In Stock" },
  { value: "Out of Stock", label: "Out of Stock" },
];

const Filters = ({ filters, onFilterChange }) => {
  const handleCheckboxChange = (key) => (e) => {
    const value = e.target.value;
    const newSelected = filters[key] ? filters[key].split(",") : [];

    const updatedSelected = newSelected.includes(value)
      ? newSelected.filter((item) => item !== value)
      : [...newSelected, value];

    onFilterChange({ [key]: updatedSelected.join(",") });
  };

  return (
    <aside className="filters">
      <div>
        <h4>Categories</h4>
        {categoryOptions.map((option) => (
          <label
            key={option.value}
            style={{ display: "block", marginBottom: "8px" }}
          >
            <input
              type="checkbox"
              value={option.value}
              checked={filters.category.split(",").includes(option.value)}
              onChange={handleCheckboxChange("category")}
            />
            {option.label}
          </label>
        ))}
      </div>
      <div>
        <h4>Price</h4>
        <p>
          Selected Price Range: ${filters.priceRange[0]} - $
          {filters.priceRange[1]}
        </p>
        <input
          type="range"
          name="priceRange"
          min="0"
          max="500"
          value={filters.priceRange[1]}
          onChange={(e) => onFilterChange({ priceRange: [0, e.target.value] })}
        />
      </div>
      <div>
        <h4>Brands</h4>
        {brandOptions.map((option) => (
          <label
            key={option.value}
            style={{ display: "block", marginBottom: "8px" }}
          >
            <input
              type="checkbox"
              value={option.value}
              checked={filters.brand.split(",").includes(option.value)}
              onChange={handleCheckboxChange("brand")}
            />
            {option.label}
          </label>
        ))}
      </div>
      <div>
        <h4>Availability</h4>
        {availabilityOptions.map((option) => (
          <label
            key={option.value}
            style={{ display: "block", marginBottom: "8px" }}
          >
            <input
              type="checkbox"
              value={option.value}
              checked={filters.availability.split(",").includes(option.value)}
              onChange={handleCheckboxChange("availability")}
            />
            {option.label}
          </label>
        ))}
      </div>
    </aside>
  );
};

export default Filters;

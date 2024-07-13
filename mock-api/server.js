const express = require("express");
const cors = require("cors");

const app = express();
const port = 5000;

app.use(cors());

const products = [
  {
    _id: "1",
    name: "Cool Flower",
    category: "Decoration",
    price: 100,
    brand: "Kare",
    availability: "Out of Stock",
    image: "/Images/coolflower.jpg",
  },
  {
    _id: "2",
    name: "Stylish Vase",
    category: "Decoration",
    price: 115,
    brand: "Kare",
    availability: "Out of Stock",
    image: "/Images/vase.jpg",
  },
  {
    _id: "3",
    name: "Modern Lamp",
    category: "Lighting",
    price: 250,
    brand: "Ettic",
    availability: "Out of Stock",
    image: "/Images/lamp.jpg",
  },
  {
    _id: "4",
    name: "Vintage Clock",
    category: "Decoration",
    price: 310,
    brand: "Ettic",
    availability: "In Stock",
    image: "/Images/clock.jpg",
  },
  {
    _id: "5",
    name: "Cozy Throw Blanket",
    category: "HomeUsage",
    price: 203,
    brand: "Kare",
    availability: "In Stock",
    image: "/Images/blanket.jpg",
  },
  {
    _id: "6",
    name: "Elegant Candle Holder",
    category: "Decoration",
    price: 123,
    brand: "Ettic",
    availability: "In Stock",
    image: "/Images/candleholder.jpg",
  },
  {
    _id: "7",
    name: "Artistic Wall Mirror",
    category: "Decoration",
    price: 402,
    brand: "Ettic",
    availability: "In Stock",
    image: "/Images/wallmirror.jpg",
  },
  {
    _id: "8",
    name: "Stylish Bookends",
    category: "HomeUsage",
    price: 181,
    brand: "Kare",
    availability: "Out of Stock",
    image: "/Images/bookends.jpg",
  },
  {
    _id: "9",
    name: "Indoor Plant Pot",
    category: "HomeUsage",
    price: 14,
    brand: "Ettic",
    availability: "In Stock",
    image: "/Images/plantpot.jpg",
  },
  {
    _id: "10",
    name: "Decorative Wall Art",
    category: "HomeUsage",
    price: 50,
    brand: "Ettic",
    availability: "In Stock",
    image: "/Images/wallart.jpg",
  },
  {
    _id: "11",
    name: "Luxury Bath Towel",
    category: "HomeUsage",
    price: 450,
    brand: "Poliform",
    availability: "In Stock",
    image: "/Images/bathtowel.jpg",
  },
  {
    _id: "12",
    name: "DecorLight",
    category: "Lightning",
    price: 380,
    brand: "Poliform",
    availability: "In Stock",
    image: "/Images/DecorLight.jpg",
  },
  {
    _id: "13",
    name: "Rustic Wooden Shelf",
    category: "Furniture",
    price: 480,
    brand: "Poliform",
    availability: "In Stock",
    image: "/Images/woodenshelf.jpg",
  },
  {
    _id: "14",
    name: "Classic shoerack",
    category: "Furniture",
    price: 450,
    brand: "Kare",
    availability: "In Stock",
    image: "/Images/shoerack.jpg",
  },
  {
    _id: "15",
    name: "Sleek Coffee Table",
    category: "Furniture",
    price: 80,
    brand: "Poliform",
    availability: "In Stock",
    image: "/Images/coffertable.jpg",
  },
  {
    _id: "16",
    name: "Car",
    category: "Toys",
    price: 250,
    brand: "Poliform",
    availability: "In Stock",
    image: "/Images/car.jpg",
  },
  {
    _id: "17",
    name: "Kitchen set",
    category: "Toys",
    price: 401,
    brand: "Poliform",
    availability: "In Stock",
    image: "/Images/kitchenset.jpg",
  },
  {
    _id: "18",
    name: "Doll World",
    category: "Toys",
    price: 280,
    brand: "Poliform",
    availability: "In Stock",
    image: "/Images/doll.jpg",
  },
  {
    _id: "19",
    name: "Elegant Wall Sconce",
    category: "Lighting",
    price: 35,
    brand: "Kare",
    availability: "In Stock",
    image: "/Images/Elegant Wall Sconce.jpg",
  },
  {
    _id: "20",
    name: "Carrom",
    category: "Toys",
    price: 300,
    brand: "Poliform",
    availability: "In Stock",
    image: "/Images/carrom.jpg",
  },
];

app.get("/api/products", (req, res) => {
  const { category, priceRange, brand, availability } = req.query;

  let filteredProducts = products;

  if (category) {
    const categories = category.split(",");
    filteredProducts = filteredProducts.filter((product) =>
      categories.includes(product.category)
    );
  }

  if (priceRange) {
    const [minPrice, maxPrice] = priceRange.split(",").map(Number);
    filteredProducts = filteredProducts.filter(
      (product) => product.price >= minPrice && product.price <= maxPrice
    );
  }

  if (brand) {
    const brands = brand.split(",");
    filteredProducts = filteredProducts.filter((product) =>
      brands.includes(product.brand)
    );
  }

  if (availability) {
    const availabilities = availability.split(",");
    filteredProducts = filteredProducts.filter((product) =>
      availabilities.includes(product.availability)
    );
  }

  res.json(filteredProducts);
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

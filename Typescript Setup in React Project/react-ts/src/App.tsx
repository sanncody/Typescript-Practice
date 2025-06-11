import { useState } from 'react'
import './App.css'
import Product from './components/Product';

export interface IProduct {
  id: number;
  title: string;
  price: number;
}

const handleAddToCart = (id: number) => {
  console.log("Clicked", id);
};

function App() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [products, setProducts] = useState<IProduct[]>([
    {
      id: 32,
      title: "Brazuca",
      price: 6999
    },

    {
      id: 43,
      title: "Laptop Stand",
      price: 799
    },
  ]);

  return (
    <>
      {products.map(prod =>
        <Product
          product={prod}
          key={prod.id}
          handleAddToCartClick={handleAddToCart}
        />
      )}
    </>
  )
}

export default App

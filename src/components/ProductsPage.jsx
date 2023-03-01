import { useState } from 'react';
import jsonData from '../data.json';
import Search from './Search';
import ProductTable from './ProductTable';

function ProductsPage() {
  const [products, setProducts] = useState(jsonData);
  const [productsCopy, setProductsCopy] = useState(jsonData);

  const searchProduct = (text) => {
    if (text === '') {
      setProducts(productsCopy);
    } else {
      setProducts(
        products.filter((product) =>
          product.name.toLowerCase().includes(text.toLowerCase())
        )
      );
    }
  };

  return (
    <div className="mx-auto">
      <Search searchProduct={searchProduct} />
      <ProductTable products={products} />
    </div>
  );
}

export default ProductsPage;

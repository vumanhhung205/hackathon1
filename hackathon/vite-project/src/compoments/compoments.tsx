import React from 'react';
import { Product } from './products';

interface ProductProps {
  image: string;
  name: string;
  price: string;
  sold: number;
  brand: string;
  place: string;
}

const ProductItem: React.FC<ProductProps> = ({ image, name, price, sold, brand, place }) => {
  return (
    <div className="grid__column-2-4">
      <a className="product-item" href="#">
        <div className="product-item_img" style={{ backgroundImage: `url(${image})` }}></div>
        <h4 className="product-item_name">{name}</h4>
        <div className="product-item_price">{price}</div>
        <div className="product-item_action">
          <span className="product-item_like">
            <i className="far fa-heart"></i>
          </span>
          <span className="product-item_sold">{sold} đã bán</span>
        </div>
        <div className="product-item_origin">
          <span className="product-item_brand">{brand}</span>
          <span className="product-item_place">{place}</span>
        </div>
      </a>
    </div>
  );
};

interface ProductListProps {
  products: Product[];
}

const ProductList: React.FC<ProductListProps> = ({ products }) => {
  const product_items = products.map(product => (
    <ProductItem
      key={product.id}
      image={product.image}
      name={product.name}
      price={product.price}
      sold={product.sold}
      brand={product.brand}
      place={product.place}
    />
  ));

  return <div className="grid__row">{product_items}</div>;
};

export default ProductList;

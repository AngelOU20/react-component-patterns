import { products } from '../../data/products';
import { useShoppingCart } from '../hooks/useShoppingCart';
import { ProductCard, ProductImage, ProductTitle, ProductButtons } from '../components';
import '../styles/custom-styles.css';

const ShoppingPage: React.FC = () => {
  const { shoppingCart, onProductCountChange } = useShoppingCart();

  return (
    <div>
      <h1>Shopping Store - C. Props</h1>
      <hr />
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'wrap',
          gap: '20px',
        }}
      >
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            className="bg-dark text-white"
            onChange={onProductCountChange}
            value={shoppingCart[product.id]?.count || 0}
          >
            <ProductImage
              className="custom-image"
              style={{
                boxShadow: '10px 10px 10px rgba(0,0,0,0.2)',
              }}
            />
            <ProductTitle className="text-bold" />
            <ProductButtons className="custom-buttons" />
          </ProductCard>
        ))}
      </div>
      {/* Carrito de compras flotante */}
      {/* <div className="shopping-cart">
        {Object.keys(shoppingCart).map((key) => {
          const product = shoppingCart[key];
          return (
            <ProductCard
              key={product.id}
              product={product}
              className="bg-dark text-white"
              style={{
                width: '180px',
              }}
            >
              <ProductImage
                className="custom-image"
                style={{
                  boxShadow: '10px 10px 10px rgba(0,0,0,0.2)',
                }}
              />
              <ProductButtons className="custom-buttons" />
            </ProductCard>
          );
        })}
      </div> */}
      <div className="shopping-cart">
        {Object.entries(shoppingCart).map(([key, product]) => (
          <ProductCard
            key={key}
            product={product}
            className="bg-dark text-white"
            style={{
              width: '180px',
            }}
            value={product.count}
            onChange={onProductCountChange}
          >
            <ProductImage
              className="custom-image"
              style={{
                boxShadow: '10px 10px 10px rgba(0,0,0,0.2)',
              }}
            />
            <ProductButtons className="custom-buttons" />
          </ProductCard>
        ))}
      </div>
    </div>
  );
};

export default ShoppingPage;

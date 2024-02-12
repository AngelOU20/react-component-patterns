import { products } from '../../data/products';
import { ProductCard, ProductImage, ProductTitle, ProductButtons } from '../components';
import '../styles/custom-styles.css';

const ShoppingPage: React.FC = () => {
  const product = products[0];

  return (
    <div>
      <h1>Shopping Store - State Initializer</h1>
      <hr />
      <ProductCard
        key={product.id}
        product={product}
        className="bg-dark text-white"
        initialValues={{
          count: 4,
          maxCount: 10,
        }}
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
    </div>
  );
};

export default ShoppingPage;
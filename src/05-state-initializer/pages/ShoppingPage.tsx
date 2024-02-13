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
        {({ reset, increaseBy, isMaxCountReached, count, maxCount }) => (
          <>
            <ProductImage
              className="custom-image"
              style={{
                boxShadow: '10px 10px 10px rgba(0,0,0,0.2)',
              }}
            />
            <ProductTitle className="text-bold" />
            <ProductButtons className="custom-buttons" />

            <span
              style={{
                fontSize: 20,
                display: 'flex',
                justifyContent: 'center',
                margin: '10px',
                border: '1px solid #fff',
                borderRadius: 5,
              }}
            >
              {count} - {maxCount}
            </span>

            <div
              style={{
                display: 'flex',
                justifyContent: 'start',
                gap: 10,
                marginLeft: 10,
              }}
            >
              <button onClick={reset}>Reset</button>
              <button onClick={() => increaseBy(-2)}>-2</button>
              {!isMaxCountReached ? (
                <button onClick={() => increaseBy(2)}>+2</button>
              ) : null}
            </div>
          </>
        )}
      </ProductCard>
    </div>
  );
};

export default ShoppingPage;

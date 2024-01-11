import { ProductCard, ProductImage, ProductTitle, ProductButtons } from '../components';
import '../styles/custom-styles.css';

const product = {
  id: '1',
  title: 'Coffe Mug - Card',
  img: '/coffee-mug.png'
};

const product2 = {
  id: '2',
  title: 'Coffe Mug - Card',
};

const ShoppingPage: React.FC = () => {
  return (
    <div>
      <h1>Shopping Store - E. Styles</h1>
      <hr />
      <div style={{
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: '20px'
      }}>
        <ProductCard
          product={product2}
        >
          <ProductCard.Image className="custom-image" />
          <ProductCard.Title title="Café con leche" className="text-bold" />
          <ProductCard.Buttons />
        </ProductCard>

        <ProductCard
          product={product}
          className="bg-dark text-white"
        >
          <ProductImage
            className="custom-image"
            style={{
              boxShadow: "10px 10px 10px rgba(0,0,0,0.2)"
            }}
          />
          <ProductTitle className="text-bold" />
          <ProductButtons className="custom-buttons" />
        </ProductCard>

        <ProductCard
          product={product}
          style={{
            backgroundColor: "#d6cdff"
          }}
        >
          <ProductImage
            style={{
              boxShadow: "10px 10px 10px rgba(0,0,0,0.2)"
            }}
          />
          <ProductTitle
            style={{
              color: "#f8efd9",
              fontWeight: "bold"
            }}
          />
          <ProductButtons
            style={{
              display: "flex",
              justifyContent: "end"
            }}
          />
        </ProductCard>
      </div>
    </div>
  );
};

export default ShoppingPage;
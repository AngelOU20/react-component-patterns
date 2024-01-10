import { ProductCard, ProductImage, ProductTitle, ProductButtons } from '../components';

const product = {
  id: '1',
  title: 'Coffe Mug - Card',
  img: '/coffee-mug.png'
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
        <ProductCard product={product}>
          <ProductCard.Image />
          <ProductCard.Title />
          <ProductCard.Buttons />
        </ProductCard>

        <ProductCard product={product}>
          <ProductImage />
          <ProductTitle title='Café con leche' />
          <ProductButtons />
        </ProductCard>
      </div>
    </div>
  );
};

export default ShoppingPage;
import ProductItem from './ProductItem';
import classes from './Products.module.css';

const DUMMY_PRODUCTS = [
  {
    id: 'p1',
    price: 6000,
    title: '제품1',
    description: '이 제품은 나쁘지 않습니다.',
  },
  {
    id: 'p2',
    price: 5500,
    title: '제품2',
    description: '이 제품은 평가가 좋습니다.',
  },
];

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>주문 가능한 제품</h2>
      <ul>
        {DUMMY_PRODUCTS.map((product) => (
          <ProductItem
            key={product.id}
            id={product.id}
            title={product.title}
            price={product.price}
            description={product.description}
          />
        ))}
      </ul>
    </section>
  );
};

export default Products;

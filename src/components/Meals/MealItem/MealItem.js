import { useContext } from 'react';
import MealItemForm from './MealItemForm';
import classes from './MealItem.module.scss';

import CartContext from '../../../store/cart-context';

const MealItem = props => {
  const cartCtx = useContext(CartContext);
  const { name, description, price } = props;
  const amount = `$${price.toFixed(2)}`;

  const addToCartHandler = amount => {
    cartCtx.addItem({
      id: props.id,
      name: name,
      amount: amount,
      price: price,
    });
  };

  return (
    <li className={classes.meal}>
      <div>
        <h3>{name}</h3>
        <div className={classes.description}>{description}</div>
        <div className={classes.price}>{amount}</div>
      </div>
      <div>
        <MealItemForm id={props.id} onAddToCart={addToCartHandler} />
      </div>
    </li>
  );
};

export default MealItem;

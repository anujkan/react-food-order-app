import { useContext, useEffect, useState } from 'react';

import CartIcon from '../Cart/CartIcon';
import classes from './HeaderCartButton.module.scss';
import CartContext from '../../store/cart-context';

const HeaderCartButton = props => {
  const [animateBtn, setAnimateBtn] = useState(false);
  const cartCtx = useContext(CartContext);
  const { items } = cartCtx;
  const numberOfCartItems = items.reduce((currentNumber, item) => {
    return currentNumber + item.amount;
  }, 0);

  const btnClasses = `${classes.button} ${animateBtn ? classes.bump : ''}`;

  useEffect(() => {
    if (items.length === 0) {
      return;
    }

    setAnimateBtn(true);

    const timer = setTimeout(() => {
      setAnimateBtn(false);
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [items]);

  return (
    <button className={btnClasses} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{numberOfCartItems}</span>
    </button>
  );
};

export default HeaderCartButton;

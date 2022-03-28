import {useContext} from 'react';
import CartContext from '../../store/cart-context';
import classes from './HeaderCartButton.module.css';
const HeaderCartButton=props=>{
  const cartCtx=useContext(CartContext);

  const numberofCartItems=cartCtx.items.reduce((curNumber,item)=>{
    return curNumber+item.amount;
  },0);

  return <button className={classes.button} onClick={props.onClick}>
      <span>Cart</span>
      <span className={classes.badge}>{numberofCartItems}</span>
  </button>

};

export default HeaderCartButton;
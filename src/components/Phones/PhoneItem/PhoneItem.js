import classes from './PhoneItem.module.css';
import PhoneItemForm from './PhoneItemForm';
import {useContext} from 'react';
import CartContext from '../../../store/cart-context';
const PhoneItem = (props)=>{
    const cartCtx=useContext(CartContext);
    const price=`$${props.price.toFixed(2)}`;

    const addToCartHandler=amount=>{
    cartCtx.addItem({
        id:props.id,
        image:props.image,
        name:props.name,
        amount:amount,
        price:props.price
    });
    };
    return(
    <div className={classes.phone}>
        <div>
        <div>
            <img className={classes.image} src={props.image} alt="images"></img></div>
        <h3 className={classes.name}>{props.name}</h3>
        <div className={classes.price}>{price}</div>
        <div><PhoneItemForm onAddToCart={addToCartHandler}/></div>
        </div>
        
    </div>
    )
};

export default PhoneItem;
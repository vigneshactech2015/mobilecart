import {Fragment} from 'react';
import classes from './Header.module.css';
import HeaderCartButton from './HeaderCartButton';
const Header=props=>{
    return(
    <Fragment>
<header>
    <div className={classes.title}>
    <h1 className={classes.mobilecart}>Mobile Cart</h1>
    <HeaderCartButton onClick={props.onShowCart}/>
    </div>
</header>
    </Fragment>
    );
};

export default Header;
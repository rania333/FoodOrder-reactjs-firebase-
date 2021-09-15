import { Badge} from '@material-ui/core';
import { ShoppingCartOutlined} from '@material-ui/icons';
import classes from './HeaderCartButton.module.css';
import {useContext} from 'react';
import CartContext from '../../Context/cart-context';
const HeaderCartButton = (props) => {
    const Cartctx = useContext(CartContext);
    const numberOfCartItems = Cartctx.items.reduce((curNumber, item) => {
        return curNumber + item.amount;
    }, 0);
    return (
        <button className={classes.button} onClick={props.onShowCart}>
            <span>Your Cart</span>
            <span className={classes.badge}>
                <Badge color="secondary" badgeContent={numberOfCartItems} showZero>
                    <ShoppingCartOutlined />
                </Badge>
            </span>
        </button>
    );
};

export default HeaderCartButton;
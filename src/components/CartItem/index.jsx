import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashCan } from '@fortawesome/free-regular-svg-icons'
import { useDispatch } from 'react-redux'
import React from 'react'
import classes from "./CartItem.module.scss"
import { addOne, removeFromCart, removeOne } from '../../redux/Cart'

const CartItem = ({images, name, id, quantity, price}) => {
    const dispatch = useDispatch()
    const totlaPrice = price * quantity

    const handleRemove = () => dispatch(removeFromCart(id))
    const handlePlus = () => dispatch(addOne(id))
    const handleMinus = () => dispatch(removeOne(id))
    return (
        <div className={classes["cart-item"]}>
            <img src={images[0]} className={classes["cart-item__image"]} alt="" />
            <p className={classes["cart-item__name"]}>{name}</p>
            <FontAwesomeIcon icon={faTrashCan} className={classes["cart-item__trash"]} onClick={handleRemove}/>
            <div className={classes["cart-item__controller"]}>
                <button onClick={handleMinus}>-</button>
                {quantity}
                <button onClick={handlePlus}>+</button>
            </div>
            <p className={classes["cart-item__total"]}>{totlaPrice}$</p>
        </div>
    )
}

export default CartItem
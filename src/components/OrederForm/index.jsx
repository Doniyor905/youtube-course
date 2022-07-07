import React, { useEffect, useState } from 'react'
import classNames from 'classnames'
import Container from '../../layout/Container'
import classes from './OrderForm.module.scss'
import image from '../../images/OrderFormImage.jpeg'
import { validateName, validatePhomeContent, validatePhomeNumber, validateText } from './helper'
const initialData = {
    name: "",
    text: "",
    tel: "",
}

const OrderForm = () => {
    const [fields, setFields] = useState(initialData)
    const [disabled, setDisabled] = useState(true)
    useEffect(()=>{
        const isValid = validateName(fields.name) && validatePhomeNumber(fields.tel) && validateText(fields.text)
        setDisabled(!isValid)
    },[fields])

    const hadleChange = (e) => {
        if (e.target.name === 'tel' && !validatePhomeContent(e.target.value)) 
        return
        setFields((prev) => ({ ...prev, [e.target.name]: e.target.value }))
    }
    const hendleSubmit = (e) => {
        e.preventDefault()
        setFields(initialData)
    }
    return (
        <Container className={classes["order-form"]}>
            <h2 className={classes["order-form__title"]}>
                Order A Unique Basket!
            </h2>
            <form className={classes["order-form__form"]}>
                <div className={classes["order-form__fields"]}>
                    <input className={classes["order-form__input"]} placeholder='Name*' type="text" onChange={hadleChange} value={fields.name} name="name" />
                    <input className={classes['order-form__input']} placeholder='Phone Number*' type="tel" onChange={hadleChange} value={fields.tel} name="tel" />
                    <textarea className={classes["order-form__textarea"]} placeholder='Your Ideas*' onChange={hadleChange} value={fields.text} name="text"></textarea>
                    <button onClick={hendleSubmit} className={classNames(classes['order-form__button'], {
                       [classes["order-form__button_disabled"]]: disabled,
                    })} disabled={disabled}>Send</button>
                </div>
                <img className={classes['order-form__image']} src={image} alt="" />
            </form>
        </Container>
    )
}

export default OrderForm
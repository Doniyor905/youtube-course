import React from 'react'
import Container from '../../layout/Container'
import categories from '../../routes/categories'
import classes from "./CategoriesBlock.module.scss"

const CategoriesBlock = () => {
  return (
    <Container className={classes["categories"]}>
        {categories.map(categories=>(
            <div className={classes["categories__item"]}>
                <img src={categories.image} className={classes["categories__image"]} alt="" />
                <a href={categories.link} className={classes["categories__button"]}>{categories.text}</a>
            </div>
        ))}
    </Container>
  )
}

export default CategoriesBlock
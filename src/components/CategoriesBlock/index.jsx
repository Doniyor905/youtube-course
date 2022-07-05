import React from 'react'
import {Link} from "react-router-dom";
import Container from '../../layout/Container'
import categories from '../../routes/categories'
import classes from "./CategoriesBlock.module.scss"

const CategoriesBlock = () => {
  return (
    <Container className={classes["categories"]}>
      {categories.map((category) => (
        <div className={classes["categories__item"]} key={category.link}>
          <img src={category.image} className={classes["categories__image"]} alt="" />
          <Link to={category.link} className={classes["categories__button"]}>{category.text}</Link>
        </div>
      ))}
    </Container>
  )
}

export default CategoriesBlock
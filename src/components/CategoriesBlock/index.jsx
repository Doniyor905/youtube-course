import React from 'react'
import {Link} from "react-router-dom";
import Container from '../../layout/Container'
import categories from '../../routes/categories'
import classes from "./CategoriesBlock.module.scss"

const CategoriesBlock = () => {
  return (
    <Container className={classes["categories"]}>
      {categories.map(({link, image,text}) => (
        <div className={classes["categories__item"]} key={link}>
          <img src={image} className={classes["categories__image"]} alt="" />
          <Link to={link} className={classes["categories__button"]}>{text}</Link>
        </div>
      ))}
    </Container>
  )
}

export default CategoriesBlock
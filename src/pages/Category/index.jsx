import React, { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Header from '../../components/Header'
import ProductCard from '../../components/ProductCard'
import Container from '../../layout/Container'
import DiscountsCarousel from "../../components/DiscountsCarousel"
import classes from './Category.module.scss'
import Title from '../../components/Title';
import categories from '../../routes/categories';

const Category = () => {
  const { type } = useParams()
  const {pathname} = useLocation()
  const {like, cart: cartItems} = useSelector(state=>state)
  const [data, setData] = useState(null)
  const {text:title} = categories.find(item => item.link === pathname)
  useEffect(()=> {
    const fetchData = async () => {
      const data = await fetch(`${process.env.REACT_APP_API_URL}/floristman_items?category=${type}`)
      const cards = await data.json()
      setData(cards)
    }
    fetchData()
  }, [type])
  return (
    <>
      <Header />
      {title && <Title>{title}</Title>}
      <Container className={classes["cards"]}>
        {data && data.map(card =>
          <ProductCard 
          key={card.id} 
          data={card} 
          className={classes["card-item"]} 
          liked={card.id in like}
          selected={card.id in cartItems}/>
          )}
      </Container>
      <DiscountsCarousel></DiscountsCarousel>
    </>
  )
}

export default Category
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../../components/Header'
import ProductCard from '../../components/ProductCard'
import Container from '../../layout/Container'
import DiscountsCarousel from "../../components/DiscountsCarousel"
import classes from './Category.module.scss'

const Category = () => {
  const { type } = useParams()
  const [data, setData] = useState(null)
  useEffect(()=> {
    const fetchData = async () => {
      const data = await fetch(`http://localhost:4000/products?category=${type}`)
      const cards = await data.json()
      setData(cards)
    }
    fetchData()
  }, [type])
  return (
    <>
      <Header />
      <Container className={classes["cards"]}>
        {data && data.map(card =>
          <ProductCard key={card.id} data={card} className={classes["card-item"]} />
          )}
      </Container>
      <DiscountsCarousel></DiscountsCarousel>
    </>
  )
}

export default Category
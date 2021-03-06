import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-regular-svg-icons'
import { faBagShopping } from '@fortawesome/free-solid-svg-icons'
import classNames from 'classnames'

import Container from '../../layout/Container'
import classes from './Header.module.scss'
import logo from '../../images/logo.png'
import categories from '../../routes/categories'
import { useSelector } from 'react-redux'
import { getItemCount } from '../../redux/Cart'

const Header = () => {
  const location = useLocation()
  const cartItemsCount = useSelector(getItemCount)
  return (
    <header className={classes['header']}>
      <Container className={classes['header__container']}>
        <Link to='/' className={classes['header__logo']}>
          <img src={logo} alt="" />
        </Link>
        <Link to="/favorite">
          <FontAwesomeIcon icon={faHeart} className={classes["header__heart"]} />
        </Link>
        <Link to="/cart" className={classes["header__bag-wrapper"]}>
          <FontAwesomeIcon icon={faBagShopping} className={classes["header__bag"]} />
          {Boolean(cartItemsCount) && <p className={classes["header__bag-count"]}>{cartItemsCount}</p> }
        </Link>
      </Container>
      <Container>
        <ul className={classes['header__list']}>
          {categories.map(({ link, text }) => (
            <li key={link}>
              <Link
                to={link}
                className={classNames(classes["header__link"], {
                  [classes["header__link_active"]]:
                    location.pathname === link,
                })}>
                {text}</Link></li>
          ))}
        </ul>

      </Container>
    </header>
  )
}

export default Header
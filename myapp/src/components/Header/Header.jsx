import { useRef } from 'react';
import { Container } from 'reactstrap';
import { NavLink, Link } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { motion } from "framer-motion";

import logo from '../../assets/images/res-logo.png';
import { cartUiActions } from '../../store/shoppingCart/cartUi';
import "./Header.css";

const nav__links = [
  {
    display: "Home",
    path: "/home",
  },
  {
    display: "Products",
    path: "/products",
  },
  {
    display: "Cart",
    path: "/cart",
  },
  {
    display: "Contact",
    path: "/contact",
  },
];

const Header = () => {
  const menuRef = useRef(null);
  const totalQuantity = useSelector(state => state.cart.totalQuantity)
  const dispatch = useDispatch()

  const toggleMenu = () => menuRef.current.classList.toggle("show__menu");
  const toggleCart = () => {
    dispatch((cartUiActions.toggle()))
  }

  return (
    <header className="header">
      <Container>
        <div className="nav__wrapper d-flex align-items-center justify-content-between">
          <Link to="/home" className="logo">
            <img src={logo} alt="logo" />
            <h5>MINH CHAU</h5>
          </Link>

          {/* ======= menu ======= */}
          <div className="navigation" ref={menuRef} onClick={toggleMenu}>
            <div className="menu d-flex align-items-center gap-5">
              {nav__links.map((item, index) => (
                <NavLink
                  to={item.path}
                  key={index}
                  className={(navClass) =>
                    navClass.isActive ? "active__menus underline-css" : "underline-css"
                  }
                >
                  {item.display}
                </NavLink>
              ))}
            </div>
          </div>

          {/* ======== nav right icons ========= */}
          <div className="nav__right d-flex align-items-center gap-4">
            <motion.span
              whileTap={{ scale: 0.75 }}
              className="cart__icon" onClick={toggleCart}>
              <i class="ri-shopping-basket-line"></i>
              <span className="cart__badge">{totalQuantity}</span>
            </motion.span>

            <span className="user">
              <Link to="/login">
                <i class="ri-user-line"></i>
              </Link>
            </span>

            <span className="mobile__menu" onClick={toggleMenu}>
              <i class="ri-menu-line"></i>
            </span>
          </div>
        </div>
      </Container>
    </header>
  )
}

export default Header
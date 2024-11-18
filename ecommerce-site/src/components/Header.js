import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';  // Для прокрутки по странице
import styled from 'styled-components';  // Для стилей
import { FaShoppingCart } from 'react-icons/fa';  // Для иконки корзины

// Стили для компонента
const HeaderWrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 0px;
  background-color: #111;
  color: white;
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 1000;
`;

const Logo = styled.img`
  height: 30px;
`;

const Nav = styled.nav`
 display: flex;
  gap: 20px;
`;

const NavLink = styled(Link)`
  color: white;
  font-size: 18px;
  text-decoration: none;
  cursor: pointer;

  &:hover {
    color: #00bcd4;
  }
`;

const CartIcon = styled(FaShoppingCart)`
  color: white;
  font-size: 24px;
  cursor: pointer;

  &:hover {
    color: #00bcd4;
  }
`;

const Header = () => {
  return (
    <HeaderWrapper>
      <Logo src="/логоСкейтБД.png" alt="Logo" />
      <Nav>
        <NavLink to="home" smooth={true} duration={500}>Home</NavLink>
        <NavLink to="products" smooth={true} duration={500}>Products</NavLink>
        <NavLink to="contact" smooth={true} duration={500}>Contact</NavLink>
      </Nav>
      <CartIcon />
    </HeaderWrapper>
  );
};

export default Header;

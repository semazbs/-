import React from 'react';
import styled from 'styled-components';

const FooterWrapper = styled.footer`
  background-color: #111;
  color: white;
  padding: 20px;
  text-align: center;
`;

const Footer = () => {
  return (
    <FooterWrapper id="contact">
      <p>&copy; 2024 My E-commerce Site | All Rights Reserved</p>
      <p>Contact us: info@example.com</p>
    </FooterWrapper>
  );
};

export default Footer;

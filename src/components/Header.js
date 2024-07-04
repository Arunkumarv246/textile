// src/components/Header.js

import React from 'react';
import Carousel from './Carousel';
import '../styles/Header.css'; // Create and import a CSS file for custom styles

const Header = () => {
  const images = [
    `${process.env.PUBLIC_URL}/images2/image1.jpg`,
    `${process.env.PUBLIC_URL}/images2/image2.jpg`,
    `${process.env.PUBLIC_URL}/images2/image3.jpg`,
    `${process.env.PUBLIC_URL}/images2/image4.jpg`,
    `${process.env.PUBLIC_URL}/images2/image5.jpg`,
  ];

  return (
    <header className="header-container">
      <Carousel images={images} />
    </header>
  );
};

export default Header;

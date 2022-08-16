import Link from 'next/link';
import React from 'react';
import {  AiFillInstagram, AiFillPhone} from 'react-icons/ai';
import { FaFacebook} from 'react-icons/fa';


const Footer = () => {
  return (
    <div className="footer-container">
      <p>2022 Lee Gâteau Parfait </p>
      <p className="icons">
        <a href='https://www.facebook.com/Lee-g%C3%A2teau-parfait-103101619173835' target='_blank'><FaFacebook /></a>
        <a href='https://www.instagram.com/direct/t/340282366841710300949128194709864694422' target='_blank'><AiFillInstagram/></a>
        <a href='tel:+213 0666661899' target='_blank'><AiFillPhone/></a>
      </p>
    </div>
  )
}

export default Footer

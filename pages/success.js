import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { BsBagCheckFill } from 'react-icons/bs';

import { useStateContext } from '../context/StateContext';
import { runFireworks } from '../lib/utils';
import Head from 'next/head';

const Success = () => {
  const { setCartItems, setTotalPrice, setTotalQuantities } = useStateContext();
  
  useEffect(() => {
    localStorage.clear();
    setCartItems([]);
    setTotalPrice(0);
    setTotalQuantities(0);
    runFireworks();
  }, []);

  return (
    <div className="success-wrapper">
      <Head>
        <title>Lee Gâteau Parfait</title>
        <link rel="icon" href="/gateau.png" />
      </Head>
      <div className="success">
        <p className="icon">
          <BsBagCheckFill />
        </p>
        <h2>Nous vous remercions de votre commande!</h2>
        {/* <p className="email-msg">Vérifiez votre boîte de réception pour le reçu.</p> */}
        <p className="description">
        Si vous avez des questions, veuillez envoyer un e-mail
          <a className="email" href="mailto:leegateauparfait@gmail.com">
            leegateauparfait@gmail.com
          </a>
        </p>
        <Link href="/">
          <button type="button" width="300px" className="btn">
            Continue Achats
          </button>
        </Link>
      </div>
    </div>
  )
}

export default Success
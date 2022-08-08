import React from 'react';

import { client } from '../lib/client';
import { Product, FooterBanner, HeroBanner } from '../components';

import MessengerCustomerChat from 'react-messenger-customer-chat/lib/MessengerCustomerChat';
import Head from 'next/head';
import Typewriter from 'typewriter-effect'


const Home = ({ products, bannerData }) => (
  <div>
    <Head>
        <title>Lee Gâteau Parfait</title>
        <link rel="icon" href="/gateau.png" />
      </Head>
    <HeroBanner heroBanner={bannerData.length && bannerData[0]}  />
    
    <div className="products-heading">

      <h2 className='large'> 
        <Typewriter 
          onInit={(typewriter) => 
            typewriter
            .typeString("Gâteau Prestige 👑🍪🍩")
            .start()
            .pauseFor(2000)
            .deleteAll()
            .typeString("Gâteau Traditionnelle 🤎🥮")
            .pauseFor(2000)
            .deleteAll()
            .typeString("Gâteau Aux Miel 🍯")
            .pauseFor(2000)
            .deleteAll()
            .typeString("Les Salés 🍕🍔🥙🌯")
            .pauseFor(2000)
            .deleteAll()
            .typeString("Les Désserts🍨")
            .pauseFor(2000)
            .deleteAll()
            .typeString("Les Vèrrine🍸🍹")
            .pauseFor(2000)
            .deleteAll()
            .typeString("Tarte D'anniversaire🎂🍰")
            .pauseFor(2000)
            .deleteAll()
            .typeString("Sablé Personnalisée 😋")
            .pauseFor(2000)
            .deleteAll()
          }
          options={{
            loop :true
          }}

        />
      </h2>
      <p>Nos Meilleurs Produits</p>
    </div>

    <div className="products-container">
      {products?.map((product) => <Product key={product._id} product={product} />)}
    </div>

    {/* <FooterBanner footerBanner={bannerData && bannerData[1]} /> */}
    <MessengerCustomerChat
      pageId="103101619173835"
      appId="1426751180893639"
      themeColor='#32ccec'
    />
  </div>
);

export const getServerSideProps = async () => {
  const query = '*[_type == "product"]';
  const products = await client.fetch(query);

  const bannerQuery = '*[_type == "banner"]';
  const bannerData = await client.fetch(bannerQuery);

  return {
    props: { products, bannerData }
  }
}

export default Home;
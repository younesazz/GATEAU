import React from 'react';
import Link from 'next/link';

import { urlFor } from '../lib/client';
import Head from 'next/head';

const Product = ({ product: { image, name, slug, price } }) => {
  return (
    <div>
      <Head>
        <title>Lee Gâteau Parfait</title>
        <link rel="icon" href="/gateau.png" />
      </Head>
      <Link href={`/product/${slug.current}`}>
        <div className="product-card">
        
          <img 
            src={urlFor(image && image[0])}
            width={250}
            height={250}
            className="product-image"
          />
        
          <p className="product-name">{name}</p>
          <p className="product-price">{price} DA</p>
        
        </div>
      </Link>
    </div>
  )
}

export default Product
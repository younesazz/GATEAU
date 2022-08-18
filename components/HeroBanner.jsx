import React from 'react';
import Particles from 'react-particles-js/umd/particles';

import { urlFor } from '../lib/client';

const HeroBanner = ({ heroBanner }) => {
  return (
    <div className="hero-banner-container">
      <Particles 
            params={{
              particles: {
                number: {
                  value: 500,
                  density: {
                    enable: true,
                    value_area: 3000,
                  }
                },
                polygon: {
                            enable: true,
                            type: 'inside',
                            move: {
                                radius: 10
                            },
                }
              },
            }}
            style={{
                    width: '100%',
                    maxHeight : '30px'
            }}
          />
      <div>
        
        <h3>{heroBanner.midText}</h3>
        <h1>{heroBanner.largeText1}</h1>
        <p className="beats-solo">{heroBanner.smallText}</p>
        <img src="./footer-bg.jpeg" alt="headphones" className="hero-banner-image" />
        
        <div>
          
            <a href='https://www.facebook.com/Lee-g%C3%A2teau-parfait-103101619173835' target='_blank'>
              <button type="button">{heroBanner.buttonText}</button>
            </a>
          
          <Particles 
            params={{
              particles: {
                number: {
                  value: 100,
                  density: {
                    enable: true,
                    value_area: 1000,
                  }
                },
                polygon: {
                            enable: true,
                            type: 'inside',
                            move: {
                                radius: 10
                            },
                }
              },
            }}
            style={{
                    width: '100%',
            }}
          />
          <div className="desc">
            <h5>Description</h5>
            <p>{heroBanner.desc}</p>
            
          </div>
          
        </div>
      </div>
      
    </div>
  )
}

export default HeroBanner

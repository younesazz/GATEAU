import * as React from 'react';
import { useState } from 'react';
import { client } from '../lib/client';

export default function Checkout() {

  const [formData, setFormData] = useState({ name: '', phone: '' });
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const { username, phone } = formData;

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    setLoading(true);

    const commande = {
      _type: 'commande',
      name: formData.username,
      phone: formData.phone,
    };

    client.create(commande)
      .then(() => {
        setLoading(false);
        setIsFormSubmitted(true);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className='cmd'>

    <div className="app__footer-cards">

      <div className="app__footer-card ">
        <img src='./email.png' alt="email" />
        <a href="mailto:leegateauparfait@gmail.com" className="p-text">leegateauparfait@gmail.com</a>
      </div>
      <div className="app__footer-card">
        <img src='./mobile.png' alt="phone" />
        <a href="tel:+213 0697600642" className="p-text">+213 0697600642</a>
      </div>
    </div>
    {!isFormSubmitted ? (
      <div className="app__footer-form app__flex">
    <h3 className="head-text">Ou bien saissez : </h3>
        <div className="app__flex">
          <input className="p-text" type="text" placeholder="Nom et Prénom" name="username" value={username} onChange={handleChangeInput} />
        </div>
        <div className="app__flex">
          <input className="p-text" type="text" placeholder="Téléphone" name="telephone" value={phone} onChange={handleChangeInput} />
        </div>
        
        <button type="button" className="p-text" onClick={handleSubmit}>{!loading ? 'Confirmer' : 'Envoi en cours...'}</button>
      </div>
    ) : (
      <div>
        <h3 className="head-text">
          Thank you for getting in touch!
        </h3>
      </div>
    )}
  </div>
  );
}
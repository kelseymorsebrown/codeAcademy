import React, { useState } from 'react';

const CheckoutForm = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    address: '',
    payment: 'Credit Card',
  });

  const handleChange = (e) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formState);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Name:</label>
        <input id="name" name="name" type="text" onChange={handleChange} />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input id="email" name="email" type="email" onChange={handleChange} />
      </div>
      <div>
        <label htmlFor="address">Address:</label>
        <input
          id="address"
          name="address"
          type="text"
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="payment">Payment Method:</label>
        <select id="payment" name="payment" onChange={handleChange}>
          <option>Credit Card</option>
          <option>Debit Card</option>
          <option>PayPal</option>
        </select>
      </div>
      <div>
        <button type="submit">Checkout</button>
      </div>
    </form>
  );
};

export default CheckoutForm;

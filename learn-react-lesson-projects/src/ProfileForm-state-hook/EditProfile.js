import React, { useState } from 'react';

export default function EditProfile() {
  const [profile, setProfile] = useState({});

  // regex to match numbers between 1 and 10 digits long
  const validPhoneNumber = /^\d{1,10}$/;

  const handleChange = ({ target }) => {
    const { name, value } = target;
    if (name === 'phone') {
      const newPhone = value;
      const isValid = validPhoneNumber.test(newPhone);
      if (isValid) {
        setProfile((prev) => ({ ...prev, [name]: value }));
      }
    } else {
      setProfile((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(JSON.stringify(profile, '', 2));
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={profile.firstName || ''}
        name="firstName"
        type="text"
        placeholder="First Name"
        onChange={handleChange}
      />
      <input
        value={profile.lastName || ''}
        type="text"
        name="lastName"
        placeholder="Last Name"
        onChange={handleChange}
      />
      <input
        value={profile.bday || ''}
        type="date"
        name="bday"
        onChange={handleChange}
      />
      <input
        value={profile.password || ''}
        type="password"
        name="password"
        placeholder="Password"
        onChange={handleChange}
      />
      <input
        value={profile.phone || ''}
        type="text"
        name="phone"
        placeholder="xxx-xxx-xxxx"
        onChange={handleChange}
      />
      <button type="submit">Submit</button>
    </form>
  );
}

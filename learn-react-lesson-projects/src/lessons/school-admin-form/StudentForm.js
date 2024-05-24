import React, { useState } from 'react';
import InputField from './InputField';
import styles from './StudentForm.module.css';

export default function StudentForm() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [age, setAge] = useState('');
  const [address, setAddress] = useState('');
  const [homeroomNumber, setHomeroomNumber] = useState('');
  const [studentId, setStudentId] = useState('');

  // set favorite lunch option with radio input rather than text input
  const [favoriteLunch, setFavoriteLunch] = useState('');

  return (
    <div className={styles.formContainer}>
      <div className={styles.inputForm}>
        <h2>Student Input:</h2>
        <form>
          <InputField
            fieldId="firstName"
            fieldType="text"
            labelText="First Name"
            state={firstName}
            setState={setFirstName}
          />
          <InputField
            fieldId="lastName"
            fieldType="text"
            labelText="Last Name"
            state={lastName}
            setState={setLastName}
          />
          <InputField
            fieldId="age"
            fieldType="text"
            labelText="Age"
            state={age}
            setState={setAge}
          />
          <InputField
            fieldId="address"
            fieldType="text"
            labelText="Address"
            state={address}
            setState={setAddress}
          />
          <InputField
            fieldId="homeroomNumber"
            fieldType="text"
            labelText="Homeroom Class Number"
            state={homeroomNumber}
            setState={setHomeroomNumber}
          />
          <InputField
            fieldId="studentId"
            fieldType="text"
            labelText="Student ID"
            state={studentId}
            setState={setStudentId}
          />
          <h4>Favorite Lunch Option</h4>
          <InputField
            fieldId="pizza"
            fieldType="radio"
            labelText="Pizza"
            state={favoriteLunch}
            setState={setFavoriteLunch}
          />
          <InputField
            fieldId="meatloaf"
            fieldType="radio"
            labelText="Meatloaf"
            state={favoriteLunch}
            setState={setFavoriteLunch}
          />
          <InputField
            fieldId="mac"
            fieldType="radio"
            labelText="Mac n Cheese"
            state={favoriteLunch}
            setState={setFavoriteLunch}
          />
        </form>
      </div>
      <div className={styles.currentInput}>
        <h2>Current Student:</h2>
        <p>
          <strong>
            {firstName} {lastName}
          </strong>
        </p>
        <ul>
          {age ? <li>{age} years old</li> : ''}
          {address ? <li>{address}</li> : ''}
          {homeroomNumber ? <li>{homeroomNumber}</li> : ''}
          {studentId ? <li>{studentId}</li> : ''}
          {favoriteLunch ? <li>Favorite Lunch Option: {favoriteLunch}</li> : ''}
        </ul>
      </div>
    </div>
  );
}

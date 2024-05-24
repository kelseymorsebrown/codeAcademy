import React from 'react';
import styles from './InputField.module.css';

export default function InputField({
  fieldId,
  fieldType,
  labelText,
  state,
  setState,
}) {
  function handleUserInput(e) {
    setState(e.target.value);
  }

  if (fieldType === 'text') {
    return (
      <div className={styles.inputField}>
        <label for={fieldId}>{`${labelText}: `}</label>
        <input
          id={fieldId}
          type={fieldType}
          onChange={handleUserInput}
          value={state}
        />
      </div>
    );
  }

  if (fieldType === 'radio') {
    return (
      <div>
        <input
          id={fieldId}
          type={fieldType}
          onChange={handleUserInput}
          checked={state === labelText}
          value={labelText}
        />
        <label for={fieldId}>{` ${labelText}`}</label>
      </div>
    );
  }
}

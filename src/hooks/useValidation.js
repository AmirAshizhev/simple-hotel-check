import { useState } from 'react';

export function useValidation() {
  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});
  const [isValid, setIsValid] = useState(false);

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setValues({...values, [name]: value});
    setErrors({...errors, [name]: e.target.validationMessage});
    setIsValid(e.target.closest("form").checkValidity());

  }

  return {values, errors, isValid, handleChange};
}
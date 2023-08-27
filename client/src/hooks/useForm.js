import { useState } from "react";

export const useForm = (initialState) => {
  const [values, setValues] = useState(initialState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleSubmit = async (e, func) => {
    e.preventDefault();
    func(values).then((res) => {
      e.target.reset();
      setValues(initialState);
    });
  };

  return {
    values,
    handleChange,
    handleSubmit,
  };
};

import { useState } from "react";

// Custom hook không return về giao diện mà chỉ return về data
export default function useForm(initialValues) {
  const [values, setValues] = useState(initialValues);

  const handleChange = (event) => {
    const { value, name } = event.target;
    setValues({ ...values, [name]: value });
  };

  return { values, handleChange };
}

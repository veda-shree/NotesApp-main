import React, { useState } from "react";
import * as dataservice from "./services/dataservice";

export function useForm(initialValues) {
  const [values, setValues] = useState(initialValues);

  const resetForm = () => {
    setValues(initialValues);
  };
  return { values, setValues, resetForm };
}

export function Form(props) {
  return <form>{props.children}</form>;
}

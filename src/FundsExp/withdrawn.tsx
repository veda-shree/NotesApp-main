import { Button, makeStyles, Paper } from "@material-ui/core";
import React, { useState } from "react";
import "../App.css";
import * as dataservice from "../FundsExp/services/dataservice";
import { useForm, Form } from "./useForm";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";

const initialValues = {
  type: "",
  token: "",
};

const useStyles = makeStyles((theme) => ({
  pageConetent: {
    margin: theme.spacing(5),
    padding: theme.spacing(3),
  },
}));
const WithdrawForm: React.FunctionComponent = () => {
  const [values, setValues] = useState([{ type: "", token: "" }]);
  const classes = useStyles();
  const { resetForm } = useForm(initialValues);

  //   const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //     event.preventDefault();
  //     console.log(event.currentTarget);
  //     const fieldName = event.target.getAttribute("name");
  //     const fieldValue = event.target.value;

  //     const newformData = { ...values };
  //     newformData[fieldName] = fieldValue;
  //     setValues(newformData);
  //   };
  const handleSubmit = (event) => {
    event.preventDefault();
    setValues(values);
    dataservice.insertEmployee(values);
    resetForm();
  };
  const addFormFields = () => {
    setValues([...values, { type: "", token: "" }]);
  };
  const removeFormFields = (i) => {
    const newFormValues = [...values];
    newFormValues.splice(i, 1);
    setValues(newFormValues);
  };
  const handleInputChange = (i, e) => {
    let newFormValues = [...values];
    newFormValues[i][e.target.name] = e.target.value;
    setValues(newFormValues);
  };
  return (
    <Form onSubmit={handleSubmit}>
      {values.map((element: any, index: any) => (
        <div key={index}>
          <Paper className={classes.pageConetent}>
            <table>
              <thead></thead>
              <tbody>
                <tr>
                  <td>Reason to withdraw</td>
                  <td>
                    <button>Type</button>
                    <input
                      data-testid="enter-type"
                      type="text"
                      name="type"
                      placeholder="Enter the type "
                      value={element.type}
                      onChange={(e) => handleInputChange(index, e)}
                    ></input>
                  </td>
                </tr>
                <tr>
                  <td>key value </td>
                  <td>
                    <button>Type</button>
                    <input
                      type="text"
                      name="token"
                      placeholder="Enter the token"
                      value={element.token}
                      onChange={(e) => handleInputChange(index, e)}
                    />
                  </td>
                </tr>
                {index ? <RemoveIcon onClick={removeFormFields} /> : null}
              </tbody>
            </table>
          </Paper>
        </div>
      ))}
      <div>
        <AddIcon fontSize="small" onClick={addFormFields} />
      </div>
      <button data-testid="save" type="submit" style={{ float: "right" }}>
        Save
      </button>
    </Form>
  );
};
export default WithdrawForm;

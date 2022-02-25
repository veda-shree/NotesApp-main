import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
// import DropdownButton from "react-bootstrap/DropdownButton";
// import Dropdown from "react-bootstrap/Dropdown";
import { Dropdown, Option } from "./components/Dropdown";

function AppDrop() {
  const [value, setValue] = useState("");
  const handleSelect = (e) => {
    console.log(e.target.value);
    setValue(e.target.value);
  };
  const handleClick = () => {
    window.location.assign("https://jsonplaceholder.typicode.com/posts");
  };
  return (
    <div className="App container">
      <Dropdown
        data-testid="testoptions"
        title="Select"
        buttonText="Proceed"
        id="dropdown-menu-align-right"
        onChange={handleSelect}
        onClick={handleClick}
      >
        <Option defaultValue="Search" id="s1" />
        <Option value="option-1">option-1</Option>
        <Option value="option-2">option-2</Option>
        <Option value="option-3">option 3</Option>
      </Dropdown>
      <p>You selected {value}</p>
    </div>
  );
}

export default AppDrop;

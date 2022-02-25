import React, { ChangeEvent } from "react";
// import { Dropdown, Option } from "./components/Dropdown";
import { useState } from "react";

interface Options {
  id: string;
  name: string;
}
// const Main = () => {
//   const [optionValue, setOptionValue] = useState("");
//   const handleSelect = (e: ChangeEvent<HTMLSelectElement>) => {
//     console.log(e.target.value);
//     setOptionValue(e.target.value);
//   };

//   return (
//     <div>
//       <br />
//       <br />
//       <br />
//       <Dropdown
//         formLabel="Choose the option"
//         buttonText="Proceed"
//         onChange={handleSelect}
//         action="https://jsonplaceholder.typicode.com/posts"
//       >
//         <Option selected value="Select" />
//         <Option value="Option 1" />
//         <Option value="Option 2" />
//         <Option value="Option 3" />
//       </Dropdown>
//       <p>You selected {optionValue} </p>
//     </div>
//   );
// };
const Main = () => {
  const handleClick = () => {
    window.location.assign("https://jsonplaceholder.typicode.com/posts");
  };
  const [options, setoptions] = useState<Options | null>(null);
  const onOptionsChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const id = e.target.value;
    const name = e.target.options[e.target.selectedIndex].innerHTML;
    if (id !== "-1") setoptions({ id: id, name: name });
    else setoptions(null);
  };
  const list = [
    { name: "option1", code: 1 },
    { name: "option2", code: 2 },
    { name: "option3", code: 3 },
    { name: "option4", code: 4 },
  ];
  return (
    <div style={{ padding: "50px" }}>
      <label>Select component</label>
      <br />
      <br />
      <select
        id="s1"
        name="select"
        data-testid="testoption"
        onChange={onOptionsChange}
      >
        <option>Select </option>
        {list.map((option) => (
          <option key={option.code} value={option.code}>
            {option.name}
          </option>
        ))}
        {/* <option value="-1">Select</option>
        <option value="0" data-testid="edit-data">
          option1
        </option>
        <option value="1">option2</option>
        <option value="2">option3</option>
        <option value="2">option4</option>
        <option value="2">option5</option> */}
      </select>
      <br />
      <br />
      <button id="move-page" onClick={handleClick}>
        Proceed
      </button>
      {options && (
        <div>
          {" "}
          Options ID:{options.id} Options Name:{options.name}
        </div>
      )}{" "}
      {!options && <div style={{ color: "Red" }}>No options selected</div>}
    </div>
  );
};

export default Main;

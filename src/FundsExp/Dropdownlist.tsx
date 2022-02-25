import React, { useState } from "react";
import { Container } from "react-bootstrap";
import "antd/dist/antd.css";
import "../App.css";
import Formdialog from "./Formdialog";
import MutateForm from "./MutateForm";
import TableResult from "./Table";
import WithdrawForm from "./withdrawn";

const Dropdownlist: React.FunctionComponent = () => {
  const [selectedOption, setSelectedOption] = useState<String>();
  const [openPopup, setOpenPopup] = useState(false);

  // This function is triggered when the select changes
  const selectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value;
    setSelectedOption(value);
  };

  const handleClick = () => {
    // window.location.assign("https://jsonplaceholder.typicode.com/posts");
    // let choosed = document.getElementById("change").nodeValue;
    switch (selectedOption) {
      case "Withdrawn":
        return setOpenPopup(true);

      case "Add Mutate":
        return setOpenPopup(true);
    }
  };
  return (
    <>
      <Container className="mt-5">
        <div className="app-container">
          <table>
            <thead>
              <tr>
                <th>
                  <label>Fund Search Result</label>
                  &nbsp;&nbsp;&nbsp;&nbsp;
                  <select
                    title="Select"
                    id="change"
                    data-testid="testoption"
                    onChange={selectChange}
                  >
                    <option defaultValue="Select">Select</option>
                    <option value="Withdrawn">Withdrawn</option>
                    <option value="Add Mutate">Add Mutate</option>
                    <option value="Deposit">Deposit</option>
                    <option value="Return">Return</option>
                  </select>
                  {/* {selectedOption && <h2>{selectedOption}</h2>} */}
                  &nbsp;&nbsp;&nbsp;&nbsp;
                  <button
                    data-testid="move-page"
                    data-toggle="modal"
                    data-target="#myModal"
                    onClick={handleClick}
                    // onClick={() => setOpenPopup(true)}
                  >
                    Proceed
                  </button>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <TableResult />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <Formdialog openPopup={openPopup} setOpenPopup={setOpenPopup}>
          <MutateForm />
        </Formdialog>
      </Container>
    </>

    // <div style={styles.container}>
    //   <select
    //     data-testid="testoption"
    //     onChange={selectChange}
    //     style={styles.select}
    //   >
    //     <option defaultValue="Select">Select</option>
    //     <option value="blue">Withdrawn</option>
    //     <option value="red">Add Mutate</option>
    //     <option value="green">Deposit</option>
    //     <option value="yellow">Return</option>
    //   </select>
    //   {selectedOption && <h2 style={styles.result}>{selectedOption}</h2>}
    // </div>
  );
};

export default Dropdownlist;

// const styles: { [name: string]: React.CSSProperties } = {
//   container: {
//     marginTop: 50,
//     display: "flex",
//     flexDirection: "column",
//     alignItems: "center",
//   },
//   select: {
//     padding: 5,
//     width: 200,
//   },
//   result: {
//     marginTop: 30,
//   },
// };

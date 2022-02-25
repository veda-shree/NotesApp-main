import React from "react";
import ReactDOM from "react-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import Main from "../Main";
import userEvent from "@testing-library/user-event";
// import { getFundStatusNames } from "../Main";

// const oldWindowLocation = window.location;
// beforeAll(() => {
//   delete window.location;
//   window.location = { ...oldWindowLocation, assign: jest.fn() };
// });
// afterAll(() => {
//   window.location = oldWindowLocation;
// });
describe("< Main page/>", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Main />, div);
  });

  it("should display the correct number of options", () => {
    render(<Main />);
    expect(screen.getAllByRole("option").length).toBe(5);
  });

  it("test OnChange is trigerred", () => {
    render(<Main />);
    const popover = screen.getByTestId("testoption");
    expect(popover).toBeInTheDocument();
    fireEvent.change(popover);
    const currentNode1 = screen.getByTestId("testoption");
    userEvent.type(currentNode1, "option1");
    expect(currentNode1).toBeInTheDocument();
    console.log(currentNode1);
  });

  it("check handleOnClick is called", () => {
    const handleClick = jest.fn();
    render(
      <button id="move-page" onClick={handleClick}>
        Proceed
      </button>
    );
    userEvent.click(screen.getByText(/proceed/i));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
  it("check proceed is called onClick", () => {
    render(<Main />);
    const popover = screen.getByText(/proceed/i);
    expect(popover).toBeInTheDocument();
    fireEvent.click(popover);
  });

  // it("calls expected URL", () => {
  //   window.location.assign("https://jsonplaceholder.typicode.com/posts");

  //   expect(window.location.assign).toHaveBeenCalledTimes(2);
  //   expect(window.location.assign).toHaveBeenCalledWith(
  //     "https://jsonplaceholder.typicode.com/posts"
  //   );
  // });
});

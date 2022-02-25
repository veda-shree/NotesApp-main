import React from "react";
import ReactDOM from "react-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import Dropdownlist from "./Dropdownlist";
import userEvent from "@testing-library/user-event";
import enzyme from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import { shallow, mount } from "enzyme";
import Formdialog from "./Formdialog";
import MutateForm from "./MutateForm";

enzyme.configure({ adapter: new Adapter() });
jest.spyOn(console, "error").mockImplementation(() => {});

describe("< Main page/>", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Dropdownlist />, div);
  });

  it("should display the correct number of options", () => {
    render(<Dropdownlist />);
    expect(screen.getAllByRole("option").length).toBe(5);
  });

  it("test OnChange is trigerred", () => {
    render(<Dropdownlist />);
    const popover = screen.getByTestId("testoption");
    expect(popover).toBeInTheDocument();
    fireEvent.change(popover);
    const currentNode1 = screen.getByTestId("testoption");
    userEvent.type(currentNode1, "option1");
    expect(currentNode1).toBeInTheDocument();
  });
  it("check proceed is called onClick", () => {
    render(<Dropdownlist />);
    const popover = screen.getByText(/proceed/i);
    expect(popover).toBeInTheDocument();
    fireEvent.click(popover);
  });

  it("should test handleSubmit", () => {
    render(<MutateForm />);
    const currentNode = screen.getByPlaceholderText("Enter the type");
    userEvent.type(currentNode, "Test");
    const currentNode1 = screen.getByPlaceholderText("Enter the token");
    userEvent.type(currentNode1, "test1");
    const currentNode2 = screen.getByText("Save");
    fireEvent.click(currentNode2);
  });

  // it("popover respond to hover", () => {
  //   render(<Formdialog />);
  //   const nullPopover = screen.queryByTestId("enter-type");
  //   expect(nullPopover).not.toBeInTheDocument();
  //   const currentNode = screen.getByTestId("move-page");
  //   userEvent.hover(currentNode);
  //   fireEvent.click(currentNode);
  //   const popover = screen.getByTestId("enter-type");
  //   expect(popover).toBeInTheDocument();
  //   fireEvent.change(popover);
  //   const currentNode1 = screen.getByTestId("enter-type");
  //   userEvent.type(currentNode1, "Withdrawn");
  //   expect(currentNode1).toBeInTheDocument();
  // });
});

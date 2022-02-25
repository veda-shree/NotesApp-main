import React from "react";
import ReactDOM from "react-dom";
import { getFundStatusNames } from "./Fundsarray function";

describe("<Fundsarrayfn/>", () => {
  it("calls funds", () => {
    const result = getFundStatusNames(["Return", "Frozen"]);
    expect(result).toEqual(["Return", "Frozen"]);
    console.log(result);
  });
});

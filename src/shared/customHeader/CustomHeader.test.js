import React from "react";
import { shallow } from "enzyme";
import CustomHeader from "./CustomHeader";

describe("Default render test", () => {
  it("renders without crashing", () => {
    shallow(<CustomHeader />);
  });
});

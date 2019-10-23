import React from "react";
import { shallow } from "enzyme";
import CustomModal from "./CustomModal";

describe("Default render test", () => {
  it("renders without crashing", () => {
    shallow(<CustomModal />);
  });
});

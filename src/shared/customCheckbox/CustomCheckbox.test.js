import React from "react";
import { shallow } from "enzyme";
import CustomCheckbox from "./CustomCheckbox";

describe("Default render test", () => {
  it("renders without crashing", () => {
    shallow(<CustomCheckbox />);
  });
});

describe("Test onChange", () => {
  it("Test click event", () => {
    const mockCallBack = jest.fn();
    const checkbox = shallow(<CustomCheckbox onChange={mockCallBack} />);
    checkbox.simulate("change");
    expect(mockCallBack.mock.calls.length).toEqual(1);
  });
});

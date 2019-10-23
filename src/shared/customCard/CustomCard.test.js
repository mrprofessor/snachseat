import React from "react";
import { shallow } from "enzyme";
import CustomCard from "./CustomCard";

describe("Default render test", () => {
  it("renders without crashing", () => {
    shallow(<CustomCard />);
  });
});

describe("Test onChange", () => {
  it("Test click event", () => {
    const mockCallBack = jest.fn();
    const checkbox = shallow(<CustomCard onChange={mockCallBack} />);
    checkbox.simulate("change");
    expect(mockCallBack.mock.calls.length).toEqual(1);
  });
});

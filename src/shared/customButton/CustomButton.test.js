import React from "react";
import { shallow } from "enzyme";
import CustomButton from "./CustomButton";

describe("Default render test", () => {
  it("renders without crashing", () => {
    shallow(<CustomButton />);
  });
});

describe("Test onClick", () => {
  it("Test click event", () => {
    const mockCallBack = jest.fn();
    const button = shallow(<CustomButton onClick={mockCallBack} />);
    button.simulate("click");
    expect(mockCallBack.mock.calls.length).toEqual(1);
  });
});

describe("Test Button label", () => {
  it("Renders button label", () => {
    const button = shallow(<CustomButton label={"mockButton"} />);
    const label = button.text();
    expect(label).toEqual("mockButton");
  });
});

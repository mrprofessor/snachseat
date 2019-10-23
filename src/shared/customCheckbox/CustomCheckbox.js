import React from "react";
import Form from "react-bootstrap/Form";

const CustomCheckbox = props => (
  <Form.Check
    inline={props.inline}
    type="checkbox"
    label={props.label}
    key={props.key}
    disabled={props.disabled}
    checked={props.checked}
    onChange={props.onChange}
  />
);

export default CustomCheckbox;

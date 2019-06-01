import React from "react";
import Card from "react-bootstrap/Card";
import "./customCard.scss";

const CustomCard = ({ children, title, footerContent, selectable }) => {
  const classNames = selectable ? "customCard" : "customCard unClickable";

  return (
    <Card className={classNames}>
      <Card.Header as="h5" className="text-center">
        {title}
      </Card.Header>
      <Card.Body>{children}</Card.Body>
      <Card.Footer className="text-muted">{footerContent}</Card.Footer>
    </Card>
  );
};

export default CustomCard;

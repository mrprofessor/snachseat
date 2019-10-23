import React from "react";
import CustomCard from "../customCard/CustomCard";
import CustomButton from "../customButton/CustomButton";
import Customcheckbox from "../customCheckbox/CustomCheckbox";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import { getSelectedSeats } from "../../pages/home/utils";

const CustomSeats = ({
  seats,
  selectable,
  footerContent,
  show,
  onSeatSelection,
  onSelectedSeatSubmit,
  onShowReceiptView,
  ...props
}) => {
  const handleSubmit = () => {
    onSelectedSeatSubmit(show);
    onShowReceiptView(getSelectedSeats(show, seats));
  };

  const handleSeatSelect = (seatId, showId) => {
    onSeatSelection(seatId, showId);
  };

  return (
    <CustomCard
      title={show}
      footerContent={footerContent}
      selectable={selectable}
      {...props}
    >
      {/* FIXME */}
      <Form>
        <div>
          {seats.map(seat => {
            return (
              <Customcheckbox
                inline
                type="checkbox"
                label={seat.seatId}
                key={seat.seatId}
                disabled={!seat.isAvailable}
                checked={seat.selected || !seat.isAvailable || false}
                onChange={() => handleSeatSelect(seat.seatId, show)}
              />
            );
          })}
        </div>

        {selectable && (
          <Row
            style={{ paddingTop: "2rem" }}
            className="justify-content-center"
          >
            <CustomButton
              variant="primary"
              label="Submit"
              onClick={() => handleSubmit()}
            />
          </Row>
        )}
      </Form>
    </CustomCard>
  );
};

export default CustomSeats;

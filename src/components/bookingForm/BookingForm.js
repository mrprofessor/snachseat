import React from "react";
import CustomModal from "../../shared/customModal/CustomModal";
import CustomSeats from "../../shared/customSeats/CustomSeats";
import { getTotalAvailableSeatNumber } from "../../pages/home/utils";
import ReceiptCard from "../receiptCard/ReceiptCard";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";

const BookingForm = ({
  showBookModal,
  onModalClose,
  seatsMap,
  showReceipt,
  selectedSeats,
  selectedShow,
  onSeatSelection,
  onSelectedSeatSubmit,
  onShowReceiptView,
  onShowSelectChange
}) => {
  return (
    <CustomModal
      showModal={showBookModal}
      onClose={onModalClose}
      title="Snatch your seat"
      showSaveButton={false}
    >
      {!showReceipt ? (
        <Form.Group controlId="exampleForm.ControlSelect1">
          <Form.Control
            as="select"
            onChange={e => onShowSelectChange(e.target.value)}
          >
            {Object.keys(seatsMap).map(show => (
              <option key={show} value={show}>
                {show}
              </option>
            ))}
          </Form.Control>
          <Row
            style={{ paddingTop: "2rem" }}
            className="justify-content-center"
          >
            {selectedShow && (
              <CustomSeats
                seats={seatsMap[selectedShow]}
                title={selectedShow}
                selectable
                show={selectedShow}
                onSeatSelection={onSeatSelection}
                onSelectedSeatSubmit={onSelectedSeatSubmit}
                footerContent={`Available Seats: ${getTotalAvailableSeatNumber(
                  seatsMap,
                  selectedShow
                )}`}
                onShowReceiptView={onShowReceiptView}
                border="info"
              />
            )}
          </Row>
        </Form.Group>
      ) : (
        <Row style={{ paddingTop: "2rem" }} className="justify-content-center">
          <ReceiptCard seats={selectedSeats} title={"Invoice"} />
        </Row>
      )}
    </CustomModal>
  );
};

export default BookingForm;

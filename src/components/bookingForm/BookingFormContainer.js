import React, { useState } from "react";
import BookingForm from "./BookingForm";

const BookingFormContainer = ({
  showBookModal,
  onCloseBookModal,
  seatsMap,
  onSeatSelection,
  onReceiptClose,
  onSelectedSeatSubmit
}) => {
  const [selectedShow, setSelectedShow] = useState(Object.keys(seatsMap)[0]);
  const [showReceipt, setShowReceipt] = useState(false);
  const [selectedSeats, setSelectedSeats] = useState({});

  const handleShowSelectChange = value => {
    // Set current show
    setSelectedShow(value);
    // Clear selected seats on show selection change
    onReceiptClose();
  };

  const handleShowReceiptView = seats => {
    // Set selected sets
    setSelectedSeats(seats);
    setShowReceipt(!showReceipt);
  };

  const handleCloseReceiptView = () => {
    setSelectedSeats({});
    setShowReceipt(false);
  };

  const resetSelectedShow = () => {
    setSelectedShow(Object.keys(seatsMap)[0]);
  };

  const handleModalClose = () => {
    onReceiptClose();
    handleCloseReceiptView();
    resetSelectedShow();
    onCloseBookModal();
  };

  return (
    <BookingForm
      showBookModal={showBookModal}
      onModalClose={handleModalClose}
      seatsMap={seatsMap}
      onSeatSelection={onSeatSelection}
      onSelectedSeatSubmit={onSelectedSeatSubmit}
      showReceipt={showReceipt}
      selectedShow={selectedShow}
      selectedSeats={selectedSeats}
      onShowReceiptView={handleShowReceiptView}
      onShowSelectChange={handleShowSelectChange}
    />
  );
};

export default BookingFormContainer;

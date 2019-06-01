import React, { useState } from "react";
import Home from "./Home";
import { buildSeatsMap } from "./utils";
import { seatsDetail } from "../../data/Data";

// State container for the application
const HomeContainer = () => {
  const [showBookModal, setShowBookModal] = useState(false);
  const [seatsMap, setSeatsMap] = useState(buildSeatsMap(seatsDetail));

  const handleOpen = () => {
    setShowBookModal(true);
  };

  const handleBookModalClose = () => {
    setShowBookModal(false);
  };

  const handleBookButtonClick = () => {
    handleOpen(true);
  };

  const handleSeatSelection = (seatId, showId) => {
    const tempSeatsMap = { ...seatsMap };

    const selectedSeatAvailability =
      tempSeatsMap[showId].find(seat => seat.seatId === seatId).selected ||
      false;
    // Set value
    tempSeatsMap[showId].find(
      seat => seat.seatId === seatId
    ).selected = !selectedSeatAvailability;
    setSeatsMap(tempSeatsMap);
  };

  const handleSelectedSeatSubmit = showId => {
    const tempSeatsMap = { ...seatsMap };
    // Make the selected seat unavailable
    tempSeatsMap[showId].forEach(seat => {
      if (seat.selected) seat.isAvailable = !seat.selected;
    });
    setSeatsMap(tempSeatsMap);
  };

  const handleReceiptClose = () => {
    const tempSeatsMap = { ...seatsMap };
    // Remove all selected seats
    Object.keys(tempSeatsMap).forEach(show =>
      tempSeatsMap[show].forEach(seat => {
        if (seat.selected) seat.selected = false;
      })
    );
    setSeatsMap(tempSeatsMap);
  };

  return (
    <Home
      onBookButtonClick={handleBookButtonClick}
      //onInvoiceButtonClick={handleInvoiceButtonClick}
      seatsMap={seatsMap}
      showBookModal={showBookModal}
      onCloseBookModal={handleBookModalClose}
      onSeatSelection={handleSeatSelection}
      onSelectedSeatSubmit={handleSelectedSeatSubmit}
      onReceiptClose={handleReceiptClose}
    />
  );
};

export default HomeContainer;

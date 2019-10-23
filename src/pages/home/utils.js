export const buildSeatsMap = seatsDetail => {
  const seatsMap = {};
  for (let show of Object.keys(seatsDetail)) {
    seatsMap[show] = seatsDetail[show].map(seat => {
      return { seatId: seat, isAvailable: true };
    });
  }
  return seatsMap;
};

export const getTotalAvailableSeatNumber = (seatsMap, showId) => {
  return seatsMap[showId].filter(seat => seat.isAvailable === true).length;
};

export const getSelectedSeats = (showId, seats) => {
  const selectedSeats = seats
    .filter(seat => seat.selected === true)
    .map(seat => seat.seatId);

  return { [showId]: selectedSeats };
};

export const getSoldSeats = seatsMap => {
  const soldSeats = {};
  Object.keys(seatsMap).forEach(showId => {
    soldSeats[showId] = seatsMap[showId]
      .filter(seat => !seat.isAvailable)
      .map(seat => seat.seatId);
  });

  return soldSeats;
};

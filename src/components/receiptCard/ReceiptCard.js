import React from "react";
import CustomCard from "../../shared/customCard/CustomCard";
import CustomTable from "../../shared/customTable/CustomTable";
import { Invoice } from "../../logic/CalculateInvoice";
import Alert from "react-bootstrap/Alert";

const CustomReceipt = ({ seats, title, type = "individual" }) => {
  const showId = Object.keys(seats).length === 1 && Object.keys(seats)[0];
  const bookedSeats = seats[showId];

  let newInVoice = new Invoice(seats);
  const rowData = {
    SubTotal: newInVoice.subTotal,
    "Service Tax @14%": newInVoice.serviceTax,
    "Swachh Bharat @0.5%": newInVoice.cess,
    "Krishi Kalyan @0.5%": newInVoice.cess,
    Total: newInVoice.total
  };

  const showAlert = () => {
    let component;
    if (type === "individual") {
      if (bookedSeats.length > 0) {
        component = (
          <Alert variant={"success"}>
            Successfully booked : seats {bookedSeats.join(", ")} for {showId}
          </Alert>
        );
      } else {
        component = <Alert variant={"warning"}>No seats are selected.</Alert>;
      }
    }

    if (type === "theater") {
      const bookedSeats = newInVoice.allSelectedSeats;
      if (bookedSeats.length <= 0) {
        component = (
          <Alert variant={"warning"}>No seats are sold yet. Goodluck!</Alert>
        );
      }
    }
    return component;
  };

  return (
    <CustomCard title={title}>
      {showAlert()}
      <CustomTable rowData={rowData} />
    </CustomCard>
  );
};

export default CustomReceipt;

//{bookedSeats.length > 0 && type === "individual" ? (
//<Alert variant={"success"}>
//Successfully booked : seats {bookedSeats.join(", ")} for {showId}
//</Alert>
//) : (
//<Alert variant={"warning"}>No seats are selected.</Alert>
//)}

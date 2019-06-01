import React from "react";
import CustomCard from "../../shared/customCard/CustomCard";
import CustomTable from "../../shared/customTable/CustomTable";
import { Invoice } from "../../logic/CalculateInvoice";
import Alert from "react-bootstrap/Alert";

const CustomReceipt = ({ seats, title, type = "individual" }) => {
  const showId = Object.keys(seats)[0];
  const bookedSeats = seats[showId];

  let newInVoice = new Invoice(seats);
  const rowData = {
    SubTotal: newInVoice.subTotal,
    "Service Tax @14%": newInVoice.serviceTax,
    "Swachh Bharat @0.5%": newInVoice.cess,
    "Krishi Kalyan @0.5%": newInVoice.cess,
    Total: newInVoice.total
  };

  return (
    <CustomCard title={title}>
      {bookedSeats.length > 0 && type === "individual" ? (
        <Alert variant={"success"}>
          Successfully booked : seats {bookedSeats.join(", ")} for {showId}
        </Alert>
      ) : (
        <Alert variant={"warning"}>No seats are selected.</Alert>
      )}
      <CustomTable rowData={rowData} />
    </CustomCard>
  );
};

export default CustomReceipt;

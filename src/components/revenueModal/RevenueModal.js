import React from "react";
import CustomModal from "../../shared/customModal/CustomModal";
import ReceiptCard from "../receiptCard/ReceiptCard";
import { getSoldSeats } from "../../pages/home/utils";
import Row from "react-bootstrap/Row";

const RevenueModal = ({ showRevenueModal, onCloseRevenueModal, seatsMap }) => {
  return (
    <CustomModal
      showModal={showRevenueModal}
      onClose={onCloseRevenueModal}
      title="Snatch your seat"
      showSaveButton={false}
    >
      <Row style={{ paddingTop: "2rem" }} className="justify-content-center">
        <ReceiptCard
          seats={getSoldSeats(seatsMap)}
          title={"Theater Revenue"}
          type="theater"
        />
      </Row>
    </CustomModal>
  );
};

export default RevenueModal;

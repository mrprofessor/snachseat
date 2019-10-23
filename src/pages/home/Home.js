import React from "react";
import "./Home.scss";
import CustomButton from "../../shared/customButton/CustomButton";
import CustomHeader from "../../shared/customHeader/CustomHeader";
import CustomSeats from "../../shared/customSeats/CustomSeats";
import BookingFormContainer from "../../components/bookingForm/BookingFormContainer";
import RevenueModal from "../../components/revenueModal/RevenueModal";
import { getTotalAvailableSeatNumber } from "./utils";
import { Col, Container, Row } from "react-bootstrap";

const Home = ({
  onBookButtonClick,
  onRevenueButtonClick,
  onCloseBookModal,
  showRevenueModal,
  showBookModal,
  onCloseRevenueModal,
  seatsMap,
  onSeatSelection,
  onReceiptClose,
  onSelectedSeatSubmit
}) => {
  return (
    <Container>
      <CustomHeader />

      <Row className="justify-content-sm-center">
        {Object.keys(seatsMap).map(show => (
          <div className="mx-auto unSelectable" key={show}>
            <Col md="auto" style={{ marginBottom: "1rem" }}>
              <CustomSeats
                seats={seatsMap[show]}
                show={show}
                selectable={false}
                footerContent={`Available Seats: ${getTotalAvailableSeatNumber(
                  seatsMap,
                  show
                )}`}
                border="info"
                bg="light"
              />
            </Col>
          </div>
        ))}
      </Row>

      <Row className="justify-content-md-center">
        <Col xs md="2">
          <CustomButton
            label={"Book a show"}
            onClick={onBookButtonClick}
            variant={"outline-success"}
            size={"md"}
          />
        </Col>
        <Col xs md="2">
          <CustomButton
            label={"Total revenue"}
            onClick={onRevenueButtonClick}
            variant={"outline-info"}
            size={"md"}
          />
        </Col>
      </Row>

      {/* Modals */}
      <BookingFormContainer
        showBookModal={showBookModal}
        onCloseBookModal={onCloseBookModal}
        seatsMap={seatsMap}
        onSeatSelection={onSeatSelection}
        onSelectedSeatSubmit={onSelectedSeatSubmit}
        onReceiptClose={onReceiptClose}
      />

      <RevenueModal
        showRevenueModal={showRevenueModal}
        onCloseRevenueModal={onCloseRevenueModal}
        seatsMap={seatsMap}
      />
      {/* ^^^ Modals ^^^ */}
    </Container>
  );
};

export default Home;

import React from "react";
import "./Home.scss";
import CustomButton from "../../shared/customButton/CustomButton";
import CustomHeader from "../../shared/customHeader/CustomHeader";
import CustomCard from "../../shared/customCard/CustomCard";
import CustomSeats from "../../shared/customSeats/CustomSeats";
import BookingFormContainer from "../../components/bookingForm/BookingFormContainer";
import { getTotalAvailableSeatNumber } from "./utils";
import { Col, Container, Row } from "react-bootstrap";

const Home = ({
  onBookButtonClick,
  onInvoiceButtonClick,
  onCloseBookModal,
  showBookModal,
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
            onClick={onInvoiceButtonClick}
            variant={"outline-info"}
            size={"md"}
          />
        </Col>
      </Row>

      <BookingFormContainer
        showBookModal={showBookModal}
        onCloseBookModal={onCloseBookModal}
        seatsMap={seatsMap}
        onSeatSelection={onSeatSelection}
        onSelectedSeatSubmit={onSelectedSeatSubmit}
        onReceiptClose={onReceiptClose}
      />
    </Container>
  );
};

export default Home;

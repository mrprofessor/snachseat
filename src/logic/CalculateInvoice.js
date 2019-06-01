import { costDetail } from "../data/Data";

export class Invoice {
  constructor(seats) {
    this.seats = seats;
  }

  get allSelectedSeats() {
    let allSeats = [];
    Object.keys(this.seats).forEach(
      showId => (allSeats = [...allSeats, ...this.seats[showId]])
    );
    return allSeats;
  }

  get subTotal() {
    let subTotal = 0;
    this.allSelectedSeats.forEach(seat => {
      Object.keys(costDetail).forEach(seatType => {
        if (seat.startsWith(seatType)) {
          subTotal += costDetail[seatType];
        }
      });
    });
    return subTotal;
  }

  get serviceTax() {
    return this.calculateTax(this.subTotal, 14);
  }

  get cess() {
    return this.calculateTax(this.subTotal, 0.5);
  }

  get total() {
    return this.subTotal + this.serviceTax + this.cess * 2;
  }

  calculateTax(amount, percentage) {
    return Number(((amount / 100) * percentage).toFixed(2));
  }
}

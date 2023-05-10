import React,{useState} from "react";
import "./ticketbooking.css";

function TicketBooking() {
  const [formData, setFormData] =useState({
    name: "",
    email: "",
  });

  const movieName = localStorage.getItem("movieName");

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const { name, email } = formData;
    const bookingDetails = { name, email, movieName };
    localStorage.setItem("bookingDetails", JSON.stringify(bookingDetails));
    setFormData({ name: "", email: "" });
    alert("Form submitted successfully!");
  };

  return (
    <div className="ticket-booking">
      <h1>Book Ticket for {movieName}</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            name="name"
            id="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your name"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            name="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
            required
          />
        </div>

        <button type="submit" className="submit-btn" onClick={handleSubmit}>
          Submit
        </button>
      </form>
    </div>
  );
}

export default TicketBooking;


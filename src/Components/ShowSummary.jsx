import React from "react";
import { useParams } from "react-router-dom";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./showsummary.css";

function ShowSummary() {
  const { id } = useParams();

  const [show, setShow] = React.useState(null);

  React.useEffect(() => {
    fetch(`https://api.tvmaze.com/shows/${id}`)
      .then((response) => response.json())
      .then((data) => 
      
      setShow(data));
  }, [id]);

  const handleBookTicket = () => {
    console.log(show.name)
    localStorage.setItem("movieName", show.name);
  };

  return (
    <div className="show-summary">
      {show ? (
        <Card className="mx-auto my-5" style={{ width: "50%" }}>
          <Card.Img variant="top" src={show.image?.medium} alt={show.name} />
          <Card.Body>
            <Card.Title>{show.name}</Card.Title>
            <Card.Text>{show.summary}</Card.Text>
            <Link to="/booking">
              <Button variant="primary" onClick={handleBookTicket} className="booking-button">
                Book Ticket
              </Button>
            </Link>
          </Card.Body>
        </Card>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
}

export default ShowSummary;

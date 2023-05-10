import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import ShowList from "./Components/ShowList";
import ShowSummary from "./Components/ShowSummary";
import TicketBooking from "./Components/TicketBooking";

function App() {
  const [shows, setShows] = useState([]);

  useEffect(() => {
    fetch("https://api.tvmaze.com/search/shows?q=all")
      .then((response) => response.json())
      .then((data) => {
        setShows(data);
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ShowList shows={shows} />} />
          <Route path="/summary/:id" element={<ShowSummary/>}/>
          <Route path="/booking" element={<TicketBooking/>}/>

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

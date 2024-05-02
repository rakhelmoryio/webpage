import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import BookingForm from "./pages/BookingForm";
import BookingData from "./pages/BookingData";
import BookingUpdate from "./pages/BookingUpdate";
const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/update" element={<BookingUpdate/>} />
          <Route path="/booking" element={<BookingForm/>} />
          <Route path="/" element={<BookingData/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;

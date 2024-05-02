import React, { useState } from "react";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";

const BookingUpdate = () => {
  const [bookingId, setBookingId] = useState("");
  const [bookingData, setBookingData] = useState([]);
  const [updatedData, setUpdatedData] = useState({});

  const handleSearch = async () => {
    try {
      const response = await axios.get(
        `https://server-1-wb1s.onrender.com/auth12/update/${bookingId}`
      );
      setBookingData(response.data);
      console.log(response.data);
      // Initialize updatedData state with fetched data
      setUpdatedData(response.data);
    } catch (error) {
      toast.error("Error fetching booking data:",error);
    }
  };

  const handleInputChange = (e) => {
    setUpdatedData({
      ...updatedData,
      [e.target.name]: e.target.value,
    });
  };

  const handleUpdate = async (e) => {
    try {
      await axios.put(`https://server-1-wb1s.onrender.com/auth12/update/${bookingId}`, updatedData);
      toast.success("Booking ID updated successfully");
      // Optionally, you can fetch the updated data again to reflect changes in the UI
      handleSearch();
    } catch (error) {
      toast.error("Error updating booking ID",error);
    }
  };

  return (
    <div className="w-full h-screen bg-black text-slate-50">
      <div className="flex flex-col items-center justify-center pt-16">
       <h2>Enter exiting booking Id for Update only booking status</h2>
      <input
        className="w-64 rounded-md pb-4 mb-4 mt-4 text-black text-center"
        type="text"
        value={bookingId}
        onChange={(e) => setBookingId(e.target.value)}
      />
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={handleSearch}>Search</button>
      </div>
      {bookingData && (
        <div className="bg-slate-600 mt-32 flex flex-col gap-3 items-center justify-center" >
          <div className="flex justify-between px-8 font-bold respon ">
            <label className="text-lg" htmlFor="Bookingname">
              Booking Status:
            </label>
            <select
              onChange={handleInputChange}
              className="p-2 rounded-sm text-slate-950"
              name="Booking_Status"
              id="Bookingname"
            >
              <option className="text-red-700">{bookingData.Booking_Status}</option>
              <option value="Cancelled">Cancelled</option>
              <option value="pending">Pending</option>
              <option value="Comfirmed">Comfirmed</option>
            </select>
          </div>
          <button className="bg-blue-500 hover:bg-blue-700 w-24 text-white font-bold py-2 px-4 rounded" onClick={handleUpdate}>Update</button>
        </div>
      )}
        <Toaster position="top-right" reverseOrder={false} />
    </div>
  );
};

export default BookingUpdate;

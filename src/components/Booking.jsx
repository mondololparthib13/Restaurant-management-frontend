import { useState } from "react";
import "./css/booking.css";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Booking = (props) => {
 
  const [category, setCategory] = useState("");
  const [item, setItem] = useState("");
  const [eta, setEta] = useState("");
  const navigate = useNavigate();

  const Submit = (e) => {
    e.preventDefault();
    axios
      .post("https://restro-dine-backend.onrender.com/booking", { category, item, eta })
      .then((result) => {
        navigate("/dashboard");
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <Navbar />
      <Sidebar />
      <div className="booking_div">
        <div className="menu_details">Menu Details</div>
        <div >
          
          <form onSubmit={Submit} className="booking">
          <div className="add_menu">Add Your Menu</div>
            <div className="both">
              
              <div className="common2">Category</div>
              <div>
                <select
                  name="items"
                  id=""
                  className="common"
                  onChange={(e) => {
                    setCategory(e.target.value);
                  }}
                >
                  <option value="Select a Category">Select a Category</option>
                  <option value="Non Veg Starter">Non Veg Starter</option>
                  <option value="Soup">Soup</option>
                  <option value="Main Course">Main Course</option>
                  <option value="Veg Starter">Veg Starter</option>
                </select>
              </div>
            </div>

            <div className="both">
              <div className="common2">Item Name</div>
              <div>
                <input
                  type="text"
                  placeholder="Enter Item Name"
                  className="common"
                  onChange={(e) => {
                    setItem(e.target.value);
                  }}
                />
              </div>
            </div>
            <div className="both">
              <div className="common2">ETA</div>
              <div>
                <input
                  type="text"
                  placeholder="Enter ETA"
                  className="common"
                  onChange={(e) => {
                    setEta(e.target.value);
                  }}
                />
              </div>
            </div>

            <div>
              <button onClick={()=>alert("Item Added")}className="btn">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Booking;

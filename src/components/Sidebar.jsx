import "./css/sidebar.css";
import { useState } from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const [present, setPresent] = useState(1);
  const [yes, setYes] = useState(false)
  return (
    <>
      {yes&&<div className="sidebar_div">
      <Link to="/login"> <div className="restrodine">
          RestroDineTech
        </div></Link> 
        <div className="ele_div">
          <Link to="/dashboard">
            <div className="component">
              <div>{present == 1 && <img src="../crt-tab.png" alt="" />}</div>
              <div className="wid"
                onClick={() => {
                  setPresent(1);
                  setYes(false);
                }}
              >
                <img
                  className="dashboard corsr1"
                  src="../Dash.png"
                  alt="dashboard"
                />
                <span className="dsh">Dashboard</span>
              </div>
            </div>
          </Link>
          <Link to="/booking">
            <div className="component">
              <div>{present == 2 && <img src="../crt-tab.png" alt="" />}</div>
              <div className="wid"
                onClick={() => {
                  setPresent(2);
                  setYes(false);
                }}
              >
                <img className="menu corsr2" src="../mnu.png" alt="menu" />
                <span className="dsh">Add Menu</span>
              </div>
            </div>
          </Link>
          <div className="component">
            <div>{present == 3 && <img src="../crt-tab.png" alt="" />}</div>
            <div className="wid"
              onClick={() => {
                setPresent(3);
                setYes(false);
              }}
            >
              <img className="order corsr3" src="../ordr.png" alt="order" />
              <span className="dsh">Orders</span>
            </div>
          </div>
          <div className="component">
            <div>{present == 4 && <img src="../crt-tab.png" alt="" />}</div>
            <div className="wid"
              onClick={() => {
                setPresent(4);
                setYes(false);
              }}
            >
              <img
                className="service corsr4"
                src="../drnk.png"
                alt="service"
              />
              <span className="dsh">Service Request</span>
            </div>
          </div>
          
        </div>
      </div>}
      {!yes&&<div className="brgr"><img className="burgr_menu" onClick={()=>{setYes(true)}} src="../burger-menu.png" alt="menu" /></div>}
    </>
  );
};

export default Sidebar;

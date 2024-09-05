import { useState ,useEffect} from "react";
import "./css/dashboard.css";
import Booking from "./Booking";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import { Link } from 'react-router-dom'
import axios from "axios";

const Dashboard = () => {

  const items = [
    {
      value1: "Category",
      value2: "Enter Category",
    },
    {
      value1: "Item Name",
      value2: "Enter Item Name",
    },
    {
      value1: "ETA",
      value2: "ETA",
    },
  ];

  const [list, setList] = useState([]);
  useEffect(()=>{
    axios.get("https://restro-dine-backend.onrender.com/")
    .then(result=>setList(result.data))
    .catch(err=>console.log(err))
  },[])

  const handleDelete = (id) =>{
    axios.delete('https://restro-dine-backend.onrender.com/deleteItem/'+id)
    .then((res)=>{console.log(res);
      axios.get("https://restro-dine-backend.onrender.com/")
      .then(result=>setList(result.data))
      .catch(err=>console.log(err));})
    .catch(err=>console.log(err));
  }


  return (
    <>
    <Navbar/>
    <Sidebar/>
      <div className="dashboard_div">
        <div className="menu_dashboard">Menu Dashboard</div>
        <div className="items">
          {items.map((item) => (
            <div className="under_item">
              <div className="item">{item.value1}</div>
              <div>
                <input className="input" type="text" placeholder={`${item.value2}`} />
              </div>
            </div>
          ))}
        </div>
        <div className="both_div">
          <div className="color_div">
            <span className="category">CATEGORY</span>
            <span className="item_name">ITEM NAME</span>
            <span className="eta">ETA</span>
          </div>
          {list.map((i)=><div className="second_div">
            
            <div className="spans"><div className="itm sapn1">{i.category}</div>
            <div className="itm span2">{i.item}</div>
            <div className="itm span3">{i.eta}</div></div>
            <button onClick={(e)=>{handleDelete(i._id);alert(`${i.item} has been deleted`)}} className="button"><img src="../Delete.png" alt="delete" className="delete"/></button>
          </div>)}
        </div>
      </div>
    </>
  );
};

export default Dashboard;

// onClick={()=>{const newlist = list.filter((it)=>it.value2!==i.value2);
// setList(newlist);}}
import React, { useState } from "react";
import './featured.scss';
import{ useNavigate} from 'react-router-dom';

function Featured() {
  const [input,setinput]=useState("");
  const navigate=useNavigate();
  const handlesubmit=()=>{
    navigate(`gigs?search=${input}`);
  }
    return (
     [ 
      <div className="featured">
        <div className="container">
          <div className="left">
            <h1>
              Find the perfect <span>freelance</span> <br></br>
              <span>services</span> for your business
            </h1>
          </div>
        </div>
      </div>]
    );
  }
export default Featured;
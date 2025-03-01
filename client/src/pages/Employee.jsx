import React, { useState } from "react";
import { Link } from "react-router-dom";
import Cat from "../img/fff.jpg";
import Mark from "../components/Mark";

export default function Schedul() {

    const [showCheckoutPopup, setShowCheckoutPopup] = useState(false);













    const handleClosePopup = () => {
        setShowCheckoutPopup(false);
      };

  return (
    <div className="h-[600px] relative"> {/* Added relative class */}
        <img src={Cat} alt="" className="w-full h-full object-cover" /> {/* Added object-cover class */}
        
       


      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex justify-center items-center gap-14 mt-[-100px]">
     
        
          <button  onClick={() => setShowCheckoutPopup(true)}  className=" hover:text-black bg-opacity-50 border border-white text-3xl shadow-lg shadow-black   text-white font-serif py-8 px-10 rounded-full">Mark Attendance</button> 
        
          <div>
      <Link to="/empview">
          <button  className="hover:text-black bg-opacity-50 border border-white text-3xl shadow-lg shadow-black   text-white font-serif py-8 px-10 rounded-full">Absence</button> 
          </Link>

      </div>
          
        
      </div>
      
     
      {showCheckoutPopup && <Mark onClose={handleClosePopup} />}
    </div>
  );
}

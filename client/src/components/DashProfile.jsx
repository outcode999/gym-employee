import "react-circular-progressbar/dist/styles.css";
import { signoutSuccess } from "../redux/user/userSilce";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import Dash from "./sideDash";
import Cat from "../img/fff.jpg";
import React, { useState, useEffect } from 'react';


export default function DashProfile() {


  const [Empp, setEmpp] = useState([]);
  const [ABsnt, setABsnt] = useState([]);

  useEffect(() => {
    const fetchEmploy = async () => {
      try {
        const res = await fetch(`/api/employe/getabsent`);
        const data = await res.json();
        console.log(data);

        if (res.ok) {
          setABsnt(data.ABsnt);
        }
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchEmploy();
  }, []);


  useEffect(() => {
    const fetchEmploy = async () => {
      try {
        const res = await fetch(`/api/employe/getEmploye`);
        const data = await res.json();
        console.log(data);

        if (res.ok) {
          setEmpp(data.Empp);
        }
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchEmploy();
  }, []);




  
  return (
    <div>
      <div className="h-[600px] relative"> {/* Added relative class */}
        <img src={Cat} alt="" className="w-full h-full object-cover" /> 
        <div className="absolute top-0 left-0">   {/* Positioned Dash component here */}
              <Dash />
            </div> {/* Added object-cover class */}
        
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex justify-center items-center gap-14 mt-5">
          <div className="max-w-lg mx-auto p-3 w-full relative"> {/* Added relative class */}
            
              
              <div className="flex items-center justify-center gap-4 mt-[-250px]">
              <h1 className="my-4 text-center font-serif text-6xl  text-slate-100 shadow-lg shadow-black ">Manage </h1>
              <h1 className="my-4 text-center font-serif text-6xl  text-slate-100 shadow-lg shadow-black">Employee </h1> 

              </div>
            
      
            <div className="flex gap-9 mt-6"> 
            <div className="bg-white rounded-full h-20 w-64 bg-opacity-30 grid place-items-center border border-slate-100 border-x-8 shadow-lg shadow-blue-950  ">
            <Link to="/sign-up" className="text-slate-100 text-opacity-50 text-2xl  hover:text-white font-serif">
                Add Employee
              </Link>

            </div>
              
              
            
            </div>
            <div className=" absolute flex   ml-[-300px] gap-8">
            <div className="bg-white mt-8 ml-20 rounded-xl h-56 w-[400px] bg-opacity-30 grid place-items-center border border-slate-100  border-x-8 shadow-lg shadow-blue-950  ">
               <h1 className="text-white text-2xl  font-serif"> Absences Employee</h1>
            <p className="text-6xl text-white  "> {ABsnt.length}</p>
              </div>

              <div className="bg-white mt-8 ml-20 rounded-xl h-56 w-[400px] bg-opacity-30 grid place-items-center border border-slate-100  border-x-8 shadow-lg shadow-blue-950  ">
               <h1 className="text-white text-2xl  font-serif"> All Employee</h1>
            <p className="text-6xl text-white  "> {Empp.length}</p>
              </div>
              </div>
              

            
              
              
          </div>
        </div>
      </div>
    </div>
  );
}

import { HiUser, HiArrowSmRight, HiChartPie } from "react-icons/hi";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { signoutSuccess } from "../redux/user/userSilce";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

export default function DashSidebar() {
  const location = useLocation();
  const dispatch = useDispatch();
  const { currentUser } = useSelector((state) => state.user);
  const [tab, setTab] = useState("");
 






  return (
    <div className=" hidden flex-col flex-shrink-0 p-3 bg-black bg-opacity-40 w-56 h-[600px]  lg:block">
      <ul className="flex flex-col space-y-1 mb-auto">
        {currentUser && currentUser && (
          <li className="nav-item">
            <Link to="/profile" className={`block py-2 px-4 rounded-lg hover:bg-gray-200 bg-opacity-60 text-white `}>
              <HiChartPie className="inline-block w-5 h-5 mr-2" />
              Dashboard
            </Link>
          </li>
        )}
        <li className="nav-item">
          <Link to="/sign-up" className={`block py-2 px-4 rounded-lg text-white hover:bg-gray-200 `}>
            <HiUser className="inline-block w-5 h-5 mr-2" />
             Employee
          </Link>
        </li>
        <li className="">
          <Link to="/view" className={`block py-2 px-4 rounded-lg text-white hover:bg-gray-200 `}>
            <HiUser className="inline-block w-5 h-5 mr-2" />
             All View
          </Link>
        </li>
        <li className="">
          <Link to="/absent" className={`block py-2 px-4 rounded-lg text-white hover:bg-gray-200 `}>
            <HiUser className="inline-block w-5 h-5 mr-2" />
            absence
          </Link>
        </li>
      </ul>
      <hr className="my-2 border-gray-300" />
      
    </div>
  );
}

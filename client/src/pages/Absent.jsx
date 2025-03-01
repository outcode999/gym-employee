import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import moment from "moment";
import Dash from "../components/sideDash";
import Cat from "../img/fff.jpg";

export default function Absent() {
  const { currentUser } = useSelector((state) => state.user);
  const [ABsnt, setABsnt] = useState([]);
  const [EmpId, setEmpId] = useState("");
  const [AbsentId, setempIdToDelete] = useState("");
 

  //get employee
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

  const handleStatusChange = async (absentId, currentStatus) => {
    try {
      const newStatus =
        currentStatus === "Processing" ? "Approval" : "Processing";
      const res = await fetch(`/api/employe/absent/${absentId}/status`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ status: newStatus }),
      });
      if (res.ok) {
        setABsnt(
          ABsnt.map((Employe) => {
            if (Employe._id === absentId) {
              return { ...Employe, status: newStatus };
            }
            return Employe;
          })
        );
      }
    } catch (error) {
      console.log(error.message);
    }
  };


  const handleDeleteUser = async () => {
    try {
      const res = await fetch(`/api/employe/deletempp/${AbsentId}`, {
        method: "DELETE",
      });
      const data = await res.json();
      if (res.ok) {
        setABsnt((prev) =>
          prev.filter((Employe) => Employe._id !== AbsentId)
        );
      } else {
        console.log(data.message);
      }
    } catch (error) {
      console.log(error.message);
    }
  };







  return (
    <div>
      <div className="h-[600px] relative">
        {" "}
        {/* Added relative class */}
        <img src={Cat} alt="" className="w-full h-full object-cover" />
        <div className="absolute top-0 left-0">
          {" "}
          {/* Positioned Dash component here */}
          <Dash />
        </div>{" "}
        {/* Added object-cover class */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex justify-center items-center gap-14 mt-5">
          <div className="w-[1000px] h-[400px] mt-[-100px] rounded-lg bg-opacity-20 border border-white bg-slate-100">
            <div className="max-h-96 overflow-y-auto">
              <div>
                <div className="table-auto overflow-x-scroll md:mx-auto p-3 scrollbar scrollbar-track-slate-100 scrollbar-thumb-slate-300 dark:scrollbar-track-slate-700 dark:scrollbar-thumb-slate-500">
                  <>
                    <table className="w-full divide-y divide-gray-200 shadow-md">
                      <thead className="bg-black bg-opacity-20">
                        <tr>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                            Email
                          </th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                            Phone
                          </th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                            Description
                          </th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                            Status
                          </th>

                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                            Delete
                          </th>
                        </tr>
                      </thead>
                      <tbody className=" divide-y divide-gray-200">
                        {ABsnt.map((Employe) => (
                          <tr
                            key={Employe._id}
                            className="bg-black bg-opacity-50 text-white dark:border-gray-700 dark:bg-gray-800"
                          >
                            <td className="px-6 py-4 whitespace-nowrap">
                              {Employe.Email}
                            </td>

                            <td className="px-6 py-4 whitespace-nowrap">
                              {Employe.Phone}
                            </td>
                            <td className="px-6 py-4 whitespace-normal w-52 break-all">
                              {Employe.desc}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <button
                                onClick={() =>
                                  handleStatusChange(
                                    Employe._id,
                                    Employe.status
                                  )
                                }
                                className=" hover:underline w-24 h-8 rounded-lg hover:opacity-90 bg-blue-500 border border-white font-serif text-white"
                              >
                                {Employe.status}
                              </button>
                            </td>

                            <td className="px-6 py-4 whitespace-nowrap">
                              <span
                               onClick={() => {
                                setempIdToDelete(Employe._id);
                                handleDeleteUser();
                              }}
                              
                              className="text-red-500 hover:underline cursor-pointer">
                                Delete
                              </span>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

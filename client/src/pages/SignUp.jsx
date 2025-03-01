import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Dash from "../components/sideDash";
import Cat from "../img/fff.jpg";

export default function SignUp() {
  const [formData, setFormData] = useState({});
  const [errorMessage, setErrorMessage] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  console.log(formData);

  const handlchange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value.trim() });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.email || !formData.password) {
      return setErrorMessage("Plese fill out all fields");
    }

    try {
      setLoading(true);
      setErrorMessage(null);

      const res = await fetch("/api/employe/signup/emp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (data.success === false) {
        return setErrorMessage(data.message);
      }
      setLoading(false);
      if (res.ok) {
        navigate("/profile");
      }
    } catch (error) {
      setErrorMessage(error.message);
      setLoading(false);
    }
  };

  return (
    <div>
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
            <div className=" mt-[-50px] w-[1000px] h-[500px] bg-white rounded-lg bg-opacity-10 border border-white">
              <div className="flex p-3 max-w-3xl mx-auto flex-col md:flex-row md:items-center gap-5 ">
                <div className="flex-1">
                  <form className="flex flex-col " onSubmit={handleSubmit}>
                    <div className="flex gap-8 mt-8 ml-[-110px]">
                      <div>
                        <div>
                          <h3 className="font-semibold text-slate-400 ml-1">
                            FirstName
                          </h3>
                          <input
                            className="bg-slate-200 bg-opacity-30 border border-slate-100 p-3 rounded-lg w-[460px] h-11"
                            type="text"
                            placeholder=""
                            id="FirstName"
                            onChange={handlchange}
                          />
                        </div>
                        <div>
                          <h3 className="font-semibold text-slate-400 ml-1">
                            LastName
                          </h3>
                          <input
                            className=" bg-slate-200 bg-opacity-30 border border-slate-100 p-3 rounded-lg w-[460px] h-11"
                            type="text"
                            placeholder=""
                            id="LastName"
                            onChange={handlchange}
                          />
                        </div>
                      </div>

                      <div>
                        <div>
                          <h3 className="font-semibold text-slate-400 ml-1">
                            Email
                          </h3>
                          <input
                            className=" bg-slate-200 bg-opacity-30 border border-slate-100 p-3 rounded-lg w-[460px] h-11"
                            type="email"
                            placeholder="name@company.com"
                            id="email"
                            onChange={handlchange}
                          />
                        </div>
                        <div>
                          <h3 className="font-semibold text-slate-400 ml-1">
                            Password
                          </h3>
                          <input
                            className=" bg-slate-200 bg-opacity-30 border border-slate-100 p-3 rounded-lg w-[460px] h-11"
                            type="password"
                            placeholder="Password"
                            id="password"
                            onChange={handlchange}
                          />
                        </div>
                      </div>
                    </div>

                    <div className="flex gap-8  mt-7 ml-[-110px]">
                      <div>
                        <div>
                          <h3 className="font-semibold text-slate-400 ml-1">
                            BirthDate
                          </h3>
                          <input
                            className=" bg-slate-200 bg-opacity-30 border border-slate-100 p-3 rounded-lg w-[460px] h-11"
                            type="text"
                            placeholder="(dd/mm/yy)"
                            id="BirthDate"
                            maxLength={10}
                            onChange={handlchange}
                          />
                        </div>

                        <div>
                          <h3 className="font-semibold text-slate-400 ml-1">
                            BirthDate
                          </h3>
                          <select
                            className="bg-slate-200 bg-opacity-30 border border-slate-100 p-3 rounded-lg w-[460px] h-11 "
                            id="Gender"
                            onChange={handlchange}
                          >
                            <option value="">Select Rate</option>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                          </select>
                        </div>
                      </div>

                      <div>
                        <div>
                          <h3 className="font-semibold text-slate-400 ml-1">
                            Contact
                          </h3>
                          <input
                            className=" bg-slate-200 bg-opacity-30 border border-slate-100 p-3 rounded-lg w-[460px] h-11"
                            type="text"
                            placeholder=""
                            id="Contact"
                            maxLength={10}
                            onChange={handlchange}
                          />
                        </div>
                        <div>
                          <h3 className="font-semibold text-slate-400 ml-1">
                            Position
                          </h3>
                          <select
                            className="bg-slate-200 bg-opacity-30 border border-slate-100 p-3 rounded-lg w-[460px] h-11 "
                            id="Position"
                            onChange={handlchange}
                          >
                            <option value="">Select Rate</option>
                            <option value="Personal Trainer">
                              Personal Trainer
                            </option>
                            <option value="Group Fitness Instructor">
                              Group Fitness Instructor
                            </option>
                            <option value="Fitness Manager">
                              Fitness Manager
                            </option>
                            <option value="Front Desk Staff">
                              Front Desk Staff
                            </option>
                          </select>
                        </div>
                      </div>
                    </div>

                    <button
                      className=" bg-blue-800 border  mt-10 ml-64 text-white text-opacity-70 font-serif p-3 rounded-lg w-[200px] h-11 hover:opacity-90"
                      type="submit"
                      disabled={loading}
                    >
                      {loading ? (
                        <>
                          <sapn className="pl-3 font-serif opacity-80">
                            Loading...
                          </sapn>
                        </>
                      ) : (
                        "Add Employee"
                      )}
                    </button>
                  </form>
                  {errorMessage && (
                  <p className="mt-5 text-white bg-red-300 bg-opacity-35 w-300 h-7 rounded-lg text-center ">
                    {errorMessage}
                  </p>
                )}
                </div>

                
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

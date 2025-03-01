import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import moment from "moment";

export default function ViewSalary() {
  const [Info, setInfo] = useState([]);
  const { EId } = useParams();

  useEffect(() => {
    const fetchInfo = async () => {
      try {
        const res = await fetch(`/api/emp/get/${EId}`);
        const data = await res.json();
        if (res.ok) {
          setInfo(data.mar);
        }
      } catch (error) {
        console.error(error.message);
      }
    };
    fetchInfo();
  }, [EId]);

  return (
    <div className="h-[600px] relative">
      <img
        src="https://images.pexels.com/photos/6894013/pexels-photo-6894013.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        alt=""
        className="w-full opacity-80 h-full object-cover"
      />

      <div className="absolute top-4 left-1/2 transform -translate-x-1/2 z-10">
        <div>
          <div className="flex justify-center items-center">
            <h1 className="text-4xl font-serif whitespace-nowrap opacity-90 text-white shadow-lg">
              Leave Request
            </h1>
          </div>
        </div>
        <div className="max-h-[700px] overflow-y-auto mt-2 scrollbar-none">
          <div className="lg:w-[800px] xl:w-[1200px] lg:h-[400px] w-[450px] mt-6 md:w-[700px] rounded-lg p-4">
            <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-1 gap-4">
              {Info.length > 0 ? (
                Info.map((employee, index) => {
                  const cumulativeSalary = Info
                    .slice(0, index + 1) // Get all employees up to the current index
                    .reduce((acc, emp) => acc + emp.price, 0); // Calculate the total salary

                  return (
                    <div
                      key={employee._id}
                      className="border border-red-600 rounded-2xl p-4 shadow-md bg-red-200"
                    >
                      <div className="flex flex-col">
                        <h2 className="text-xl font-serif opacity-60 mb-2">{employee.name}</h2>
                        <h2 className="text-md opacity-60 font-serif mt-3 mb-2">{employee.email}</h2>
                        <h2 className="text-md opacity-60 font-serif mt-3 mb-2">{employee.contactN}</h2>
                        <h2 className="text-md opacity-60 font-thin mt-3 mb-2">
                          {moment(employee.updatedAt).format("MMMM D, YYYY [at] h:mm A")}
                        </h2>
                        <p className="text-gray-700 font-thin mb-4">Daily salary: {employee.price}</p>
                        <div className="text-lg font-semibold">
                          Total Salary up to this employee: {cumulativeSalary}
                        </div>
                      </div>
                    </div>
                  );
                })
              ) : (
                <p className="text-2xl font-serif text-center w-full">You have no products</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

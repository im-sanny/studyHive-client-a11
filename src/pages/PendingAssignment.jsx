import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import axios from "axios";

const PendingAssignment = () => {
    const { user } = useContext(AuthContext);
    const [subAsn, setSubAsn] = useState([]);
  
    useEffect(() => {
      getDate();
    }, [user]);
  
    const getDate = async () => {
        const response = await axios.get(`${import.meta.env.VITE_API_URL}/pending`);
        setSubAsn(response.data);
    };
    console.log(subAsn);

  return (
    <div>
      <div className="container p-2 mx-auto sm:p-4 text-gray-700 dark:text-gray-400">
        <h2 className="mb-4 text-2xl font-semibold leading-tight">
          Pending Assignments {subAsn.length}
        </h2>
        <div className="overflow-x-auto rounded-lg">
          <table
            className="min-w-full text-md"
            style={{ tableLayout: "fixed" }}
          >
            <colgroup>
              <col style={{ width: "20%" }} />
              <col style={{ width: "20%" }} />
              <col style={{ width: "20%" }} />
              
              <col style={{ width: "20%" }} />
              
            </colgroup>
            <thead className="bg-gray-700 dark:bg-green-300 text-black font-bold">
              <tr className="text-left">
                <th className="p-3">Examinee Name</th>
                <th className="p-3">Assignment Title</th>
                <th className="p-3">Marks</th>
                <th className="p-3">Status</th>
                <th className="p-3">Give Marks</th>
              </tr>
            </thead>
            <tbody>
              {subAsn.map((assignment) => (
                <tr
                  key={assignment._id}
                  className="border-b border-opacity-20 border-gray-700 dark:border-gray-300 bg-gray-900 dark:bg-gray-50"
                >
                  <td className="p-3 ml-5">{assignment.name}</td>
                  <td className="p-3">{assignment.title}</td>
                  <td className="p-3">{assignment.marks}</td>
                  
                  <td className="">
                    <p
                      className={`badge border-none text-black flex items-center bg-blue-300 p-3 ${
                        assignment.status === "Pending" &&
                        "bg-yellow-100/60 text-yellow-500"
                      } ${
                        assignment.status === "In Progress" &&
                        "bg-blue-100/60 text-blue-500"
                      } ${
                        assignment.status === "Complete" &&
                        "bg-emerald-100/60 text-emerald-500"
                      } ${
                        assignment.status === "Rejected" &&
                        "bg-red-100/60 text-red-500"
                      }`}
                    >
                      {assignment.status}
                    </p>
                  </td>
                  <td className="btn btn-sm mt-2">Give Marks</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default PendingAssignment;

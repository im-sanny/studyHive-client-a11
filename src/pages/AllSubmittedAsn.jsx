import axios from "axios";
import { useEffect, useState } from "react";


const AllSubmittedAsn = () => {
    const [allSubmit, setAllSubmit] = useState([]);

  

    useEffect(() => {
        const getData = async () => {
          try {
            const { data } = await axios.get(
              `${import.meta.env.VITE_API_URL}/allSubmitted`,{ withCredentials: true }
            );
            setAllSubmit(data);
          } catch (error) {
            console.log(error.message);
          }
        };
        getData();
      }, []);
  console.log(allSubmit);
    return (
        <div className="container p-2 mx-auto sm:p-4 text-gray-700 dark:text-gray-400">
        <h2 className="mb-4 text-2xl font-semibold leading-tight">
          My Assignments
        </h2>
        <div className="overflow-x-auto rounded-lg">
          <table className="min-w-full text-md" style={{ tableLayout: "fixed" }}>
            <colgroup>
              <col style={{ width: "20%" }} />
              <col style={{ width: "20%" }} />
              <col style={{ width: "20%" }} />
              <col style={{ width: "20%" }} />
              <col style={{ width: "20%" }} />
            </colgroup>
            <thead className="bg-gray-700 dark:bg-green-300 text-black font-bold">
              <tr className="text-left">
                <th className="p-3">Title</th>
                <th className="p-3">Total Marks</th>
                <th className="p-3">Obtained Marks</th>
                <th className="p-3">Preview</th>
                <th className="p-3">Status</th>
                <th className="p-3">Feedback</th>
              </tr>
            </thead>
            <tbody>
              {allSubmit.map((assignment) => (
                <tr
                  key={assignment._id}
                  className="border-b border-opacity-20 border-gray-700 dark:border-gray-300 bg-gray-900 dark:bg-gray-50"
                >
                  <td className="p-3 ml-5">{assignment.title}</td>
                  <td className="p-3 ">{assignment.marks}</td>
                  <td className="p-3 ">
                    {/* <iframe src={assignment.link} frameborder="0"></iframe> */}
                    <iframe src={assignment.link} frameBorder="0"></iframe>

                    </td>
                  <td className="p-3 badge border-none text-black flex items-center  my-3 lg:ml-5 bg-green-300">
                    {assignment.obtainedMark || "pending"}
                  </td>
                  <td className="my-3 p-3">
                    <p
                      className={`badge border-none text-black lg:flex items-center bg-blue-300  ${
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
                  <td className="p-3 badge border-none text-black flex items-center my-3 bg-green-300 lg:ml-5">
                    {assignment.feedback || "pending"}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
};

export default AllSubmittedAsn;
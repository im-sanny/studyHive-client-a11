import axios from "axios";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";

const AllSubmittedAsn = () => {
  const [allSubmit, setAllSubmit] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await axios.get(
          `${import.meta.env.VITE_API_URL}/allSubmitted`,
          { withCredentials: true }
        );
        setAllSubmit(data);
      } catch (error) {
        console.log(error.message);
      }
    };
    getData();
  }, []);
  // console.log(allSubmit);
  return (
    <>
      <div className="container p-2 mx-auto sm:p-4">
        <h2 className="mb-4 text-2xl font-semibold text-center leading-tight">
          All Submitted Assignments
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
                <th className="p-3">Full Marks</th>
                <th className="p-3">Status</th>
                <th className="p-3">Give Marks</th>
              </tr>
            </thead>
            <tbody>
              {allSubmit.map((assignment) => (
                <tr
                  key={assignment._id}
                  className="border-b border-opacity-20 border-gray-700 dark:border-gray-300 border-x-2"
                >
                  <td className="p-3 ml-5">{assignment.name}</td>
                  <td className="p-3">{assignment.title}</td>
                  <td className="p-3">{assignment.marks}</td>

                  <td className="">
                    <p
                      className={`badge border-none text-black flex items-center bg-blue-300 p-3 ${
                        assignment.status === "Pending" &&
                        "bg-yellow-100 text-yellow-700"
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
                  <td className="p-3">
                    <button
                      className="btn btn-sm"
                      onClick={() =>
                        Swal.fire({
                          title: "Assignment Preview",
                          html: `
                          <div>
                              <iframe src="${assignment.link}" frameborder="0" style="width:100%;height:500px;">
                              </iframe>
                          </div>`,
                          showCancelButton: false,
                          confirmButtonText: "Ok",
                        })
                      }
                    >
                      Preview
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default AllSubmittedAsn;

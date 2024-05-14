import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import axios from "axios";
import Swal from "sweetalert2";
import toast from "react-hot-toast";

const PendingAssignment = () => {
  const { user } = useContext(AuthContext);
  const [subAsn, setSubAsn] = useState([]);

  useEffect(() => {
    getDate();
  }, [user]);

  const getDate = async () => {
    const response = await axios.get(
      `${import.meta.env.VITE_API_URL}/pending`,
      { withCredentials: true }
    );
    setSubAsn(response.data);
  };
  // console.log(subAsn);

  // handle marks
  const handleMarks = async (id, finalMark, feedback) => {
    if (user?.email === subAsn.student?.email) {
      return toast.error("Creator cant mark their own assignment");
    }

    try {
      const { data } = await axios.patch(
        `${import.meta.env.VITE_API_URL}/takeAsnmnt/${id}`,
        { status: "Completed", obtainedMark: finalMark, feedback: feedback }
      );
      setSubAsn((prevSubAsn) => prevSubAsn.filter((asn) => asn._id !== id));
      toast.success("Assignment marking successful");
      console.log(data);
    } catch (error) {
      console.error("Error marking assignment:", error);
      toast.error("Failed to mark assignment. Please try again later.");
    }
  };

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
                <th className="p-3">Full Marks</th>
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
                  <td
                    onClick={() =>
                      Swal.fire({
                        title: "Mark Assignment",
                        html: `
                            <p>PDF/doc link: ${assignment.link}</p>
                            <p>Examinee Notes: ${assignment.notes}</p>
                            <input
                            id="finalMarks"
                            type="number"
                            name="number"
                            defaultValue={user?.email}
                            placeholder="Final Mark"
                            class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring"
                            />
                            <textarea
                            id="feedback"
                            name="feedback"
                            placeholder="Examiner Feedback"
                            class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring"
                            
                            ></textarea>
                        `,
                        showCancelButton: true,
                        confirmButtonText: "Submit",
                        focusConfirm: false,
                        preConfirm: () => {
                          const finalMark =
                            Swal.getPopup().querySelector("#finalMarks").value;
                          const feedback =
                            Swal.getPopup().querySelector("#feedback").value;
                          if (!finalMark || !feedback) {
                            toast.error(
                              "Please enter final mark and feedback."
                            );
                            return false;
                          }
                          handleMarks(assignment._id, finalMark, feedback);
                        },
                      })
                    }
                  >
                    <button className="btn btn-sm">Give Marks</button>
                  </td>
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

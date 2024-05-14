import { useState, useEffect, useContext } from "react";
import { FaEye } from "react-icons/fa";
import { AiFillDelete } from "react-icons/ai";
import { FaEdit } from "react-icons/fa";
import { Link, useLoaderData } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
import Swal from "sweetalert2";
import { AuthContext } from "../provider/AuthProvider";

const Assignments = () => {
  const { user } = useContext(AuthContext);
  const [asnmnts, setAsnmnts] = useState([]);
  const asnmntData = useLoaderData();
  console.log(asnmnts);

  useEffect(() => {
    setAsnmnts(asnmntData);
  }, [asnmntData]);

  const [filterValue, setFilterValue] = useState("all");
  const handleFilterChange = (e) => {
    setFilterValue(e.target.value);
  };
  const filteredAsnmnts =
    filterValue === "all"
      ? asnmnts
      : asnmnts.filter((item) => item.difficulty === filterValue);

  const badgeColors = {
    easy: "bg-green-200 text-green-800",
    medium: "bg-yellow-200 text-yellow-800",
    hard: "bg-red-200 text-red-800",
  };

  useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await axios.get(
          `${import.meta.env.VITE_API_URL}/asnmnts`
        );
        setAsnmnts(data);
      } catch (error) {
        console.log(error.message);
      }
    };
    getData();
  }, []);

  const handleDelete = async (id) => {
    const assignmentToDelete = asnmnts.find((asnmnt) => asnmnt._id === id);

    if (!assignmentToDelete) {
      console.error("Assignment not found");
      return;
    }

    const student_email = assignmentToDelete.student.email;

    if (user?.email !== student_email) {
      toast.error("You are not authorized to delete this assignment.");
      return;
    }

    Swal.fire({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this assignment!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          // Send delete request to the server
          await axios.delete(`${import.meta.env.VITE_API_URL}/asnmnt/${id}`);
          // Remove the deleted assignment from the local state
          setAsnmnts((prevAsnmnts) =>
            prevAsnmnts.filter((asnmnt) => asnmnt._id !== id)
          );
          // Show success message
          toast.success("Assignment deleted successfully!");
        } catch (error) {
          console.log(error.message);
          toast.error(error.message);
        }
      }
    });
  };

  return (
    <>
      <div>
        <div className="flex justify-center items-center">
          <div className="mt-4 bg-slate-400 p-2 rounded-md">
            <label htmlFor="filter" className="mr-2 text-gray-700 text-2xl">
              Filter by Difficulty Level:
            </label>
            <select
              id="filter"
              value={filterValue}
              onChange={handleFilterChange}
              className="border border-gray-300 rounded-md px-4 py-1 focus:outline-none focus:border-blue-500 dark:bg-gray-800 dark:border-gray-600 dark:text-gray-300"
            >
              <option value="all">All</option>
              <option value="easy">Easy</option>
              <option value="medium">Medium</option>
              <option value="hard">Hard</option>
            </select>
          </div>
        </div>
        <section className="px-4 mx-auto py-12">
          <div className="flex items-center gap-x-3 mb-4">
            <h2 className="text-2xl font-medium text-gray-500">
              Posted Assignments
            </h2>
            <span className="px-3 py-1 text-xs text-blue-600 bg-blue-100 rounded-full">
              {filteredAsnmnts.length} Assignments
            </span>
          </div>

          <div className="overflow-x-auto rounded-lg bg-gradient-to-br from-blue-500 to-blue-400">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gradient-to-br from-blue-500 to-blue-300">
                <tr>
                  <th className="py-3.5 px-4 text-sm text-left rtl:text-right text-gray-800 font-bold">
                    Thumbnail
                  </th>
                  <th className="py-3.5 px-4 text-sm font-bold text-left rtl:text-right text-gray-800">
                    Title
                  </th>
                  <th className="px-4 py-3.5 text-sm font-bold text-left rtl:text-right text-gray-800">
                    Deadline
                  </th>
                  <th className="px-4 py-3.5 text-sm font-bold text-left rtl:text-right text-gray-800">
                    Marks
                  </th>
                  <th className="px-4 py-3.5 text-sm font-bold text-left rtl:text-right text-gray-800">
                    Difficulty
                  </th>
                  <th className="px-4 py-3.5 text-sm font-bold text-left rtl:text-right text-gray-800">
                    Edit
                  </th>
                  <th className="px-4 py-3.5 text-sm font-bold text-left rtl:text-right text-gray-800">
                    Delete
                  </th>
                  <th className="px-4 py-3.5 text-sm font-bold text-left rtl:text-right text-gray-800">
                    View
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y border-2 divide-gray-300 border-b border-opacity-20 border-gray-700 dark:border-gray-300 bg-gray-900 dark:bg-gray-50">
                {filteredAsnmnts.map((asnmnt) => (
                  <tr key={asnmnt._id}>
                    <td className="px-4 py-4 text-sm text-gray-500 whitespace-nowrap">
                      <img
                        src={asnmnt.imageURL}
                        alt=""
                        className="h-20 rounded-md"
                      />
                    </td>
                    <td className="px-4 py-4 text-sm text-gray-500 whitespace-nowrap">
                      {asnmnt.title}
                    </td>
                    <td className="px-4 py-4 text-sm text-gray-500 whitespace-nowrap">
                      {new Date(asnmnt.deadline).toLocaleDateString()}
                    </td>
                    <td className="px-4 py-4 text-sm text-gray-500 whitespace-nowrap">
                      {asnmnt.marks}
                    </td>
                    <td className="px-4 py-4 text-sm whitespace-nowrap">
                      <div className="flex items-center gap-x-2">
                        <p
                          className={`px-3 py-1 rounded-full text-xs ${
                            badgeColors[asnmnt.difficulty]
                          }`}
                        >
                          {asnmnt.difficulty}
                        </p>
                      </div>
                    </td>
                    <td className="px-4 py-4 text-sm whitespace-nowrap">
                      <div className="flex items-center gap-x-6">
                        <Link to={`/update/${asnmnt._id}`}>
                          <button className="text-gray-500 transition-colors duration-200 hover:text-yellow-500 focus:outline-none ml-1">
                            <FaEdit size={20} />
                          </button>
                        </Link>
                      </div>
                    </td>
                    <td className="px-4 py-4 text-sm whitespace-nowrap">
                      <div className="flex items-center gap-x-6">
                        <button
                          onClick={() =>
                            handleDelete(asnmnt._id, asnmnt.student.email)
                          }
                          className="text-gray-500 transition-colors duration-200 hover:text-red-500 focus:outline-none ml-3"
                        >
                          <AiFillDelete size={20} />
                        </button>
                      </div>
                    </td>
                    <td className="px-4 py-4 text-sm whitespace-nowrap">
                      <div className="flex items-center gap-x-6">
                        <Link to={`/assignmentDetails/${asnmnt._id}`}>
                          <button className="text-gray-500 transition-colors duration-200 hover:text-green-500 focus:outline-none ml-2">
                            <FaEye size={23} />
                          </button>
                        </Link>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </>
  );
};

export default Assignments;

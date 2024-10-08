/* eslint-disable no-unused-vars */
import { useState, useEffect, useContext } from "react";
import { FaEye } from "react-icons/fa";
import { AiFillDelete } from "react-icons/ai";
import { FaEdit } from "react-icons/fa";
import { Link } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
import Swal from "sweetalert2";
import { AuthContext } from "../provider/AuthProvider";

const Assignments = () => {
  const { user } = useContext(AuthContext);
  const [asnmnts, setAsnmnts] = useState([]);
  const [count, setCount] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setitemsPerPage] = useState(5);
  const [filter, setFilter] = useState("");

  // console.log(asnmnts);

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
  
  // Fetch assignments
  useEffect(() => {
    const getAssignments = async () => {
      try {
        const { data } = await axios.get(
          `${
            import.meta.env.VITE_API_URL
          }/asnmnts?page=${currentPage}&size=${itemsPerPage}&filter=${filter}`,
          { withCredentials: true }
        );
        setAsnmnts(data);
      } catch (error) {
        console.log(error.message);
      }
    };
    getAssignments();
  }, [currentPage, itemsPerPage, filter]);

  // Fetch count of assignments
  useEffect(() => {
    const getCount = async () => {
      try {
        const { data } = await axios.get(
          `${import.meta.env.VITE_API_URL}/assignment-count`,
          { withCredentials: true }
        );
        setCount(data.count);
      } catch (error) {
        console.log(error.message);
      }
    };
    getCount();
  }, []);

  const numberOfPages = Math.ceil(count / itemsPerPage);
  const pages = [...Array(numberOfPages).keys()].map((element) => element + 1);

  // Handle pagination button
  const handlePaginationButton = (value) => {
    console.log(value);
    setCurrentPage(value);
  };

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
          await axios.delete(`${import.meta.env.VITE_API_URL}/asnmnt/${id}`, {
            withCredentials: true,
          });
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
      {/* main */}
      <div>
        <div className="flex justify-center items-center">
          <div className="mt-4 bg-slate-300 p-2 rounded-md">
            <label htmlFor="filter" className="mr-2 text-gray-700 lg:text-2xl ">
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

          <div className="overflow-x-auto rounded-lg border-2 border-teal-200">
            <table className="min-w-full divide-y divide-x divide-gray-200">
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
              <tbody className="divide-y divide-green-300">
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
      {/* pagination */}
      <div className="flex justify-center mb-10">
        <button
          disabled={currentPage === 1}
          onClick={() => handlePaginationButton(currentPage - 1)}
          className="px-4 py-2 mx-1 text-gray-700 disabled:text-gray-500 capitalize bg-gray-200 rounded-md disabled:cursor-not-allowed disabled:hover:bg-gray-200 disabled:hover:text-gray-500 hover:bg-blue-500  hover:text-white"
        >
          <div className="flex items-center -mx-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6 mx-1 rtl:-scale-x-100"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M7 16l-4-4m0 0l4-4m-4 4h18"
              />
            </svg>

            <span className="mx-1">previous</span>
          </div>
        </button>

        {pages.map((btnNum) => (
          <button
            onClick={() => handlePaginationButton(btnNum)}
            key={btnNum}
            className={`hidden ${
              currentPage === btnNum ? "bg-blue-500 text-white" : ""
            } px-4 py-2 mx-1 transition-colors duration-300 transform  rounded-md sm:inline hover:bg-blue-500  hover:text-white`}
          >
            {btnNum}
          </button>
        ))}

        <button
          disabled={currentPage === numberOfPages}
          onClick={() => handlePaginationButton(currentPage + 1)}
          className="px-4 py-2 mx-1 text-gray-700 transition-colors duration-300 transform bg-gray-200 rounded-md hover:bg-blue-500 disabled:hover:bg-gray-200 disabled:hover:text-gray-500 hover:text-white disabled:cursor-not-allowed disabled:text-gray-500"
        >
          <div className="flex items-center -mx-1">
            <span className="mx-1">Next</span>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6 mx-1 rtl:-scale-x-100"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </div>
        </button>
      </div>
    </>
  );
};

export default Assignments;

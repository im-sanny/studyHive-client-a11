import { useState } from "react";
import { FaEye } from "react-icons/fa";
import { AiFillDelete } from "react-icons/ai";
import { FaEdit } from "react-icons/fa";
import { Link, useLoaderData } from "react-router-dom";

const Assignments = () => {
  const asnmnts = useLoaderData();

  const [filterValue, setFilterValue] = useState("all");

  const handleFilterChange = (e) => {
    setFilterValue(e.target.value);
  };

  const filteredAsnmnts =
    filterValue === "all"
      ? asnmnts
      : asnmnts.filter((item) => item.difficultyLevel === filterValue);

  return (
    <>
      <div>
        <div className="flex justify-center items-center">
          <div className="mt-4 bg-slate-400 p-2 rounded-md">
            <label htmlFor="filter" className="mr-2 text-gray-700 text-2xl ">
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

          <div className="overflow-x-auto rounded-lg">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="py-3.5 px-4 text-sm text-left rtl:text-right text-gray-500 font-bold">
                    Thumbnail
                  </th>
                  <th className="py-3.5 px-4 text-sm font-bold text-left rtl:text-right text-gray-500">
                    Title
                  </th>
                  <th className="px-4 py-3.5 text-sm font-bold text-left rtl:text-right text-gray-500">
                    Deadline
                  </th>
                  <th className="px-4 py-3.5 text-sm font-bold text-left rtl:text-right text-gray-500">
                    Marks
                  </th>
                  <th className="px-4 py-3.5 text-sm font-bold text-left rtl:text-right text-gray-500">
                    Difficulty
                  </th>
                  <th className="px-4 py-3.5 text-sm font-bold text-left rtl:text-right text-gray-500">
                    Edit
                  </th>
                  <th className="px-4 py-3.5 text-sm font-bold text-left rtl:text-right text-gray-500">
                    Delete
                  </th>
                  <th className="px-4 py-3.5 text-sm font-bold text-left rtl:text-right text-gray-500">
                    View
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {filteredAsnmnts.map((asnmnt) => (
                  <tr key={asnmnt._id}>
                    <td className="px-4 py-4 text-sm text-gray-500  whitespace-nowrap">
                      <img
                        src={asnmnt.thumbnailUrl}
                        alt=""
                        className="h-20 rounded-md"
                      />
                    </td>
                    <td className="px-4 py-4 text-sm text-gray-500  whitespace-nowrap">
                      {asnmnt.title}
                    </td>
                    <td className="px-4 py-4 text-sm text-gray-500  whitespace-nowrap">
                      {asnmnt.dueDate}
                    </td>
                    <td className="px-4 py-4 text-sm text-gray-500  whitespace-nowrap">
                      {asnmnt.marks}
                    </td>
                    <td className="px-4 py-4 text-sm whitespace-nowrap">
                      <div className="flex items-center gap-x-2">
                        <p className="px-3 py-1 rounded-full text-blue-500 bg-blue-100/60 text-xs">
                          {asnmnt.difficultyLevel}
                        </p>
                      </div>
                    </td>
                    <td className="px-4 py-4 text-sm whitespace-nowrap">
                      <div className="flex items-center gap-x-6">
                        <button className="text-gray-500 transition-colors duration-200   hover:text-yellow-500 focus:outline-none ml-1">
                          <FaEdit size={20}></FaEdit>
                        </button>
                      </div>
                    </td>
                    <td className="px-4 py-4 text-sm whitespace-nowrap">
                      <div className="flex items-center gap-x-6">
                        <button className="text-gray-500 transition-colors duration-200   hover:text-red-500 focus:outline-none ml-3">
                          <AiFillDelete size={20}></AiFillDelete>
                        </button>
                      </div>
                    </td>
                    <td className="px-4 py-4 text-sm whitespace-nowrap">
                      <div className="flex items-center gap-x-6">
                        <Link to={`/assignmentDetails/${asnmnt._id}`}>
                          <button className="text-gray-500 transition-colors duration-200   hover:text-green-500 focus:outline-none ml-2">
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

import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useLoaderData, useParams } from "react-router-dom";

const AssignmentDetails = () => {
  const [startDate, setStartDate] = useState(new Date());
  const asnmtsDetails = useLoaderData();
  const { id } = useParams();
  const idInt = id;
  const asnmnts = asnmtsDetails.find(
    (asnmtDetails) => asnmtDetails._id === idInt
  );

  return (
    <>
      <div className="flex flex-col md:flex-row justify-around gap-5 my-10  items-center md:max-w-screen-xl mx-auto ">
        {/* assignment Details */}
        <div className="flex-1  px-4 py-7 bg-white rounded-md shadow-md md:min-h-[350px]">
          <div className="flex items-center justify-between">
            <span className="text-sm font-light text-gray-800 ">
              {asnmnts.dueDate}
            </span>
            <span className="px-4 py-1 text-xs text-blue-800 uppercase bg-blue-200 rounded-full ">
              {asnmnts.difficultyLevel}
            </span>
          </div>

          <div>
            <h1 className="mt-2 text-3xl font-semibold text-gray-800 ">
              {asnmnts.title}
            </h1>

            <p className="mt-2 text-lg text-gray-600 ">{asnmnts.description}</p>
            <p className="mt-6 text-sm font-bold text-gray-600 ">
              Assignment Creator Details:
            </p>
            <div className="flex items-center gap-5">
              <div>
                <p className="mt-2 text-sm  text-gray-600 ">
                  Name: Jhankar Vai.
                </p>
                <p className="mt-2 text-sm  text-gray-600 ">
                  Email: jhankar@mahbub.com
                </p>
              </div>
              <div className="rounded-full object-cover overflow-hidden w-14 h-14">
                <img src="" alt="" />
              </div>
            </div>
            <p className="mt-6 text-lg font-bold text-gray-600 ">
              Marks: {asnmnts.marks}
            </p>
          </div>
        </div>
        {/* Place A Bid Form */}
        <section className="p-6 w-full  bg-white rounded-md shadow-md flex-1 md:min-h-[350px]">
          <h2 className="text-lg font-semibold text-gray-700 capitalize ">
            Take the Assignment
          </h2>

          <form>
            <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
              <div>
                <label className="text-gray-700 " htmlFor="link">
                  PDF/doc link
                </label>
                <input
                  id="link"
                  type="text"
                  name="link"
                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md   focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
                />
              </div>
              <div className="flex flex-col gap-2 ">
                <label className="text-gray-700">Deadline</label>
                <DatePicker
                  className="border p-2 rounded-md w-full"
                  selected={startDate}
                  onChange={(date) => setStartDate(date)}
                />
                {/* Date Picker Input Field */}
              </div>

              <div>
                <label className="text-gray-700 " htmlFor="emailAddress">
                  Email Address
                </label>
                <input
                  id="emailAddress"
                  type="email"
                  name="email"
                  disabled
                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md   focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
                />
              </div>

              <div>
                <label className="text-gray-700 " htmlFor="comment">
                  Comment
                </label>

                <textarea
                  id="comment"
                  name="comment"
                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none textarea focus:ring"
                  style={{ height: "50px" }}
                />
              </div>
            </div>

            <div className="flex justify-end mt-6">
              <button
                type="submit"
                className="px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600"
              >
                Take Assignment
              </button>
            </div>
          </form>
        </section>
      </div>
    </>
  );
};

export default AssignmentDetails;

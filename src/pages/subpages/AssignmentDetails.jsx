import { useContext, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";
import axios from "axios";
import toast from "react-hot-toast";

const AssignmentDetails = () => {
  const { user } = useContext(AuthContext);
  const [startDate, setStartDate] = useState(new Date());

  const asnmnt = useLoaderData();
  //   console.log(asnmnt);

  const { description, difficultyLevel, dueDate, title, _id, marks,creator_email } =
    asnmnt || {};

  const handleFromSubmission = async (e) => {
      e.preventDefault();
    if (user?.email === creator_email) {
        return toast.error('Creator cant take their own assignment')
    }

    const form = e.target;
    const asnId = _id;
    const link = form.link.value;
    const email = user?.email;
    const deadline = startDate;
    // const marks = parseFloat(marks);
    const notes = form.notes.value;
    // const creator_email = creator_email;
    const status = "Pending";

    const takeAsnmnt = {
      asnId,
      link,
      email,
      marks,
      notes,
      status,
      difficultyLevel,
      deadline,
    };
    console.table(takeAsnmnt);
    try {
      const { data } = await axios.post(
        `${import.meta.env.VITE_API_URL}/takeAsnmnt`,
        takeAsnmnt
      );
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <div className="flex flex-col md:flex-row justify-around gap-5 my-10  items-center md:max-w-screen-xl mx-auto ">
        {/* assignment Details */}
        <div className="flex-1  px-4 py-7 bg-white rounded-md shadow-md md:min-h-[350px]">
          <div className="flex items-center justify-between">
            <span className="text-sm font-light text-gray-800 ">{dueDate}</span>
            <span className="px-4 py-1 text-xs text-blue-800 uppercase bg-blue-200 rounded-full ">
              {difficultyLevel}
            </span>
          </div>

          <div>
            <h1 className="mt-2 text-3xl font-semibold text-gray-800 ">
              {title}
            </h1>

            <p className="mt-2 text-lg text-gray-600 ">{description}</p>
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
              Marks: {marks}
            </p>
          </div>
        </div>
        {/* Place A Bid Form */}
        <section className="p-6 w-full  bg-white rounded-md shadow-md flex-1 md:min-h-[350px]">
          <h2 className="text-lg font-semibold text-gray-700 capitalize ">
            Take the Assignment
          </h2>

          <form onSubmit={handleFromSubmission}>
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
                  defaultValue={user?.email}
                  disabled
                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md   focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
                />
              </div>

              <div>
                <label className="text-gray-700 " htmlFor="notes">
                  Notes
                </label>

                <textarea
                  id="notes"
                  name="notes"
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

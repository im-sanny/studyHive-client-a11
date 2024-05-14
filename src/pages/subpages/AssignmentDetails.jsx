import { useContext, useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useLoaderData, useNavigate } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";
import axios from "axios";
import toast from "react-hot-toast";

const AssignmentDetails = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const [startDate, setStartDate] = useState(new Date());

  const asnmnt = useLoaderData();

  const { description, difficulty, deadline, title, marks, student } =
    asnmnt || {};

  const handleFromSubmission = async (e) => {
    e.preventDefault();
    if (user?.email === student?.email) {
      return toast.error("Creator cant take their own assignment");
    }

    const form = e.target;
    const link = form.link.value;
    const email = user?.email;
    const name = user?.displayName;
    const deadline = startDate;
    const notes = form.notes.value;
    const status = "Pending";
    const obtainedMark = parseFloat(0);

    const takeAsnmnt = {
      title,
      link,
      email,
      name,
      marks,
      obtainedMark,
      notes,
      status,
      difficulty,
      deadline,
      student_email: student?.email,
    };
    console.table(takeAsnmnt);
    try {
      const { data } = await axios.post(
        `${import.meta.env.VITE_API_URL}/takeAsnmnt`,
        takeAsnmnt,
        { withCredentials: true }
      );
      console.log(data);
      document.getElementById("my_modal_5").close();
      // Optionally, you can display a success message using toast.success()
      toast.success("Assignment submitted successfully!");
      navigate("/mySubmit");
    } catch (error) {
      console.log(error.message);
      toast.error(error.message);
    }
  };
  useEffect(() => {
    const modal = document.getElementById("my_modal_5");

    // Function to close modal when clicking outside
    const handleClickOutside = (event) => {
      if (event.target === modal) {
        modal.close();
      }
    };

    // Add event listener when component mounts
    document.addEventListener("click", handleClickOutside);

    // Remove event listener when component unmounts
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <>
      <div className="flex justify-center items-center bg-[url('https://i.ibb.co/svVbpj0/1849-R0l-VIEp-FTi-A3-MDgt-NTE.jpg')] bg-cover bg-no-repeat p-5 my-10 rounded-lg bg-center py-20">
        <div className="">
          <div className="max-w-3xl p-1">
            {/* assignment Details */}
            <div className="flex-1 px-4 py-7 bg-white border-2 border-yellow-200 rounded-lg shadow-md">
              <div className="flex items-center gap-5">
                <span className="text-sm font-light text-gray-800 ">
                  {new Date(deadline).toLocaleDateString()}
                </span>
                <span className="px-4 py-1 text-xs text-blue-800 uppercase bg-blue-200 rounded-full ">
                  {difficulty}
                </span>
              </div>

              <div>
                <h1 className="mt-2 text-3xl font-semibold text-gray-800 ">
                  {title}
                </h1>

                <p className="mt-2 text-lg text-gray-600">{description}</p>
                <p className="mt-6 text-sm font-bold text-gray-600 ">
                  Assignment Creator Details:
                </p>
                <div className="flex items-center gap-5">
                  <div>
                    <p className="mt-2 text-sm  text-gray-600 ">
                      Name: {student?.name}
                    </p>
                    <p className="mt-2 text-sm  text-gray-600 ">
                      Email: {student?.email}
                    </p>
                  </div>
                  <div className="rounded-full object-cover overflow-hidden w-14 h-14">
                    <img src={student?.photo} alt="" />
                  </div>
                </div>
                <p className="mt-6 text-lg font-bold text-gray-600 ">
                  Marks: {marks}
                </p>
              </div>
              {/* Open the modal using document.getElementById('ID').showModal() method */}
              <button
                className="btn w-full"
                onClick={() =>
                  document.getElementById("my_modal_5").showModal()
                }
              >
                Take Assignment
              </button>
            </div>
            {/* assignment submit Form */}
            <dialog
              id="my_modal_5"
              className="modal modal-bottom sm:modal-middle "
            >
              <div className="modal-box bg-none p-0">
                <div className="modal-action mt-0">
                  <section className="p-6 w-full  bg-white rounded-md shadow-md flex-1 md:min-h-[350px]">
                    <h2 className="text-lg font-semibold text-gray-700 capitalize ">
                      Take the Assignment
                    </h2>

                    <form method="dialog" onSubmit={handleFromSubmission}>
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
                        </div>

                        <div>
                          <label
                            className="text-gray-700 "
                            htmlFor="emailAddress"
                          >
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
                      <div className="  mt-6">
                        <button
                          type="submit"
                          className="btn w-full px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600"
                        >
                          Submit Assignment
                        </button>
                      </div>
                    </form>
                  </section>
                </div>
              </div>
            </dialog>
          </div>
        </div>
      </div>
    </>
  );
};

export default AssignmentDetails;

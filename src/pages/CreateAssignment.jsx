// and due date [use this package
import { useContext, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { AuthContext } from "../provider/AuthProvider";
import toast from "react-hot-toast";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const CreateAssignment = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const [startDate, setStartDate] = useState(new Date());

  const handleFormSubmission = async (e) => {
    e.preventDefault();
    const form = e.target;
    const title = form.title.value;
    const email = form.creator_email.value;
    const imageURL = form.imageURL.value;
    const deadline = startDate;
    const difficulty = form.difficulty.value;
    const marks = parseFloat(form.marks.value);
    if (marks < 50 || marks > 100) {
      return toast.error("Marks should be between 50 and 100");
    }
    const description = form.description.value;

    const cAssignmentData = {
      title,
      imageURL,
      deadline,
      difficulty,
      marks,
      description,
      student: {
        email,
        name: user?.displayName,
        photo: user?.photoURL,
      },
    };
    // console.log(cAssignmentData);
    try {
      const { data } = await axios.post(
        `${import.meta.env.VITE_API_URL}/asnmnts`,
        cAssignmentData,
        { withCredentials: true }
      );
      toast.success("Assignment created successfully");
      console.log(data);
      form.reset();
      setStartDate(new Date());
      navigate("/assignments");
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  return (
    <div className="bg-[url('https://i.ibb.co/svVbpj0/1849-R0l-VIEp-FTi-A3-MDgt-NTE.jpg')] bg-cover bg-no-repeat p-5 my-10 rounded-lg bg-center">
      <div className="flex justify-center items-center my-10">
        <section className=" p-5 bg-base-100 rounded-md shadow-md w-full max-w-3xl">
          <h2 className="text-2xl text-center font-semibold text-blue-400 capitalize ">
            Create a assignment
          </h2>

          <form onSubmit={handleFormSubmission}>
            <div className="grid gap-6 mt-4 grid-cols-2">
              <div>
                <label className=" " htmlFor="title">
                  Assignment Title
                </label>
                <input
                  id="title"
                  name="title"
                  type="text"
                  placeholder="title"
                  required
                  className="block w-full px-4 py-2 mt-2  bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
                />
              </div>

              <div>
                <label className=" " htmlFor="emailAddress">
                  Email Address
                </label>
                <input
                  id="emailAddress"
                  type="email"
                  name="creator_email"
                  defaultValue={user?.email}
                  disabled
                  required
                  className="block w-full px-4 py-2 mt-2  bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
                />
              </div>

              <div>
                <label className=" " htmlFor="imageURL">
                  Assignment Image
                </label>
                <input
                  id="imageURL"
                  type="link"
                  name="imageURL"
                  placeholder="imageURL"
                  required
                  className="block w-full px-4 py-2 mt-2  bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
                />
              </div>
              <div className="flex flex-col gap-2 ">
                <label className="">Deadline</label>
                <DatePicker
                  className="border p-2 rounded-md w-full"
                  selected={startDate}
                  onChange={(date) => setStartDate(date)}
                />
              </div>

              <div className="flex flex-col gap-2 ">
                <label className=" " htmlFor="category">
                  Assignment Difficulty
                </label>
                <select
                  name="difficulty"
                  id="difficulty"
                  required
                  className="border p-2 rounded-md"
                >
                  <option value="easy">Easy</option>
                  <option value="medium">Medium</option>
                  <option value="hard">Hard</option>
                </select>
              </div>
              <div>
                <label className=" " htmlFor="marks">
                  Marks
                </label>
                <input
                  id="marks"
                  name="marks"
                  type="number"
                  required
                  placeholder="marks"
                  className="block w-full px-4 py-2 mt-2  bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
                  min="100"
                  max="100"
                  defaultValue="100"
                  readOnly
                />
              </div>
            </div>
            <div className="flex flex-col gap-2 mt-4">
              <label className=" " htmlFor="description">
                Description
              </label>
              <textarea
                className="block w-full px-4 py-2 mt-2  bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
                name="description"
                id="description"
                required
                placeholder="description"
              ></textarea>
            </div>
            <div className="flex justify-end mt-6">
              <button className="px-8 py-2.5 w-full leading-5 text-blue-600 font-bold transition-colors duration-300 transhtmlForm bg-blue-100 rounded-md hover:bg-cyan-100 focus:outline-none focus:bg-gray-600">
                Create Assignment
              </button>
            </div>
          </form>
        </section>
      </div>
    </div>
  );
};

export default CreateAssignment;

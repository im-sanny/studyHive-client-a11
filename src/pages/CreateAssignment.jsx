// and due date [use this package
import { useContext, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { AuthContext } from "../provider/AuthProvider";

const CreateAssignment = () => {
  const { user } = useContext(AuthContext);
  const [startDate, setStartDate] = useState(new Date());

  const handleFormSubmission = async (e) => {
    e.preventDefault();
    const form = e.target;
    const title = form.title.value;
    const email = form.email.value;
    const deadline = startDate;
    const difficulty = form.difficulty.value;
    const marks = parseFloat(form.marks.value);
    const description = form.description.value;

    const jobData = {
      deadline,
      title,
      difficulty,
      description,
      marks,
      student: {
        email,
        name: user?.displayName,
        photo: user?.photoURL,
      },
    };
    console.log(jobData);
  };

  return (
    <div className="bg-[url('https://i.ibb.co/svVbpj0/1849-R0l-VIEp-FTi-A3-MDgt-NTE.jpg')] bg-cover bg-no-repeat p-5 my-10 rounded-lg bg-center">
      <div className="flex justify-center items-center my-10">
        <section className=" p-5 bg-white rounded-md shadow-md w-full lg:w-auto">
          <h2 className="text-lg font-semibold text-gray-700 capitalize ">
            Create a assignment
          </h2>

          <form onSubmit={handleFormSubmission}>
            <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
              <div>
                <label className="text-gray-700 " htmlFor="title">
                  Assignment Title
                </label>
                <input
                  id="title"
                  name="title"
                  type="text"
                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
                />
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
                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
                />
              </div>

              <div>
                <label className="text-gray-700 " htmlFor="imageURL">
                  Assignment Image
                </label>
                <input
                  id="imageURL"
                  type="link"
                  name="image"
                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
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

              <div className="flex flex-col gap-2 ">
                <label className="text-gray-700 " htmlFor="category">
                  Assignment Difficulty
                </label>
                <select
                  name="difficulty"
                  id="difficulty"
                  className="border p-2 rounded-md"
                >
                  <option value="easy">Easy</option>
                  <option value="medium">Medium</option>
                  <option value="hard">Hard</option>
                </select>
              </div>
              <div>
                <label className="text-gray-700 " htmlFor="marks">
                  Marks
                </label>
                <input
                  id="marks"
                  name="marks"
                  type="number"
                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
                />
              </div>
            </div>
            <div className="flex flex-col gap-2 mt-4">
              <label className="text-gray-700 " htmlFor="description">
                Description
              </label>
              <textarea
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
                name="description"
                id="description"
              ></textarea>
            </div>
            <div className="flex justify-end mt-6">
              <button className="px-8 py-2.5 w-full leading-5 text-white transition-colors duration-300 transhtmlForm bg-gray-500 rounded-md hover:bg-gray-800 focus:outline-none focus:bg-gray-600">
                Create
              </button>
            </div>
          </form>
        </section>
      </div>
    </div>
  );
};

export default CreateAssignment;

/* eslint-disable react/no-unescaped-entities */
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

const Features = () => {
  return (
    <div className="mt-20">
      <div className="text-center mt-5">
        <h2 className="badge uppercase p-4 bg-rose-50 text-rose-400">
          StudyHive Features
        </h2>
        <h1 className="text-5xl max-w-3xl mx-auto font-bold mt-5 mb-10">
          Check out StudyHive's helpful features
        </h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 ">
        <div
          data-aos="fade-right"
          data-aos-duration="2000"
          className="w-full max-w-sm bg-[#fff6b5] rounded-md shadow-md hover:scale-[1.05] transition-all mb-10 p-5 mx-auto"
        >
          <div className="">
            <img
              src="https://i.ibb.co/zXwVygq/vecteezy-white-clipboard-task-management-todo-check-list-efficient-9315274.png"
              alt=""
              className="h-24"
            />
          </div>

          <div>
            <h1 className="mt-2 text-lg  text-gray-800 font-bold">
              Create Assignments Easily
            </h1>

            <p className="mt-2 text-sm text-gray-400 font-semibold flex-grow">
              Seamlessly create assignments for all users with intuitive fields
              such as title, description, marks, difficulty level, and due date
              selection. Simplify task allocation and management.
            </p>

            <div className="space-y-1 mx-auto pb-4 mt-4">
              <p className="badge mr-1 p-3">Create Assignments</p>
              <p className="badge p-3">Assignment Management</p>
              <p className="badge mr-1 p-3">Task Distribution</p>
              <p className="badge p-3">Due Date Tracking</p>
              <p className="badge p-3">Difficulty Level Selection</p>
            </div>
          </div>
        </div>

        <div
          data-aos="fade-up"
          data-aos-duration="1500"
          data-aos-easing="linear"
          className="w-full max-w-sm bg-[#F8CAED] rounded-md shadow-md hover:scale-[1.05] transition-all mb-10 p-5 mx-auto"
        >
          <div className="flex items-center">
            <img
              src="https://i.ibb.co/fkF9BFS/vecteezy-white-clipboard-task-management-todo-check-list-efficient-8879451.png"
              alt=""
              className="h-24"
            />
          </div>

          <div>
            <h1 className="mt-2 text-lg  text-gray-800 font-bold">
              Explore and Filter Assignments
            </h1>

            <p className="mt-2 text-sm text-gray-500 font-semibold">
              Easily browse through all assignments created by users and filter
              them based on difficulty levels. Efficiently organize tasks and
              find assignments suited to your preferences.
            </p>
            <div className="space-y-1 mx-auto pb-4 mt-4">
              <p className="badge mr-1 p-3">View Assignments</p>
              <p className="badge p-3">Filter by Difficulty</p>
              <p className="badge mr-1 p-3">Task Organization</p>
              <p className="badge p-3">Assignment Catalog</p>
              <p className="badge p-3">Assignment Exploration</p>
            </div>
          </div>
        </div>
        <div
          data-aos="fade-down"
          data-aos-duration="1500"
          data-aos-easing="linear"
          className="w-full max-w-sm bg-[#E0F7FF] rounded-md shadow-md hover:scale-[1.05] transition-all mb-10 p-5 mx-auto"
        >
          <div className="flex items-center">
            <img
              src="https://i.ibb.co/BLCvSvw/vecteezy-3d-folder-and-paper-for-management-file-document-efficient-17218009.png"
              alt=""
              className="h-24"
            />
          </div>

          <div>
            <h1 className="mt-2 text-lg  text-gray-800 font-bold">
              Manage Your Assignments Effectively
            </h1>

            <p className="mt-2 text-sm text-gray-400 font-semibold">
              Empower users to update or delete their assignments effortlessly.
              Stay in control of tasks with user-specific management options,
              ensuring task accuracy and relevance.
            </p>
            <div className="space-y-1 mx-auto pb-4 mt-4">
              <p className="badge mr-1 p-3">Update Assignments</p>
              <p className="badge p-3">Delete Assignments</p>
              <p className="badge mr-1 p-3">User-Specific Tasks</p>
              <p className="badge p-3">Task Modification</p>
              <p className="badge p-3">Task Deletion</p>
            </div>
          </div>
        </div>
        <div
          data-aos="fade-left"
          data-aos-duration="2000"
          className="w-full max-w-sm bg-[#B8FFD9] rounded-md shadow-md hover:scale-[1.05] transition-all mb-10 p-5 mx-auto"
        >
          <div className="flex items-center">
            <img
              src="https://i.ibb.co/YyhYQLN/vecteezy-3d-high-quality-guarantee-symbol-medal-button-with-18842667.png"
              alt=""
              className="h-24"
            />
          </div>

          <div>
            <h1 className="mt-2 text-lg  text-gray-800 font-bold">
              Submit and Evaluate Assignments
            </h1>

            <p className="mt-2 text-sm text-gray-400 font-semibold">
              Submit assignments with ease and receive timely evaluation and
              feedback. Streamline the marking and grading process while
              maintaining transparency and accountability.
            </p>
            <div className="space-y-1 mx-auto pb-4 mt-4">
              <p className="badge mr-1 p-3">Submit Assignments</p>
              <p className="badge p-3">Submit Assignments</p>
              <p className="badge mr-1 p-3">Feedback Provision</p>
              <p className="badge p-3">Submission Status</p>
              <p className="badge p-3">Marking and Grading</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;

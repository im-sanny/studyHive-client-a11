/* eslint-disable react/no-unescaped-entities */
const Faq = () => {
  return (
    <div>
      <div className="my-10 mx-auto">
        <h1 className="text-4xl font-bold text-center">
          Your Question's Our Answer
        </h1>
      </div>
      <section className="bg-base-200 mb-10 rounded-md">
        <div className="container flex flex-col justify-center p-4 mx-auto md:p-8">
          <p className="p-2 text-sm font-medium tracking-wider text-center uppercase">
            How it works
          </p>
          <h2 className="mb-12 text-4xl font-bold leading-none text-center sm:text-5xl">
            Frequently Asked Questions
          </h2>
          <div className="flex flex-col divide-y sm:px-8 lg:px-12 xl:px-32 divide-gray-700 dark:divide-gray-300">
            <details>
              <summary className="py-2 outline-none cursor-pointer focus:underline">
                How do I create an account on StudyHive?
              </summary>
              <div className="px-4 pb-4">
                <p>
                  Creating an account on StudyHive is easy! Simply navigate to
                  the registration page and fill out the required information,
                  including your email address, username, and password. Once
                  registered, you can access all the features and
                  functionalities of StudyHive, including creating assignments,
                  joining study groups, and submitting your work.
                </p>
              </div>
            </details>
            <details>
              <summary className="py-2 outline-none cursor-pointer focus:underline">
                Can I create assignments for specific difficulty levels?
              </summary>
              <div className="px-4 pb-4">
                <p>
                  Yes, absolutely! When creating an assignment, you have the
                  option to specify the difficulty level as easy, medium, or
                  hard. This helps ensure that the assignments cater to a
                  diverse range of learners with varying levels of proficiency
                  and expertise. Whether you're looking to challenge yourself
                  with a difficult assignment or provide additional support for
                  beginners, StudyHive allows you to customize assignments
                  according to your preferences.
                </p>
              </div>
            </details>
            <details>
              <summary className="py-2 outline-none cursor-pointer focus:underline">
                How can I view the assignments I've submitted on StudyHive?
              </summary>
              <div className="px-4 pb-4 space-y-2">
                <p>
                  To view the assignments you've submitted on StudyHive, simply
                  navigate to the "My Submitted Assignments" page, accessible
                  from your user dashboard. Here, you'll find a comprehensive
                  list of all the assignments you've completed and submitted.
                  You can review the assignment titles, status, marks obtained,
                  and any feedback provided by instructors. This page offers a
                  convenient way to track your progress and stay organized
                  throughout your learning journey.
                </p>
              </div>
            </details>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Faq;

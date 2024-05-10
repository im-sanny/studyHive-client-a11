/* eslint-disable react/no-unescaped-entities */

import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div>
      <section
        className="flex items-center bg-cover bg-center h-[100vh] "
        style={{
          backgroundImage: `url('https://i.ibb.co/MGLVLC0/Error-404.jpg')`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <div className="container flex flex-col items-center justify-center">
          <div className="max-w-lg text-center">
            <p className="text-2xl font-semibold text-black md:text-3xl">
              Sorry, we couldn't find this page.
            </p>
            <p className="mt-4 mb-8 text-black font-semibold">
              But don't worry, you can find plenty of other things on our
              homepage.
            </p>
            <Link
              to="/"
              rel="noopener noreferrer"
              href="#"
              className="px-8 py-3 font-semibold rounded bg-violet-400 dark:bg-violet-700 text-gray-900 dark:text-gray-50"
            >
              Back to homepage
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ErrorPage;

/* eslint-disable react/no-unescaped-entities */
import Marquee from 'react-fast-marquee';
const MkSlider = () => {
  return (
    <>
      <div className="text-center -mt-[40px]">
        <p className="badge border-none font-bold text-blue-500 bg-blue-50 p-4 text-md">
          Education for Everyone
        </p>
        <h1 className="text-4xl font-bold text-center my-5">
          Hear from students, <br /> why you should chose StudyHive!
        </h1>
        <Marquee
          gradient={true}
          gradientColor="rgb(249, 250, 251)"
          gradientWidth={100}
        >
          <div className=" w-full grid grid-cols-4">
            <div className="flex flex-col max-w-sm mx-4 my-6 shadow-lg rounded-lg">
              <div className="px-4 py-12 rounded-t-lg sm:px-8 md:px-12 bg-lime-200">
                <p className="relative px-6 py-1 text-lg italic text-center text-gray-100 dark:text-gray-800">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    fill="currentColor"
                    className="w-8 h-8 text-violet-400 dark:text-violet-600"
                  >
                    <path d="M232,246.857V16H16V416H54.4ZM48,48H200V233.143L48,377.905Z"></path>
                    <path d="M280,416h38.4L496,246.857V16H280ZM312,48H464V233.143L312,377.905Z"></path>
                  </svg>
                  StudyHive has transformed my learning experience and my carer.
                  The platform's intuitive interface and diverse resources have
                  helped me excel in my studies. I highly recommend it to anyone
                  who's looking to boost their academic performance
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    fill="currentColor"
                    className="absolute right-0 w-8 h-8 text-violet-400 dark:text-violet-600"
                  >
                    <path d="M280,185.143V416H496V16H457.6ZM464,384H312V198.857L464,54.1Z"></path>
                    <path d="M232,16H193.6L16,185.143V416H232ZM200,384H48V198.857L200,54.1Z"></path>
                  </svg>
                </p>
              </div>
              <div className="flex flex-col items-center justify-center p-8 rounded-b-lg bg-lime-200">
                <img
                  src="https://i.ibb.co/8Pxzwm7/female-student.png"
                  alt=""
                  className="w-16 h-16 mb-2 -mt-16 bg-center bg-cover rounded-full"
                />
                <p className="text-xl font-semibold leading-tight">Emily</p>
                <p className="text-sm uppercase">Mathematics</p>
              </div>
            </div>
            <div className="flex flex-col max-w-sm mx-4 my-6 shadow-lg rounded-lg">
              <div className="px-4 py-12 rounded-t-lg sm:px-8 md:px-12 bg-yellow-50 text-black">
                <p className="relative px-6 py-1 text-lg italic text-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    fill="currentColor"
                    className="w-8 h-8 text-violet-400 dark:text-violet-600"
                  >
                    <path d="M232,246.857V16H16V416H54.4ZM48,48H200V233.143L48,377.905Z"></path>
                    <path d="M280,416h38.4L496,246.857V16H280ZM312,48H464V233.143L312,377.905Z"></path>
                  </svg>
                  Choosing StudyHive was one of the best decisions I made for my
                  education. The supportive community, engaging content, and
                  personalized approach have made learning enjoyable and
                  effective. I'm grateful for this invaluable resource, thanks!
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    fill="currentColor"
                    className="absolute right-0 w-8 h-8 text-violet-400 dark:text-violet-600"
                  >
                    <path d="M280,185.143V416H496V16H457.6ZM464,384H312V198.857L464,54.1Z"></path>
                    <path d="M232,16H193.6L16,185.143V416H232ZM200,384H48V198.857L200,54.1Z"></path>
                  </svg>
                </p>
              </div>
              <div className="flex flex-col items-center justify-center p-8 rounded-b-lg bg-yellow-50 ">
                <img
                  src="https://i.ibb.co/cJhWzqt/student-1.png"
                  alt=""
                  className="w-16 h-16 mb-2 -mt-16 bg-center bg-cover rounded-full"
                />
                <p className="text-xl font-semibold leading-tight">Liam</p>
                <p className="text-sm uppercase">Biology</p>
              </div>
            </div>
            <div className="flex flex-col max-w-sm mx-4 my-6 shadow-lg rounded-lg">
              <div className="px-4 py-12 rounded-t-lg sm:px-8 md:px-12 bg-cyan-200">
                <p className="relative px-6 py-1 text-lg italic text-center text-gray-100 dark:text-gray-800">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    fill="currentColor"
                    className="w-8 h-8 text-violet-400 dark:text-violet-600"
                  >
                    <path d="M232,246.857V16H16V416H54.4ZM48,48H200V233.143L48,377.905Z"></path>
                    <path d="M280,416h38.4L496,246.857V16H280ZM312,48H464V233.143L312,377.905Z"></path>
                  </svg>
                  StudyHive offers a unique blend of innovation and
                  accessibility. From interactive lessons to collaborative study
                  groups, it caters to diverse learning styles and fosters a
                  sense of belonging. I'm proud to be part of such a dynamic
                  learning community.
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    fill="currentColor"
                    className="absolute right-0 w-8 h-8 text-violet-400 dark:text-violet-600"
                  >
                    <path d="M280,185.143V416H496V16H457.6ZM464,384H312V198.857L464,54.1Z"></path>
                    <path d="M232,16H193.6L16,185.143V416H232ZM200,384H48V198.857L200,54.1Z"></path>
                  </svg>
                </p>
              </div>
              <div className="flex flex-col items-center justify-center p-8 rounded-b-lg bg-cyan-200">
                <img
                  src="https://i.ibb.co/wsFnZBv/student-2.png"
                  alt=""
                  className="w-16 h-16 mb-2 -mt-16 bg-center bg-cover rounded-full "
                />
                <p className="text-xl font-semibold leading-tight">Alex</p>
                <p className="text-sm uppercase">CS</p>
              </div>
            </div>
            <div className="flex flex-col max-w-sm mx-4 my-6 shadow-lg rounded-lg">
              <div className="px-4 py-12 rounded-t-lg sm:px-8 md:px-12 bg-teal-200">
                <p className="relative px-6 py-1 text-lg italic text-center text-gray-100 dark:text-gray-800">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    fill="currentColor"
                    className="w-8 h-8 text-violet-400 dark:text-violet-600"
                  >
                    <path d="M232,246.857V16H16V416H54.4ZM48,48H200V233.143L48,377.905Z"></path>
                    <path d="M280,416h38.4L496,246.857V16H280ZM312,48H464V233.143L312,377.905Z"></path>
                  </svg>
                  I've tried many online learning platforms, but StudyHive
                  stands out for its commitment to student success. The
                  platform's commitment to excellence, coupled with its
                  user-friendly interface, has made my learning journey seamless
                  and rewarding.
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    fill="currentColor"
                    className="absolute right-0 w-8 h-8 text-violet-400 dark:text-violet-600"
                  >
                    <path d="M280,185.143V416H496V16H457.6ZM464,384H312V198.857L464,54.1Z"></path>
                    <path d="M232,16H193.6L16,185.143V416H232ZM200,384H48V198.857L200,54.1Z"></path>
                  </svg>
                </p>
              </div>
              <div className="flex flex-col items-center justify-center p-8 rounded-b-lg bg-teal-200">
                <img
                  src="https://i.ibb.co/bF0gMFM/student.png"
                  alt=""
                  className="w-16 h-16 mb-2 -mt-16 bg-center bg-cover rounded-full"
                />
                <p className="text-xl font-semibold leading-tight">Sophia</p>
                <p className="text-sm uppercase">Literature</p>
              </div>
            </div>
          </div>
        </Marquee>
      </div>
    </>
  );
};

export default MkSlider;

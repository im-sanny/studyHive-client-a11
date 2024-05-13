/* eslint-disable react/no-unescaped-entities */
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

const Banner = () => {
  return (
    <div className="my-10">
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <section className="bg-gray-800 dark:bg-gray-100 text-gray-100 dark:text-gray-800 rounded-lg lg:p-10">
            <div className="container flex flex-col justify-center mx-auto py- lg:flex-row lg:justify-between">
              <div
                data-aos="fade-right"
                className="flex items-center justify-center lg:w-3/6 "
              >
                <img
                  src="https://i.ibb.co/TtsRT14/4807.jpg"
                  alt=""
                  className="object-cover h-[405px] w-[800px] rounded-md p-5"
                />
              </div>
              <div
                data-aos="fade-left"
                className="lg:w-3/6 lg:h-[400px] py-5 flex flex-col justify-center text-center rounded-sm lg:text-left md:text-left"
              >
                <h1 className="text-5xl lg:mx-0 mx-3 font-bold leading-none sm:text-6xl">
                  Welcome to StudyHive, where learning meets innovation.
                </h1>
                <p className="mt-3 mb-3 text-lg lg:mx-0 mx-8">
                  Discover endless knowledge with StudyHive. Dive into subjects
                  from science to literature. Join us today!
                </p>
                <div className="flex flex-col lg:mx-0 mx-8 sm:items-center sm:justify-center sm:flex-row lg:space-y-0 space-y-5 sm:space-x-4 lg:justify-start">
                  <a
                    rel="noopener noreferrer"
                    href="#"
                    className="px-8 py-3 text-lg font-semibold rounded bg-violet-400 dark:bg-violet-600 text-gray-900 dark:text-gray-50"
                  >
                    <Link to={"/login"}>Login</Link>
                  </a>
                  <a
                    rel="noopener noreferrer"
                    href="#"
                    className="px-8 py-3 text-lg font-semibold border rounded border-gray-100 dark:border-gray-800"
                  >
                    <Link to={"/registration"}>Registration</Link>
                  </a>
                </div>
              </div>
            </div>
          </section>
        </SwiperSlide>
        <SwiperSlide>
          <section className="bg-gray-800 dark:bg-gray-100 text-gray-100 dark:text-gray-800 rounded-lg lg:p-10">
            <div className="container flex flex-col justify-center mx-auto py- lg:flex-row lg:justify-between">
              <div className="flex items-center justify-center lg:w-3/6 ">
                <img
                  src="https://i.ibb.co/Y3DfGyc/6851481.jpg"
                  alt=""
                  className="object-cover h-[405px] w-[800px] rounded-md p-5"
                />
              </div>
              <div className="lg:w-3/6 lg:h-[400px] py-5 flex flex-col justify-center text-center rounded-sm lg:text-left md:text-left">
                <h1 className="text-5xl lg:mx-0 mx-3 font-bold leading-none sm:text-6xl">
                  Empower your mind with StudyHive's diverse learning tools.
                </h1>
                <p className="mt-3 mb-3 text-lg lg:mx-0 mx-8">
                  Welcome to StudyHive, your learning hub. Explore new interests
                  and connect with others. Start now!
                </p>
                <div className="flex flex-col lg:mx-0 mx-8 sm:items-center sm:justify-center sm:flex-row lg:space-y-0 space-y-5 sm:space-x-4 lg:justify-start">
                  <a
                    rel="noopener noreferrer"
                    href="#"
                    className="px-8 py-3 text-lg font-semibold rounded bg-violet-400 dark:bg-violet-600 text-gray-900 dark:text-gray-50"
                  >
                    <Link to={"/login"}>Login</Link>
                  </a>
                  <a
                    rel="noopener noreferrer"
                    href="#"
                    className="px-8 py-3 text-lg font-semibold border rounded border-gray-100 dark:border-gray-800"
                  >
                    <Link to={"/registration"}>Registration</Link>
                  </a>
                </div>
              </div>
            </div>
          </section>
        </SwiperSlide>
        <SwiperSlide>
          <section className="bg-gray-800 dark:bg-gray-100 text-gray-100 dark:text-gray-800 rounded-lg lg:p-10">
            <div className="container flex flex-col justify-center mx-auto py- lg:flex-row lg:justify-between">
              <div className="flex items-center justify-center lg:w-3/6 ">
                <img
                  src="https://i.ibb.co/KLLr3RF/5836.jpg"
                  alt=""
                  className="object-cover h-[405px] w-[800px] rounded-md p-5"
                />
              </div>
              <div className="lg:w-3/6 lg:h-[400px] py-5 flex flex-col justify-center text-center rounded-sm lg:text-left md:text-left">
                <h1 className="text-5xl lg:mx-0 mx-3 font-bold leading-none sm:text-6xl">
                  Discover the joy of learning with StudyHive's resources.
                </h1>
                <p className="mt-3 mb-3 text-lg lg:mx-0 mx-8">
                  Welcome to StudyHive, where learning thrives. Explore diverse
                  subjects with us. Join today!
                </p>
                <div className="flex flex-col lg:mx-0 mx-8 sm:items-center sm:justify-center sm:flex-row lg:space-y-0 space-y-5 sm:space-x-4 lg:justify-start">
                  <a
                    rel="noopener noreferrer"
                    href="#"
                    className="px-8 py-3 text-lg font-semibold rounded bg-violet-400 dark:bg-violet-600 text-gray-900 dark:text-gray-50"
                  >
                    <Link to={"/login"}>Login</Link>
                  </a>
                  <a
                    rel="noopener noreferrer"
                    href="#"
                    className="px-8 py-3 text-lg font-semibold border rounded border-gray-100 dark:border-gray-800"
                  >
                    <Link to={"/registration"}>Registration</Link>
                  </a>
                </div>
              </div>
            </div>
          </section>
        </SwiperSlide>
        <SwiperSlide>
          <section className="bg-gray-800 dark:bg-gray-100 text-gray-100 dark:text-gray-800 rounded-lg lg:p-10">
            <div className="container flex flex-col justify-center mx-auto py- lg:flex-row lg:justify-between">
              <div className="flex items-center justify-center lg:w-3/6 ">
                <img
                  src="https://i.ibb.co/wp2CVR3/vecteezy-learning-mathematics-and-studying-concept-positive-boy-and-13489133.jpg"
                  alt=""
                  className="object-cover h-[405px] w-[800px] rounded-md p-5"
                />
              </div>
              <div className="lg:w-3/6 lg:h-[400px] py-5 flex flex-col justify-center text-center rounded-sm lg:text-left md:text-left">
                <h1 className="text-5xl lg:mx-0 mx-3 font-bold leading-none sm:text-6xl">
                  Join StudyHive for an enriching educational journey today!
                </h1>
                <p className="mt-3 mb-3 text-lg lg:mx-0 mx-8">
                  At StudyHive, education is for everyone. Quality resources
                  cater to all needs. Join us!y!
                </p>
                <div className="flex flex-col lg:mx-0 mx-8 sm:items-center sm:justify-center sm:flex-row lg:space-y-0 space-y-5 sm:space-x-4 lg:justify-start">
                  <a
                    rel="noopener noreferrer"
                    href="#"
                    className="px-8 py-3 text-lg font-semibold rounded bg-violet-400 dark:bg-violet-600 text-gray-900 dark:text-gray-50"
                  >
                    <Link to={"/login"}>Login</Link>
                  </a>
                  <a
                    rel="noopener noreferrer"
                    href="#"
                    className="px-8 py-3 text-lg font-semibold border rounded border-gray-100 dark:border-gray-800"
                  >
                    <Link to={"/registration"}>Registration</Link>
                  </a>
                </div>
              </div>
            </div>
          </section>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;

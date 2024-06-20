import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function Landing() {
  return (
    <div className="flex w-full lg:flex-row flex-col justify-center items-center">
      <motion.section
        className="lg:w-[70%] lg:p-20 p-5 mt-20"
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <div className="w-full"><span className="text-2xl lg:text-4xl font-bold mb-4">Made Easy</span> <span className="text-3xl lg:text-5xl font-bold mb-4 text-blue-600">
          Video Captioning</span>{" "}
          <br />
          <span className="text-2xl lg:text-4xl font-bold mb-4"> with{"     "}</span>

          <span className="text-blue-500 text-3xl lg:text-5xl font-bold mb-4">Spyno</span>

        </div>
        <p className="text-lg lg:text-2xl mb-8">
          Easily add captions to your videos. Just enter the URL, input your captions, and watch your video with captions displayed in real-time.
        </p>
        <div className="flex justify-center items-center gap-3">
        <button>
          <Link
            to="/main"
            className=" lg:w-auto px-8 py-3 mx-auto bg-blue-500 text-white font-bold rounded-lg shadow-md hover:bg-blue-700"
          >
            Get Started
          </Link>
        </button>
          <button className=" lg:w-auto px-8 py-3 bg-pink-500 text-white font-bold rounded-lg shadow-md hover:bg-pink-700"><Link to="/main">Free Trial</Link></button>
        </div>
      </motion.section>

    </div>
  );
}

export default Landing;

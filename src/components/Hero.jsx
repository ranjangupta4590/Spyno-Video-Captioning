import React, { useState } from 'react';
import VideoPlayer from './VideoPlayer';
import CaptionInput from './CaptionInput';
import { motion } from 'framer-motion';
import logo from '../Assets/logo.png'

function Hero() {
  const [videoUrl, setVideoUrl] = useState('');
  const [captions, setCaptions] = useState([]);

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col justify-center items-center">
      {!videoUrl && (
        <motion.div
          className="text-center p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl lg:text-6xl font-bold mb-4">
            Welcome to <span className="text-pink-500">Spyno</span>
          </h1>
          <p className="text-lg lg:text-2xl mb-8">
            Easily add captions to your videos. Just enter the URL, input your captions, and watch your video with captions displayed in real-time.
          </p>
          <motion.div
            initial={{ y: 50 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <input
              type="text"
              className="w-full lg:w-1/2 p-3 border border-white rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 text-center font-bold"
              placeholder="Enter video URL here ➡ "
              value={videoUrl}
              onChange={(e) => { setVideoUrl(e.target.value); setCaptions([]); }}
            />
          </motion.div>
        </motion.div>
      )}
      {videoUrl && (
        <motion.div
          className="container mx-auto p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="mb-6">
            <input
              type="text"
              className="w-full mt-20 p-3 border border-white rounded-md shadow-sm  text-center font-bold"
              placeholder="Enter video URL here"
              value={videoUrl}
              onChange={(e) => { setVideoUrl(e.target.value); setCaptions([]); }}
            />
          </div>
          <div className="flex flex-col lg:flex-row gap-10">
            <div className="w-full lg:w-1/2">
              <VideoPlayer videoUrl={videoUrl} captions={captions} />
            </div>
            <div className="w-full lg:w-1/2">
              <CaptionInput captions={captions} setCaptions={setCaptions} videoURL={videoUrl} />
            </div>
          </div>
        </motion.div>
      )}
    </div>
  );
}

export default Hero;

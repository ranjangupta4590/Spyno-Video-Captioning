
import React, { useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import VideoPlayer from './VideoPlayer';
import CaptionsContext from '../CaptionContext';

function Player() {
  const { videoID } = useParams();
  const navigate = useNavigate();
  const { captions } = useContext(CaptionsContext);
  const videoURL = `https://www.youtube.com/watch?v=${videoID}`;

  return (
    <div className="flex flex-col items-center pt-20 relative">
      <button
        className="absolute top-5 left-5 px-4 py-2 mb-4 bg-gray-300 rounded"
        onClick={() => navigate('/main')}
      >
        <span className='text-2xl'>←</span> Main
      </button>
      <VideoPlayer videoUrl={videoURL} captions={captions} />
    </div>
  );
}

export default Player;

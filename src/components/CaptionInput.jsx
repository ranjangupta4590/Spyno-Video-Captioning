
import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import CaptionsContext from '../CaptionContext';

function CaptionInput({videoURL}) {
  const [captionText, setCaptionText] = useState("");
  const [timestamp, setTimestamp] = useState("");
  const navigate = useNavigate();
  const { setCaptions, captions } = useContext(CaptionsContext);

  const addCaptionAndNavigate = () => {
    if (captionText && timestamp) {
      const newCaption = { text: captionText, time: parseFloat(timestamp) };
      setCaptions([...captions, newCaption]);
      setCaptionText("");
      setTimestamp("");
    }

    if (videoURL) {
      const videoID = videoURL.split('v=')[1] || 'default';
      navigate(`/main/${videoID}`);
    }
  };

  return (
    <div className="bg-gray-100 p-4 rounded-lg shadow-lg mb-4 w-full mx-auto">
      <div className="mb-4">
        
        <textarea
          className="w-full px-3 py-2 mb-2 border border-pink-500 rounded-md"
          value={captionText}
          onChange={(e) => setCaptionText(e.target.value)}
          placeholder="Enter caption text"
        />
        <input
          className="w-full px-3 py-2 mb-2 border border-pink-500 rounded-md"
          type="number"
          step="0.1"
          value={timestamp}
          onChange={(e) => setTimestamp(e.target.value)}
          placeholder="Enter timestamp (in seconds)"
        />
        <button
          className="px-4 py-2 bg-pink-500 text-white rounded-md w-full"
          onClick={addCaptionAndNavigate}
        >
          Add Caption
        </button>
      </div>
    </div>
  );
}

export default CaptionInput;

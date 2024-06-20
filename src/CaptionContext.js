// CaptionsContext.js
import React, { createContext, useState } from 'react';

const CaptionsContext = createContext();

export const CaptionsProvider = ({ children }) => {
  const [captions, setCaptions] = useState([]);
  return (
    <CaptionsContext.Provider value={{ captions, setCaptions }}>
      {children}
    </CaptionsContext.Provider>
  );
};

export default CaptionsContext;

import React, { useState, useEffect } from 'react';

export function Vti2S() {
  const [lightsStatus, setLightsStatus] = useState({
    'TRACK 1 OUT': false,
    'TRACK 1 IN': false,
    'TRACK 2 OUT': false,
    'TRACK 2 IN': false,
    'CAB 1 OUT': false,
    'CAB 2 OUT': false,
    'VITAL IN 1': true,
    'VITAL IN 2': true,
  });

  const [healthStatus, setHealthStatus] = useState(true); // Initialize healthStatus to true

  useEffect(() => {
    let flashTimeout; // Declare a variable for the timeout

    const toggleFlash = () => {
      setLightsStatus(prev => {
        // Randomly choose whether to toggle IN or OUT
        const toggleIn = Math.random() > 0.7;

        return {
          ...prev,
          'TRACK 1 OUT': toggleIn ? false : !prev['TRACK 1 OUT'],
          'TRACK 1 IN': toggleIn ? !prev['TRACK 1 IN'] : false,
        };
      });

      // Random interval around ±500ms
      const nextFlashIn = Math.random() > 0.5 ? 500 + Math.random() * 500 : 500 - Math.random() * 500;
      flashTimeout = setTimeout(toggleFlash, nextFlashIn);
    };

    toggleFlash(); // Initiate the first flash

    return () => clearTimeout(flashTimeout); // Clear the timeout when the component unmounts
  }, []);

  return (
    <div className="border-2 border-black p-4 bg-gray-100 max-w-xs flex flex-col">
      <div className="text-center border-b border-black pb-2 mb-2">
        <h2 className="text-lg font-bold border-4 bg-white">VTI-2S</h2>
      </div>
      <div className="flex-grow space-y-2">
        {Object.keys(lightsStatus).map((item) => (
          <div className="flex items-center" key={item}>
            <div className={`border-2 rounded-full w-4 h-4 mr-2 flex-shrink-0 ${lightsStatus[item] ? 'bg-green-500' : 'border-black'}`}></div>
            <p className="p-1">{item}</p>
          </div>
        ))}
      </div>
      <div className="mt-auto">
        <div className="flex items-center mt-4">
          <div className={`border-2 rounded-full w-4 h-4 mr-2  flex-shrink-0 ${healthStatus ? 'bg-green-500' : 'border-black'}`}>
            {/* Health light */}
          </div>
          <p>HEALTH</p>
        </div>
        <div className="flex justify-center items-center mt-4">
          <div className="w-10 h-5 flex items-center bg-gray-300 rounded-full p-1">
            {/* This is the toggle */}
            <div className="toggle-dot w-4 h-4 bg-white rounded-full shadow-md transform translate-x-0"></div>
          </div>
          {/* This is the button */}
          <button className="ml-2 bg-gray-300 w-8 h-8 flex items-center justify-center rounded-full border-2 border-black">
            <svg
              className="w-4 h-4 text-black"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path d="M6 9l6 6 6-6"></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

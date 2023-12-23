export function Vio86() {
    const lightsStatus = {
      'VITAL IN 1': true,
      'VITAL IN 2': true,
      'VITAL IN 3': false,
      'VITAL IN 4': false,
      'VITAL IN 5': false,
      'VITAL IN 6': false,
      'VITAL IN 7': false,
      'VITAL IN 8': false,
      'VITAL IN 9': false,
      'BANK 1': true,
      'VITAL OUT 1': true,
      'VITAL OUT 2': false,
      'VITAL OUT 3': false,
      'BANK 2': true,
      'VITAL OUT 4': false,
      'VITAL OUT 5': false,
      'VITAL OUT 6': false,
      'BANK 1 HEALTH': true,
      'BANK 2 HEALTH': true,
    };
  
    const healthStatus = true; // Static healthStatus set to true
  
    return (
      <div className="border-2 border-black p-4 bg-gray-100 max-w-xs flex flex-col">
        <div className="text-center border-b border-black pb-2 mb-2">
          <h2 className="text-lg font-bold border-4 bg-white">VIO-86S</h2>
        </div>
        <div className="flex-grow space-y-2">
          {Object.entries(lightsStatus).map(([item, isOn]) => (
            <div className="flex items-center" key={item}>
              <div
                className={`border-2 rounded-full w-4 h-4 mr-2 flex-shrink-0 ${
                  isOn ? 'bg-green-500' : 'bg-gray-300'
                }`}>
                  {/* Light status indicator */}
              </div>
              <p className="p-1">{item}</p>
            </div>
          ))}
        </div>
        <div className="mt-auto">
        <div className="flex items-center mt-4">
          <div
            className={`border-2 rounded-full w-4 h-4 mr-2 flex-shrink-0 ${
              healthStatus ? 'bg-green-500' : 'border-black'
            }`}>
            {/* Static Health light */}
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
  
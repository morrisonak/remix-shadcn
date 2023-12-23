export function Cab16s() {
  const lightsStatus = {
    'CAB 1 OUT': true,
    'CAB 2 OUT': true,
    'CAB 3 OUT': false,
    'CAB 4 OUT': false,
    'CAB 5 OUT': false,
    'CAB 6 OUT': false,
    'CAB 7 OUT': false,
    'CAB 8 OUT': false,
    'CAB 9 OUT': false,
    'CAB 10 OUT': false,
    'CAB 11 OUT': false,
    'CAB 12 OUT': false,
    'CAB 13 OUT': false,
    'CAB 14 OUT': false,
    'CAB 15 OUT': false,
    'CAB 16 OUT': false,
  };

  const healthStatus = true; // Static healthStatus set to true

  return (
    <div className="border-2 border-black p-4 bg-gray-100 max-w-xs flex flex-col">
      <div className="text-center border-b border-black pb-2 mb-2">
        <h2 className="text-lg font-bold border-4 bg-white">CAB-16S</h2>
      </div>
      <div className="flex-grow space-y-2">
        {Object.entries(lightsStatus).map(([item, isOn]) => (
          <div className="flex items-center" key={item}>
            <div
              className={`border-2 rounded-full w-4 h-4 mr-2 flex-shrink-0 ${
                isOn ? 'bg-green-500' : 'bg-gray-300'
              }`}></div>
            <p className="p-1">{item}</p>
          </div>
        ))}
      </div>
      <div className="mt-auto">
        <div className="flex items-center mt-4">
          <div
            className={`border-2 rounded-full w-4 h-4 mr-2  flex-shrink-0 ${
              healthStatus ? 'bg-green-500' : 'border-black'
            }`}>
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

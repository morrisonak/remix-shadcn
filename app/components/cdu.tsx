export function Cdu() {
  return (
    <div className="px-4 py-4">
      <div className="bg-gray-400 text-white w-72 p-4 flex flex-col items-center justify-center">
        <div className="mb-4 w-full">
          {/* Display */}
          <div className="bg-gray-800 w-full h-12 mb-2"></div>
          {/* Row of small buttons above the number pad */}
          {/* <div className="flex justify-between mb-2">
            {Array.from({ length: 10 }, (_, i) => (
              <div key={i} className="bg-gray-700 w-5 h-5"></div>
            ))}
          </div> */}
        </div>

        {/* Number pad */}
        <div className="grid grid-cols-3 gap-2 mb-4">
          {Array.from({ length: 12 }, (_, i) => {
            // Replace 'Button' with actual numbers/text if necessary
            const Button = i < 9 ? i + 1 : i === 9 ? '*' : i === 10 ? 0 : '#';
            return (
              <div
                key={i}
                className="bg-gray-700 w-10 h-10 flex items-center justify-center">
                {Button}
              </div>
            );
          })}
        </div>

        {/* Directional pad */}
        <div className="flex items-center mb-4">
          <div className="flex flex-col mr-2">
            {['Up', 'Down'].map((dir) => (
              <div
                key={dir}
                className="bg-gray-700 w-10 h-10 mb-2 flex items-center justify-center">
                {dir}
              </div>
            ))}
          </div>
          <div className="flex flex-col">
            {['Left', 'Right'].map((dir) => (
              <div
                key={dir}
                className="bg-gray-700 w-10 h-10 mb-2 flex items-center justify-center">
                {dir}
              </div>
            ))}
          </div>
        </div>

        {/* COL J Button */}
        <div className="bg-gray-700 w-20 h-10 flex items-center justify-center">
          CDU-1
        </div>
      </div>
    </div>
  );
}

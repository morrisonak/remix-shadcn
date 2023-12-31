import { useState, useEffect } from 'react';
import { Signal1 } from '~/components/signal1';

export default function SvgComponent(props) {
  const [lightState, setLightState] = useState({
    green: false,
    yellow: false,
    red: false,
  });
  const [isFlashing, setIsFlashing] = useState({ yellow: false, red: false });

  useEffect(() => {
    const activeFlashingColor = Object.keys(isFlashing).find(
      (color) => isFlashing[color],
    );
    let intervalId;

    if (activeFlashingColor) {
      intervalId = setInterval(() => {
        setLightState((prevState) => ({
          ...prevState,
          [activeFlashingColor]: !prevState[activeFlashingColor],
        }));
      }, 500); // Flashing interval
    }

    return () => {
      if (intervalId) {
        clearInterval(intervalId);
      }
    };
  }, [isFlashing]);

  const toggleLight = (color) => {
    setLightState({
      green: color === 'green' ? !lightState.green : false,
      yellow: color === 'yellow' ? !lightState.yellow : false,
      red: color === 'red' ? !lightState.red : false,
    });
    setIsFlashing({ yellow: false, red: false }); // Stop flashing when any light is toggled
  };

  const toggleFlashing = (color) => {
    setIsFlashing((prevState) => ({
      yellow: color === 'yellow' ? !prevState.yellow : false,
      red: color === 'red' ? !prevState.red : false,
    }));
    setLightState({ green: false, yellow: false, red: false }); // Turn off all lights when starting to flash
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="text-xl font-semibold mb-4">Signal 1WA Controls</div>

      <Signal1
        isGreenOn={lightState.green}
        isYellowOn={lightState.yellow}
        isRedOn={lightState.red}
        {...props}
      />

      <div className="flex flex-col items-center space-y-4 mt-4">
        <button
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => toggleLight('green')}>
          {lightState.green ? 'Put to Stop' : 'Clear Signal'}
        </button>
        <button
          className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => toggleFlashing('yellow')}>
          {isFlashing.yellow ? 'Stop Yellow Flashing' : 'Flash Yellow'}
        </button>

        <button
          className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => toggleLight('yellow')}>
          Solid Yellow
        </button>

        <button
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => toggleLight('red')}>
          Solid Red
        </button>

        <button
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => toggleFlashing('red')}>
          {isFlashing.red ? 'Stop Red Flashing' : 'Flash Red'}
        </button>
      </div>
    </div>
  );
}

// Component: AppCdu


import { useMachine } from "@xstate/react";
import menuStateMachine from "~/components/stateMachine";

export default function App() {
  const [current, send] = useMachine(menuStateMachine);
  const { mainIndex, subIndex, menuTree } = current.context;
  const state = current;
  console.log("the current State:", state.value);

  // Handler functions for button clicks
  const handleRightClick = () => {
    console.log("right");
    send({ type: 'MOVE_RIGHT' });
  };
  const handleLeftClick = () => {
    console.log("left");
    send({ type: 'MOVE_LEFT' });
  }
  const handleUpClick = () => {
    console.log("up");
    send({ type: 'MOVE_UP' });
  } 
  const handleDownClick = () => {
    console.log("down");
    send({ type: 'MOVE_DOWN' });
  } 

  // Get the current menu and submenu items based on the state
  const currentMenuName = menuTree[mainIndex].name;
  const currentMenuItem = menuTree[mainIndex].items[subIndex];



  return (
    <div>
      <div className="mt-9 mx-24">
        <div className="bg-gray-400 drop-shadow-xl p-4 rounded-2xl w-[300px] h-[350px] flex flex-col justify-between">
          <div className="bg-gray-700 p-2 rounded">
            <div className="bg-gray-600 w-full h-6 mb-2 rounded">
              <p className="text-lime-400 w-1/2 h-6 rounded">{current.matches('main') ? currentMenuName : currentMenuItem}</p>
            </div>
            <div className="bg-gray-600 w-full h-6 mb-1 rounded" />
          </div>

          <div className="ml-2 w-36 h-36 py-4 mt-5 flex justify-center items-center">
            <div className="grid grid-cols-3 gap-2">
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 'C', 0, 'E'].map((number) => (
                <button
                  key={number}
                  className="bg-gray-700 w-10 h-10 drop-shadow-xl rounded-full flex items-center justify-center">
                  <span className="text-white">{number}</span>
                </button>
              ))}
            </div>
          </div>

          <div className="w-28 h-28 absolute top-28 left-44">
            <div className="">
              <div></div>
              <div>
                <button onClick={handleUpClick} className="bg-gray-700 w-10 h-10 rounded-full absolute top-0 left-1/2 transform -translate-x-1/2 flex items-center justify-center">
                  <svg
                    width="28"
                    height="28"
                    viewBox="0 0 28 28"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M27.9995 14.0005L20.0005 14.0005L20.0005 28.0005L8.00051 28.0005L8.00051 14.0005L0.000510557 14.0005L14.0005 0.000487669L27.9995 14.0005Z"
                      fill="black"
                    />
                  </svg>
                </button>
                <div></div>
                {/* Right Button */}
                <div className="flex">
                  <button onClick={handleRightClick}  className="bg-gray-700 w-10 h-10 rounded-full absolute right-0 top-1/2 transform -translate-y-1/2 flex items-center justify-center">
                    <svg
                      width="29"
                      height="29"
                      viewBox="0 0 29 29"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M14.1458 28.9459L14.1458 20.9469L0.145751 20.9469L0.14575 8.94686L14.1458 8.94686L14.1457 0.946862L28.1458 14.9469L14.1458 28.9459Z"
                        fill="black"
                      />
                    </svg>
                  </button>
                  <div></div>
                  <button onClick={handleDownClick} className="bg-gray-700 w-10 h-10 rounded-full absolute bottom-0 left-1/2 transform -translate-x-1/2 flex items-center justify-center">
                    <svg
                      width="29"
                      height="29"
                      viewBox="0 0 29 29"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M0.764892 14.8453L8.76389 14.8453L8.76389 0.845337L20.7639 0.845336L20.7639 14.8453L28.7639 14.8453L14.7639 28.8453L0.764892 14.8453Z"
                        fill="black"
                      />
                    </svg>
                  </button>
                  <div></div>
                </div>
                <button onClick={handleLeftClick} className="bg-gray-700 w-10 h-10 rounded-full absolute left-0 top-1/2 transform -translate-y-1/2 flex items-center justify-center">
                  <svg
                    width="29"
                    height="29"
                    viewBox="0 0 29 29"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M14.8545 0.236328V8.23533H28.8545V20.2353H14.8545V28.2353L0.854492 14.2353L14.8545 0.236328Z"
                      fill="black"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
          <div className="flex justify-between">
            <div></div>
            <div className="bg-gray-700 w-20 h-10 rounded flex items-center justify-center">
              <p className="text-center text-gray-400">CDU-1</p>
            </div>
            {/* Other elements go here */}
          </div>
        </div>
      </div>
    </div>
  );
}

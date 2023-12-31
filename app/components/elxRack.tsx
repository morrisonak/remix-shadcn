import { Cab16s } from './cab16s';
import { Vio86 } from './vio86S';
import { Vld16 } from './vld16';
import { Vti2S } from './vti2s';

export default function Rack() {
  return (
    <div className="bg-gray-600 border-2  p-4 grid grid-cols-9 gap-4">
      <div className="col-span-4 grid grid-cols-4 gap-4">
        <Vti2S />
        <Vti2S />
        <Cab16s />
        <Vld16 />
      </div>
      <div className="col-span-3 grid grid-cols-3 gap-4">
        <div className="border-8 border-black bg-gray-300 p-2">
          <h2 className="text-center mb-2">SLOT 5</h2>
        </div>
        <Vio86 />
        <Vio86 />
      </div>
      <div className="border-8 border-black bg-gray-300 p-2">
        <h2 className="text-center mb-2">SLOT 8</h2>
      </div>
      <div className="border-8 border-black bg-gray-300 p-2">
        <h2 className="text-center mb-2">SLOT 9</h2>
      </div>
    </div>
  );
}

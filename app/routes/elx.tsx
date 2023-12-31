
import Cdu from '~/components/cdu';
import Rack from '~/components/elxRack';

export default function ElectroLogix() {
    return (
        <div className='flex flex-col items-center justify-center min-h-screen py-2 px-2 scale-90'>
 

       <Rack /> 
       <Cdu />
     
       </div>
    )
}

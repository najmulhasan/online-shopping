import { MdOutlineFireTruck } from "react-icons/md";
import { IoIosArrowDown } from "react-icons/io";


const TopHeader = () => {
  return (
    
    <div className='bg-gray-800 text-white p-2 flex gap-4 '>
      <div className='max-w-[1140px]   px-4  py-1 mx-auto flex justify-between items-center gap-28'>
        <div className='flex items-center gap-2'>
          <MdOutlineFireTruck className='text-2xl text-green-400' />
          <p className='w-full md:w-auto text-sm flex items-center justify-center, md: justify-normal py-1'>Free Shipping On Orders Over $570</p>
      </div>
        <div className='flex items-center gap-2 border-r border-gray-500 pr-4'>
            
          <p className='text-sm border-r border-gray-500 pr-4'>English</p>
          <span><IoIosArrowDown /></span>
          <p className='text-sm'>USD</p>
          <span><IoIosArrowDown /></span>
          </div>
        <div className='flex items-center gap-4 border-r border-gray-500 pr-4'>
          <p className='text-sm hidden, md: inline-flex items-center '>Setting</p>
            <span><IoIosArrowDown /></span>
            
            </div>
      
      </div>
      
    </div>
    
  )
}

export default TopHeader
// This component is a simple header that can be used at the top of the page.
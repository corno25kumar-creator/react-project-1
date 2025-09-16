import Todo from './todo'
import { IoAddCircleSharp } from "react-icons/io5";

function todos() {
  return (
    <div className='width-full h-screen justify-start
     flex  flex-row justify-center text-3xl font-bold bg-gray-200  sm:flex-row gap-4 p-4 bg-black'>
      <Todo />
      
      <span className='absolute ml-[90%] mt-[70%]'> <IoAddCircleSharp size={90}/></span>
    </div>
  )
}

export default todos

import { RiEdit2Fill, RiDeleteBin5Fill } from "react-icons/ri";

function Todo({ title, description, startDate, endDate, edit_todo, delete_todo }) {
  return (
    <div className="relative bg-green-500 rounded-lg p-4 flex flex-col gap-4 w-64 shadow-md">
      <div className="border-2 border-gray-300 p-2 rounded w-full font-semibold text-white">
        {title}
      </div>
      <div className="border-2 border-gray-300 p-2 rounded w-full text-white">
        {description}
      </div>
      <div className="text-sm text-white">
        {startDate} → {endDate}
      </div>

      <div className="absolute bottom-2 left-2 flex gap-4 border-2 border-gray-300 p-2 rounded-lg bg-white">
        <RiEdit2Fill className="text-lg sm:text-xl md:text-2xl text-green-600" onClick={edit_todo} />
        <RiDeleteBin5Fill className="text-lg sm:text-xl md:text-2xl text-red-600" onClick={delete_todo} />
      </div>
    </div>
  );
}

export default Todo;
import Todo from './todo';
import { IoAddCircleSharp } from "react-icons/io5";

function Todos({ toggleForm, tasks }) {
  return (
    <div className="w-full h-screen overflow-hidden bg-white flex flex-wrap items-start gap-4 p-3 relative text-3xl font-bold">
      {tasks.map((task, index) => (
        <Todo
          key={index}
          title={task.title}
          description={task.description}
          startDate={task.startDate}
          endDate={task.endDate}
        />
      ))}

      <span className="absolute top-4 right-4 text-green-500 cursor-pointer">
        <IoAddCircleSharp className="text-5xl sm:text-6xl md:text-7xl" onClick={toggleForm} />
      </span>
    </div>
  );
}

export default Todos;
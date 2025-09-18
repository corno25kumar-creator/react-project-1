import Todo from "./todo";
import { IoAddCircleSharp } from "react-icons/io5";

function Todos({ toggleForm, tasks, onDelete, onEdit }) {
  if (!Array.isArray(tasks)) {
    return (
      <div className="w-full h-screen flex items-center justify-center bg-white text-red-600 text-xl font-semibold">
        Failed to load tasks. Please try again later.
      </div>
    );
  }

  return (
    <div className="w-full h-screen overflow-hidden bg-white flex flex-wrap items-start gap-4 p-3 relative text-3xl font-bold">
      {tasks.map((task) => (
        <Todo
          key={task.id}
          title={task.title}
          description={task.description}
          startDate={task.startDate}
          endDate={task.endDate}
          delete_todo={() => onDelete(task.id)}
          edit_todo={() => onEdit(task)}
        />
      ))}
      <span className="absolute top-4 right-4 text-green-500 cursor-pointer">
        <IoAddCircleSharp
          className="text-5xl sm:text-6xl md:text-7xl"
          onClick={toggleForm}
        />
      </span>
    </div>
  );
}

export default Todos;
import { useState, useEffect } from "react";
import AuthButtons from "./components/authButton";
import Headers from "./components/header";
import Todos from "./components/todos";
import TaskForm from "./components/form";
import { fetchTasks, createTask, deleteTask } from "./services/taskservice";

function App() {
  const [user, setUser] = useState(null);
  const [tasks, setTasks] = useState([]);
  const [formVisible, setFormVisible] = useState(false);
  const [editTask, setEditTask] = useState(null);

  useEffect(() => {
    if (user) {
      fetchTasks().then(setTasks);
    }
  }, [user]);

  const toggleForm = () => {
    setFormVisible(prev => !prev);
    setEditTask(null);
  };

  const handleDelete = async (taskId) => {
    await deleteTask(taskId);
    const updatedTasks = await fetchTasks();
    setTasks(updatedTasks);
  };

  const handleEdit = (task) => {
    setEditTask(task);
    setFormVisible(true);
  };

  const handleFormSubmit = async (data) => {
    await createTask(data);
    const updatedTasks = await fetchTasks();
    setTasks(updatedTasks);
    setEditTask(null);
    setFormVisible(false);
  };

  return (
    <div className="App w-screen h-screen overflow-hidden bg-gray-200 relative">
      <AuthButtons onAuth={setUser} />
      <Headers />

      {!user ? (
        <div className="text-center mt-20 text-xl text-red-600 font-semibold">
          Please log in to view your tasks.
        </div>
      ) : (
        <>
          <Todos
            toggleForm={toggleForm}
            tasks={tasks}
            onDelete={handleDelete}
            onEdit={handleEdit}
          />
          {formVisible && (
            <TaskForm
              onSubmit={handleFormSubmit}
              initialData={editTask || {}}
            />
          )}
        </>
      )}
    </div>
  );
}

export default App;
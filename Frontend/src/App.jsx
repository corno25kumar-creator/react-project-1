import Headers from "./components/header";
import Todos from "./components/todos";
import TaskForm from "./components/form";
import { useState, useEffect } from "react";
import { fetchTasks, createTask, deleteTask } from "./services/taskservice";

function App() {
  const [formVisible, setFormVisible] = useState(false);
  const [tasks, setTasks] = useState([]);
  const [editTask, setEditTask] = useState(null);

  useEffect(() => {
    fetchTasks().then(setTasks);
  }, []);

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
      <Headers />
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
    </div>
  );
}

export default App;
import Headers from "./components/header";
import Todos from "./components/todos";
import TaskForm from "./components/form";
import { useState } from "react";

function App() {
  const [formVisible, setFormVisible] = useState(false);
  const [tasks, setTasks] = useState([]);

  const toggleForm = () => {
    setFormVisible(prev => !prev);
  };

  const handleFormSubmit = (data) => {
    setTasks(prev => [...prev, data]); // Add new task
    setFormVisible(false); // Hide form after submit
  };

  return (
    <div className="App w-screen h-screen overflow-hidden bg-gray-200 relative">
      <Headers />
      <Todos toggleForm={toggleForm} tasks={tasks} />
      {formVisible && <TaskForm onSubmit={handleFormSubmit} />}
    </div>
  );
}

export default App;
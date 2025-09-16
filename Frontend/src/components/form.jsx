import { useState } from "react";

function TaskForm({ onSubmit }) {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    startDate: "",
    endDate: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData); // ✅ Send data to parent and hide form
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="absolute top-[30%] left-[30%] bg-white max-w-md w-full mx-auto border p-6 rounded-lg shadow-md flex flex-col gap-4"
    >
      <h2 className="text-2xl font-bold text-center text-gray-800">Create Task</h2>

      <input
        type="text"
        name="title"
        placeholder="Title"
        value={formData.title}
        onChange={handleChange}
        className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        required
      />

      <textarea
        name="description"
        placeholder="Description"
        value={formData.description}
        onChange={handleChange}
        className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
        rows={3}
        required
      />

      <div className="flex flex-col sm:flex-row gap-4">
        <input
          type="date"
          name="startDate"
          value={formData.startDate}
          onChange={handleChange}
          className="flex-1 border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
        <input
          type="date"
          name="endDate"
          value={formData.endDate}
          onChange={handleChange}
          className="flex-1 border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
      </div>

      <button
        type="submit"
        className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition duration-200"
      >
        Submit
      </button>
    </form>
  );
}

export default TaskForm;
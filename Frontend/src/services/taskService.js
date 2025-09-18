const API_URL = "http://localhost:5000/api/tasks";

export const fetchTasks = async () => {
  try {
    const res = await fetch(API_URL);
    if (!res.ok) throw new Error("Failed to fetch tasks");
    return await res.json();
  } catch (err) {
    console.error("fetchTasks error:", err.message);
    return []; // fallback to empty array
  }
};

export const createTask = async (task) => {
  try {
    await fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(task)
    });
  } catch (err) {
    console.error("createTask error:", err.message);
  }
};

export const deleteTask = async (id) => {
  try {
    await fetch(`${API_URL}/${id}`, {
      method: "DELETE"
    });
  } catch (err) {
    console.error("deleteTask error:", err.message);
  }
};
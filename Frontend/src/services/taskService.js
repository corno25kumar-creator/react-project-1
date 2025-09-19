const API_URL = "http://localhost:5000/api/tasks";

const getAuthHeader = () => {
  const token = localStorage.getItem("authToken");
  return token ? { Authorization: `Bearer ${token}` } : {};
};

export const fetchTasks = async () => {
  try {
    const res = await fetch(API_URL, {
      headers: getAuthHeader(),
    });
    if (!res.ok) throw new Error("Failed to fetch tasks");
    return await res.json();
  } catch (err) {
    console.error("fetchTasks error:", err.message);
    return [];
  }
};

export const createTask = async (task) => {
  try {
    await fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        ...getAuthHeader(),
      },
      body: JSON.stringify(task),
    });
  } catch (err) {
    console.error("createTask error:", err.message);
  }
};

export const deleteTask = async (id) => {
  try {
    await fetch(`${API_URL}/${id}`, {
      method: "DELETE",
      headers: getAuthHeader(),
    });
  } catch (err) {
    console.error("deleteTask error:", err.message);
  }
};
import { useEffect, useState } from "react";

function AuthButtons({ onAuth }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("authToken");

    if (token === "mock-token") {
      const mockUser = {
        sub: "92a836a4-6c54-4149-9210-10e7608c1378",
        email: "abcd123@gmail.com"
      };
      setUser(mockUser);
      onAuth(mockUser);
    }
  }, []);

  const login = () => {
    const mockUser = {
      sub: "92a836a4-6c54-4149-9210-10e7608c1378",
      email: "abcd123@gmail.com"
    };
    localStorage.setItem("authToken", "mock-token");
    setUser(mockUser);
    onAuth(mockUser);
  };

  const logout = () => {
    localStorage.removeItem("authToken");
    setUser(null);
    onAuth(null);
  };

  return (
    <div className="p-4">
      {!user ? (
        <button onClick={login}>Log In</button>
      ) : (
        <>
          <p>Welcome, {user.email}</p>
          <button onClick={logout}>Log Out</button>
        </>
      )}
    </div>
  );
}

export default AuthButtons;
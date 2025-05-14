import { useEffect } from "react";
import { useAuthStore } from "../store/auth.store";

export const LoginPage = () => {
  const authStatus = useAuthStore((state) => state.status);
  const login = useAuthStore((state) => state.login);
  const logout = useAuthStore((state) => state.logout);
  const user = useAuthStore((state) => state.user);

  useEffect(() => {
    setTimeout(() => {
      logout();
    }, 1500);
  }, [logout]);

  if (authStatus === "checking") return <div>Loading...</div>;

  return (
    <div>
      <h3>LoginPage</h3>
      {authStatus === "not-authenticated" && (
        <button
          onClick={() => login("estebantoloza1998@example.com", "123456")}
        >
          Login
        </button>
      )}
      {authStatus === "authenticated" && (
        <div>
          <p>User: {user?.name}</p>
          <p>Email: {user?.email}</p>
          <button onClick={logout}>Logout</button>
        </div>
      )}
    </div>
  );
};

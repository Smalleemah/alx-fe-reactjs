import { useState } from "react";
import Search from "./components/Search";
import { fetchUser } from "./services/githubService";

function App() {
  const [user, setUser] = useState(null);
  const [error, setError] = useState("");

  const handleSearch = async (username) => {
    try {
      const data = await fetchUser(username);
      setUser(data);
      setError("");
    } catch {
      setUser(null);
      setError("User not found");
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>GitHub User Search</h1>
      <Search onSearch={handleSearch} />

      {error && <p>{error}</p>}

      {user && (
        <div>
          <img src={user.avatar_url} alt="avatar" width="100" />
          <h2>{user.name}</h2>
          <p>{user.login}</p>
          <a href={user.html_url} target="_blank" rel="noreferrer">
            View Profile
          </a>
        </div>
      )}
    </div>
  );
}

export default App;

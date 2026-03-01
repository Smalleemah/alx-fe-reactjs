import UserProfile from "./components/UserProfile";

function App() {
  return (
    <div>
      {/* You can use the component multiple times with different data! */}
      <UserProfile name="Alice" age="25" bio="Loves hiking and photography" />
    </div>
  );
}

export default App;

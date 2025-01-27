import "./App.css";
import UserProfile from "./components/UserProfile";

function App() {
  return (
    <div className="App">
      <h1>Liste des utilisateurs</h1>
      <UserProfile name="Alice" email="alice@example.com" age={25} isPremium />
      <UserProfile name="Bob" email="bob@example.com" />
    </div>
  );
}

export default App;

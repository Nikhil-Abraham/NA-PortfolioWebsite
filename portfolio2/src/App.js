import "./App.css";
import Header from "./components/Header";
import TechStack from "./components/TechStack";
import Projects from "./components/Projects";

function App() {
  return (
    <div className="App">
      <Header />
      {/* Add Resume  */}

      <TechStack />

      <Projects />
    </div>
  );
}

export default App;

import "./App.css";
import DemoSaveDataLocalStorage from "./components/DemoSaveDataLocalStorage";
import DemoUseCallback from "./components/DemoUseCallback";
import DemoUseMemo from "./components/DemoUseMemo";

function App() {
  return (
    <>
      <DemoUseMemo />
      <DemoUseCallback />
      <DemoSaveDataLocalStorage />
    </>
  );
}

export default App;

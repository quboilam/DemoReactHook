import "./App.css";
import DemoSaveDataLocalStorage from "./components/DemoSaveDataLocalStorage";
import DemoUseCallback from "./components/DemoUseCallback";
import DemoUseMemo from "./components/DemoUseMemo";
import DemoUseReducer from "./components/DemoUseReducer";
import DemoUseRef from "./components/DemoUseRef";

function App() {
  return (
    <>
      <DemoUseMemo />
      <DemoUseCallback />
      <DemoSaveDataLocalStorage />
      <DemoUseRef />
      <DemoUseReducer />
    </>
  );
}

export default App;

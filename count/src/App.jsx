import { CounterContextProvider } from "./contexts/CounterContext";
import { HandleCounter } from "./components/handleCounter";
import { DoubleCounter } from "./components/doubleCounter";
import './App.css'

function App() {
  return (
    <CounterContextProvider>
      <div className="count-container">
        <HandleCounter />
        <DoubleCounter />
      </div>
    </CounterContextProvider>
  );
}

export default App

import "./styles.css";
import CounterComponent from "./CounterComponent";
import CountNum from "./CountNum";
export default function App() {
  return (
    <div className="App">
      <h1>Redux/toolkit 예제</h1>
      <CountNum />
      <CounterComponent />
    </div>
  );
}

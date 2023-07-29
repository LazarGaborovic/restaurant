import Home from "./Home/Home";
import "animate.css";
import About from "./About/About";
import Scrolling from "./Scrolling";

function App() {
  return (
    <div className="App">
      <Scrolling />
      <Home />
      <About />
    </div>
  );
}

export default App;

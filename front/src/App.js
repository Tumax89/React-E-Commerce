import Home from "./pages/Home";
import "./index.css";
import Announcement from "./components/Announcement";
import Slider from "./components/Slider";

function App() {
  return (
    <div className="App">
      <Announcement />
      <Home />
      <Slider />
    </div>
  );
}

export default App;

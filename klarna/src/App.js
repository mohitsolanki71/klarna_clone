import logo from "./logo.svg";
import "./App.css";
import { Navbar } from "./components/navbar";
import { Home } from "./components/home";
import { Footer } from "./components/footer";

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Home />
      <Footer />
    </div>
  );
}

export default App;

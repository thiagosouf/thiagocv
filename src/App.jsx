import Sidebar from "./components/Sidebar";
import Maincontent from "./components/Maincontent";
import "./styles/components/app.sass";

function App() {

  return (
    <div id="portifolio">
      <h1>THIAGO DEV</h1>
      <Sidebar />
      <Maincontent />
    </div>
  )
}

export default App

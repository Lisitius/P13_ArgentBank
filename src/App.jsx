import { BrowserRouter } from "react-router-dom";
import RouteFile from "./router/router";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <RouteFile />
      </div>
    </BrowserRouter>
  );
}

export default App;

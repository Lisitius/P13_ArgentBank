import { BrowserRouter } from "react-router-dom";
import RouteFile from "./router/router";
import { Provider } from "react-redux";
import store from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <RouteFile />
      </BrowserRouter>
    </Provider>
  );
}

export default App;

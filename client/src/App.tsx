import { Provider } from "react-redux";
import classes from "./App.module.css";
import Store from "./Store/Store";
import Home from "./Routes/Home";

function App() {
  return (
    <div className={classes.app}>
      <Provider store={Store}>
        <Home />
      </Provider>
    </div>
  );
}

export default App;

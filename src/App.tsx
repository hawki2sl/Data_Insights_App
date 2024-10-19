import classes from "./App.module.css"
import Home from "./Routes/Home";

function App() {
  return (
    <div className={classes.app}>
      <Home />
    </div>
  );
}

export default App;

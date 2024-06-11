import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./routes/Home";
import Upcoming from "./routes/Upcoming";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/upcoming">
          <Upcoming />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;

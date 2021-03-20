import { BrowserRouter, Route, Switch } from "react-router-dom";
import Main from "./pages/Main";
function App() {
  return (
    <BrowserRouter>
      <main className="App">
        <Switch>
          <Route path="/" component={Main} exact />
        </Switch>
      </main>
    </BrowserRouter>
  );
}

export default App;

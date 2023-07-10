import "./App.css";
import {MyRoutes} from "./routers/routes";

function App() {

  return (
    <>
      <header>
        <h1 className="title-app">Movies 🍿</h1>
      </header>
      <MyRoutes />
    </>
  );
}

export default App;

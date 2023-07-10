import "./App.css";
import { MyRoutes } from "./routers/routes";

function App() {
  return (
    <>
      <header>
        <nav className="nav">
          <h1 className="title-app">Movies 🍿</h1>
        </nav>
      </header>
      <MyRoutes />
    </>
  );
}

export default App;

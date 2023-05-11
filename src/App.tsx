import Home from "./pages/Home";
import "./style.scss";

const App = () => {
  return (
    <div className="container">
      <div className="form-control">
        <h2 className="text">ToDo App TypeScript</h2>
        <div className="form">
          <Home />
        </div>
      </div>
    </div>
  );
};

export default App;

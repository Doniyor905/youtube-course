import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Category from "./pages/Category";
import Home from "./pages/Home";


const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/category/:type" element={<Category/>} /> 
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

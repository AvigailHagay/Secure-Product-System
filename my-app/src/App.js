import {BrowserRouter, Route, Routes} from "react-router-dom";
import AddProductForm from "./components/AddProductForm";
import SearchProduct from "./components/SearchProduct";
import Navbar from "./components/Navbar";
import NoPage from "./components/NoPage";
import './App.css';


const App = () => {
  return (
      <BrowserRouter>
          <Navbar/>
          <Routes>
              <Route path="/" element={<SearchProduct />}></Route>
              <Route path="/add-product" element={<AddProductForm />}></Route>
              <Route path="*" element={<NoPage />} />
          </Routes>
      </BrowserRouter>
  );
}

export default App;

import { Routes, Route } from "react-router-dom";
import Navbar from "./pages/components/navbar/Navbar";
import Home from "./pages/home/Home";
import List from "./pages/list/List";
import Login from "./pages/login/Login";
import New from "./pages/new/New";
import Single from "./pages/single/Single";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        {/* cara 1 route bertingkat */}
        {/* <Route path='/user' element={<List />} />
        <Route path='/user/new' element={<New />} /> */}
        <Route path="/user">
          <Route index element={<List />} />
          <Route path=":uuid/:name" element={<Single />} />
          <Route path="new" element={<New />} />
        </Route>
        <Route path="product">
          <Route index element={<List />} />
          <Route path=":uuid/:name" element={<Single />} />
          <Route path="new" element={<New />} />
        </Route>
      </Routes>
      <footer>Copyright &copy; 2022</footer>
    </div>
  );
}

export default App;

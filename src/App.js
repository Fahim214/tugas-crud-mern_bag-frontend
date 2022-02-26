import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddUser from "./components/AddUser";
import EditUser from "./components/EditUSer";
import NavComp from "./components/NavComp";
import User from "./components/User";

function App() {
  return (
    <BrowserRouter>
        <NavComp />
      <div className="container mt-4">
        <Routes>
          <Route path="/" element={<User />} />
          <Route path="/add" element={<AddUser />} />
          <Route path="/edit/:id" element={<EditUser />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

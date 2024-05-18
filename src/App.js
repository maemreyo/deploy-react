import logo from "./logo.svg";
import "./App.css";
import Signup from "./components/Formik/Signup";
import ProductPage from "./components/Bootstrap/ProductPage";
import TaskManagement from "./components/DnD/TaskManagement";
import ResponsiveNavbar from "./components/Bulma/Navbar";
import RegisterEvent from "./components/RegisterEvent";

function App() {
  return (
    <div className="App">
      <Signup />
      <ProductPage />
      <TaskManagement />
      {/* <ResponsiveNavbar /> */}
      {/* <RegisterEvent /> */}
    </div>
  );
}

export default App;

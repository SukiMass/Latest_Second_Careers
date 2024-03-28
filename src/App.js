import Login from "./views/common/Login";
import ResetPassword from "./views/common/ResetPassword";
import ChangePassword from "./views/common/ChangePassword";
import RoleSelection from "./views/common/RoleSelection";
import ProfessionalManualSignup from './views/professional/ProfessionalManualSignup';
import { Route, Routes } from "react-router-dom";
import Home from "./views/professional/Home";

function App() {
  return (
    // <Login/>    
    <Routes>
      <Route path="/" element={<Home/>}/>
    </Routes>
  );
}

export default App;

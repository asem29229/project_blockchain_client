

import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Login,SignUp,ForgotPassword,Page404} from "./pages/index";
import Layout from "./utils/Layout";
import PrivateRoutes from "./utils/PrivateRoutes";
import { AuthProvider } from "./utils/AuthContext";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route element={<PrivateRoutes />}>
           
          </Route>
          <Route path="/" element={<Login />} />
          <Route path="/SignUp" element={<SignUp />} />
		  <Route path="/ForgotPassword" element={<ForgotPassword />} />
          <Route path="*" element={<Page404 />} />

        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;

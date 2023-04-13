
import Home from "./Components/Home";
import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
import Services from "./Components/Services";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import AboutUs from "./Components/AboutUs";
import Blogs from "./Components/Blogs";
import RegisterForm from "./Components/RegisterForm";
import Login from "./Components/Login";

import Contact from "./Components/Contact";
import PrivateRoute from "./Components/PrivateRoute";

function App() {
  
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/registerform" element={<RegisterForm />} />
          <Route path="/login" element={<Login />} />

          <Route path="/" element={<PrivateRoute />}>
            <Route path="/aboutus" element={<AboutUs />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/blogs" element={<Blogs />} />
          </Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;

import Navbar from "./Components/Navbar/Navbar";
import Contact from "./Components/ContactMe/Contact";
import Foodcontainer from "./Components/Foodcontainer/Foodcontainer";
import Footer from "./Components/Footer/Footer";

import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import About from "./Components/About/About";
import Privacy from "./Components/Privacy/privacy";

function App() {
  
  return (
   <>
   
<Router>
   <Navbar/>
   <Routes>
   <Route exact path="/" element={<Foodcontainer/>}></Route>
   <Route exact path="/contact" element={<Contact/>}></Route>
   <Route exact path="/about" element={<About/>}></Route>
   <Route exact path="/privacy" element={<Privacy/>}></Route>
   </Routes>
   <Footer/>
   </Router>
   </>
  );
}

export default App;

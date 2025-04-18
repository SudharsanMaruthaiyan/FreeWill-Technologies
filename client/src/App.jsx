import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Service from "./pages/Service";
// import Navbar from "./components/Navbar";

const App = () => (
  <>
    {/* <div className=" w-[100%] px-[2%] xl:w-full xl:px-[5%] mx-auto sticky top-0 bg-white">
      <Navbar />
    </div> */}
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/service" element={<Service />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  </>
);

export default App;

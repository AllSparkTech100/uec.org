import { Route, Routes } from "react-router-dom";
import Home from "./Pages/HomePage";
import Services from "./Pages/ServicePage";
import About from "./Pages/AboutPage";
import Layout from "./components/layout/Layout";
import Error from "./Pages/Error";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<Error />} />
      </Routes>
      </Layout>
  );
}

export default App;
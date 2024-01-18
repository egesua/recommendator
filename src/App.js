import Sidebar from "components/Sidebar/Sidebar";
import Footer from "components/Footer";
import Content from "components/Content";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <div className="wrapper">
        <Sidebar />
        <Content />
      </div>
      <Footer />
    </>
  );
}

export default App;

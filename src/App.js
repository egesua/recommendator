import Sidebar from "components/Sidebar";
import Footer from "components/Footer";
import Content from "components/Content";

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

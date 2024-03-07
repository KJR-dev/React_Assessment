import Footer from "./Components/Footer/Footer";
import Body from "./Components/Main/Main";
import NavBar_Container from "./Components/NavBar/NavBar_Container/NavBar_Container";
import NavBar_Banner from "./Components/NavBar/NavBar_Banner/NavBar_Banner";
import "./App.css";

function App() {
  return (
    <>
      <div className="appDiv">
        <NavBar_Banner />
        <NavBar_Container />
        <Body />
        <Footer />
      </div>
    </>
  );
}

export default App;

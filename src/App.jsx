import { useContext } from "react";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
// import Intro from "./components/intro/Intro";
import Map from "./components/map/Map";
import Navigation from "./components/navigation/Navigation";
import ProductList from "./components/productList/ProductList";
import Toggle from "./components/toggle/Toggle";
// import ProjectList from "./components/projectList/ProjectList";
import { ThemeContext } from "./context";
import 'bootstrap/dist/css/bootstrap.min.css';
import Material from "./components/Material/Material";


const App = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div
      style={{
        backgroundColor: darkMode ? "#222" : "white",
        color: darkMode && "white",
      }}
    >
      <Navigation />
      <Toggle />
      {/* <Intro /> */}
      <About />
      <Material/>
      <ProductList /> 
       <Map/> 
      <Contact />
      {/* <ProjectList /> */}
    </div>
  );
};

export default App;

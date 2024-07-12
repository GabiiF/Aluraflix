import './App.css';
import Header from "./componentes/Header/Header.js";
import Banner from "./componentes/Banner/Banner.js";
import Formulario from "./componentes/Formulario/Formulario.js";
import Footer from "./componentes/Footer/Footer.js";

function App() {
  return (
    <div className="App">

      <Header/>
      <Banner/>
      <Formulario />
      <Footer/>
    </div>
  );
}

export default App;

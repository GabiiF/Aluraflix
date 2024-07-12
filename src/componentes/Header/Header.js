import "./Header.css"
import Boton from '../Boton/index.js';

function Header() {
    return <header className="header">
        <img src="/img/logo.svg" alt="Aluraflix" />
        <div className="header-botones">
            <Boton titulo="Home"/>
            <Boton titulo="Nuevo video"/>
        </div>
    </header> 
}
export default Header
import "./Header.css"

function Header() {
    return <header className="header">
        <img src="/img/logo.svg" alt="Aluraflix" />
        <div className="header-botones">
            <button>HOME</button>
            <button>NUEVO VIDEO</button>
        </div>
    </header> 
}
export default Header
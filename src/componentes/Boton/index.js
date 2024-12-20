import './Boton.css'

const Boton = (props)=>{
    return <button type={props.type}>{props.titulo.toUpperCase()}</button>
}
export default Boton
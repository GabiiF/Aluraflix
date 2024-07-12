import './Formulario.css';
import CampoTexto from "../CampoTexto/index.js";
import ListaOpciones from '../ListaOpciones/index.js';
import TextArea from '../TextArea/index.js';
import Boton from '../Boton/index.js';

const Formulario = ()=>{
    return <section className='formulario'> 
        <form>
            <h2>
            EDITAR CARD 
            <CampoTexto titulo="Título" placeholder="Agrega el Título"/>
            <ListaOpciones />
            <CampoTexto titulo="Imagen" placeholder="Agrega la imagen del video"/>
            <CampoTexto titulo="Video" placeholder="Agrega la url del video"/>
            <TextArea titulo="Descripción" placeholder="Agrega la descripción del video"/>
            <Boton titulo="Guardar"/>
            <Boton titulo="Limpiar"/>
            </h2>
        </form>
        </section>
}
export default Formulario
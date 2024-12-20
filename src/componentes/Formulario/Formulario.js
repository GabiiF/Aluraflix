import './Formulario.css';
import CampoTexto from "../CampoTexto/index.js";
import ListaOpciones from '../ListaOpciones/index.js';
import TextArea from '../TextArea/index.js';
import Boton from '../Boton/index.js';

const Formulario = ()=>{
    const manejarEnvio = (e)=>{
        e.preventDefault();
        console.log("Manejar envio",e);
    }

    return <section className='formulario'> 
        <form onSubmit={manejarEnvio}>
            <div className='boton-cerrar'>
                <img src='/img/cross.png' alt='cerrar'></img>
            </div>
            <h2>EDITAR CARD</h2>
            <CampoTexto titulo="Título" placeholder="Agrega el Título" required/>
            <ListaOpciones required/>
            <CampoTexto titulo="Imagen" placeholder="Agrega la imagen del video" required/>
            <CampoTexto titulo="Video" placeholder="Agrega la url del video" required/>
            <TextArea titulo="Descripción" placeholder="Agrega la descripción del video" required/>
            <div className='form-botones'>
            <Boton titulo="Guardar"/>
            <Boton titulo="Limpiar" type="reset"/>
            </div>

        </form>
        </section>
}
export default Formulario
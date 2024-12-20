import './Container.css'
import { useState } from 'react';

const Container =()=>{

    //const [nombre,actualizarNombre] = useState ("Gabi")
    const [mostrar,actualizarMostar] = useState (true)

  const manejarClick = ()=>{
      console.log("Mostrar/Ocultar", !mostrar);
      actualizarMostar(!mostrar);
  }

    return <div className='campo-texto'>
        <button onClick={manejarClick}> 
        <img src='img/editar.png' alt='editar'></img>

        </button>
    </div>
}
export default Container
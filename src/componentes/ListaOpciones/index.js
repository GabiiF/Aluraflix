import './ListaOpciones.css';

const ListaOpciones = (props)=>{
    const categorias =[
        "Frontend",
        "Backend",
        "Innovación y Gestión"
    ]


    return <div className="lista-opciones">
        <label>Categoría</label>
        <select value={props.valor}>
            <option value="" disabled defaultValue="" hidden>Seleccionar equipo</option>
            {categorias.map((categoria,index)=><option key={index}>{categoria}</option>)}
        </select>
    </div>
}
export default ListaOpciones
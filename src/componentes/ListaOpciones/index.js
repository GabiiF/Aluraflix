import './ListaOpciones.css';

const ListaOpciones = ()=>{
    const categorias =[
        "Frontend",
        "Backend",
        "Innovación y Gestión"
    ]


    return <div className="lista-opciones">
        <label>Categoría</label>
        <select>
            {categorias.map((categoria,index)=>{
                return <option key={index}>{categoria}</option>
            })}
        </select>
    </div>
}
export default ListaOpciones
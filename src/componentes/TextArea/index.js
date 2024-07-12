import './TextArea.css'

const TextArea = (props)=>{
    return <div>
        <label>{props.titulo}</label>
        <textarea>{props.placeholder}</textarea>
    </div>
}
export default TextArea
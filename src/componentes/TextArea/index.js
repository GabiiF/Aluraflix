import './TextArea.css'

const TextArea = (props)=>{
    return <div className='textarea-desc'>
        <label>{props.titulo}</label>
        <textarea placeholder={props.placeholder}></textarea>
    </div>
}
export default TextArea
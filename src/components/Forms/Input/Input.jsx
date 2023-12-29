import { useState } from "react"

/**
 * 
 * @param {type, name, id, label, placeholder} props 
 * @returns 
 */

const Input = (props)=>{
    const [content, setContent] = useState("")

    const handleChange = (e)=>{
        setContent(e.value)
    }

    return (
        <>
        { props?.label && 
            <label htmlFor={props.name}> {props.label} { props?.required && <span className="required-symbol">*</span>}</label>
        }

        { props?.type === "textaera" ?
            <textarea
            name={props.name} id={props?.id} 
            placeholder = {props?.placeholder || ''}
            onChange={handleChange} 
            value={content}
            rows="4"
            ></textarea>
            :
             <input
             type= {props?.type || "text"} 
             name={props.name} id={props?.id} 
             placeholder = {props?.placeholder || ''}
             onChange={handleChange} 
             value={content}
            />
        }
        </>
    )
}

export default Input;
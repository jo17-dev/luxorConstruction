import './button.css'

export const Button = (props)=>{
    return <button className={ props?.className + ' Button'}> {props.value} </button>
}

import './button.css'

export const Button = (props)=>{
    return <button className={ props?.className + ' Button'} disabled={props?.disabled || false} > {props.value} </button>
}

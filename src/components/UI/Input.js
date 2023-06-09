import { forwardRef } from 'react'
import classes from './input.module.css'
const Input =forwardRef((props , ref)=>{
    const { label } =props
return (
    <div className={classes.input}>
        <label htmlFor={props.input.id}>{label}</label>
        <input  {...props.input} ref={ref}/>
    </div>
)
})
export default Input
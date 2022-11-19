import React from 'react'
import classes from './Styling.module.css'
const Input = (props) => {

let word=[...props.word]

const changeValue=(e)=>{
    word[props.index]=e.target.value.toUpperCase()
    props.onAdd(word)
  
}
  return (
    <>
      <input type="text" maxLength={1} required className={classes.input} disabled={!props.disable} defaultValue={props.word[props.index]} onChange={changeValue} style={{'color':props.color}}/>
    </>
  )
}

export default Input

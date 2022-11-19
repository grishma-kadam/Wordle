import React from 'react'
import Input from './Input'
import classes from './Styling.module.css'
import { useState, useContext } from 'react'
import WordContext from './word-context'
import check from './word-logic'
const Word = (props) => {


    const [word, setWord] = useState(props.word)
    const { guessWord ,guessDict} = useContext(WordContext)
    const [color,setColor]=useState(['','','','',''])
    

    const onAdd = (word) => {
        setWord(word)
    }
    const submitHandle = (e) => {
        e.preventDefault()
     
        let win=check(word,color,guessDict,guessWord,setColor)
        console.log(win)
      
        props.addWord(word,win)
    }

    return (
        <form className={classes.word} onSubmit={submitHandle}>
            <Input disable={props.disable} onAdd={onAdd} index={0} word={word} color={color[0]}/>
            <Input disable={props.disable} onAdd={onAdd} index={1} word={word} color={color[1]}/>
            <Input disable={props.disable} onAdd={onAdd} index={2} word={word} color={color[2]}/>
            <Input disable={props.disable} onAdd={onAdd} index={3} word={word} color={color[3]}/>
            <Input disable={props.disable} onAdd={onAdd} index={4} word={word} color={color[4]}/>
            {props.disable === 1 && <button type="submit">Enter</button>}
        </form>
    )
}

export default Word



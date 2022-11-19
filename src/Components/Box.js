import React from 'react'
import Word from './Word'
import classes from './Styling.module.css'
import { useState,useContext } from 'react'
import WordContext from './word-context'

const Box = (props) => {
const [disable,setDisable]=useState([1,0,0,0,0])
const {words,addWord}=useContext(WordContext)
// console.log(words)

const addWord1=(word,t)=>{
    let i=disable.indexOf(1)
    addWord(word,i)
    console.log(t)
    
    if(t==false){
      let x=[...disable]
      x[i]=0
      x[i+1]=1
      setDisable(x)
    }
    if(t){
      alert("You have won the game")
    }
   
    if(i==4 && t==false){
      alert("Ohh!! Sorry you have lost")
    }
    
}

  return (
    <div className={classes.box}>
      <Word disable={disable[0]} addWord={addWord1} word={words[0]} />
      <Word disable={disable[1]} addWord={addWord1} word={words[1]} />
      <Word disable={disable[2]} addWord={addWord1} word={words[2]} />
      <Word disable={disable[3]} addWord={addWord1} word={words[3]} />
      <Word disable={disable[4]} addWord={addWord1} word={words[4]} />
    </div>
  )
}

export default Box

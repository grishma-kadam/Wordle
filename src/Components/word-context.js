import React from "react";



const WordContext=React.createContext({
    words:['','','','',''],
    addWord:(word,i)=>{},
    guessWord:"",
    guessDict:(guessWord)=>{},
   
})

export default WordContext
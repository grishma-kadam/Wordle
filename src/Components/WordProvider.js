import WordContext from "./word-context";
import { useReducer } from "react";



const words=['','','','','']


const wordReducer=(state,action)=>{
    if(action.type=='ADD'){
        // console.log(state)
        let update=[...state]

         update[action.index]=action.word


        return update
        


    }
    return words;
}


const WordProvider=(props)=>{
    const [wordState,dispatchCartAction]=useReducer(wordReducer,words)

    const addWord=(word,i)=>{
        dispatchCartAction({type:'ADD',word:word,index:i})

    }
   
    const guessDict=(word)=>{
        let a={}
        for(let i=0;i<5;i++){
        
            if(word[i] in a){
                // j = word.indexOf(word[i],a[`${word[i]}`][a[`${word[i]}`].length-1]+1)
                a[`${word[i]}`].push(i)
                }
            else{

                    //j=word.indexOf(word[i])
                    a[`${word[i]}`]=[i]
                }
        }
        

        console.log(a)
        return a;
    }

    const wordContext={
        words:wordState,
        addWord:addWord,
        guessWord:"THREE",
        guessDict:guessDict
    }

    return <WordContext.Provider value={wordContext}>
        {props.children}
    </WordContext.Provider>

}

export default WordProvider
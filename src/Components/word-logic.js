import WordContext from './word-context'
import { useContext } from 'react'

const check = (word,color,guessDict,guessWord,setColor) => {
    
    console.log(word.join(''))
    console.log(guessWord.split(''))
    if (word.join('')==guessWord) {
        console.log("win")
        setColor(['green','green','green','green','green'])
        return true;
    }
    else {
       const g=guessDict(guessWord)
       const a=guessDict(word)
       
       
       

       for(var i in a){
        if(i in g){
            
            if(a[i].length<=g[i].length){
                console.log(i)
               
                a[i].forEach(q => {
                    if( g[i].includes(q)){
                        console.log("match")
                    
                        color[q]='green'
                       

                    }
                    else{
                        console.log("present but not match")
                        color[q]='yellow'
                    }
                });
            }
            else{
                let c=0;
                a[i].forEach(q=>{
                    if(g[i].includes(q)){
                        console.log(g[i])                          
                        console.log("match")
                       
                        color[q]='green'
                     
                        c++
                        a[i][q]=''
                    }
                }
                );
                
                a[i].forEach( q =>{
                    if(c<g[i].length && q!=''){
                        console.log("present but not match")
                        color[q]='yellow'
                        c++
                        console.log(c)
                    }
                    else{
                        console.log("not found")
                    }
                })

            }
        }
        else{
            console.log("not found")
        }
       }
    }
    return false
}

export default check;
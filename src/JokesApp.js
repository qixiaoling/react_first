import React from "react"
import Joke from "./Joke";
import jokesData from "./jokesData";

function JokesApp(){

        // <div>
        //     <Joke
        //         question= "who are you"
        //         answer="I am not sure"
        //     />
        //     <Joke
        //         answer= "I am not sure"
        //     />
        //
        // </div>


     const jokeComponents = jokesData.map(function(joke) {
         return (
             <Joke key={joke.id} question={joke.question} answer={joke.answer}/>)
     })

        return(
            <div>
                {jokeComponents}
            </div>
        )
}


export default JokesApp
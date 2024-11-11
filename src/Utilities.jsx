import { type } from "@testing-library/user-event/dist/type";
import { useReducer } from "react";

function reducer(instate,action) {
    switch (action.type){
        case "increase":
            return{
                type: "increase",
                count: instate.count+1
            }
        case "decrease":
            return{
                type: "decrease",
                count: instate.count-1
            }
        default:
            return instate
            
    }
   
}

function Utilities() {
    const [instate,outstate]=useReducer(reducer,{type:"increase",count:0})
    return(
      
        <div>
        <h1>useReducer</h1>
         <button onClick={()=>outstate({type:"increase"})}>inc</button>
         <button onClick={()=>outstate({type:"decrease"})}>dic</button>
          {/* <h1 style={{ color: instate > 0 ? 'green' : 'red' }}>{instate}</h1> */}
         <h1 style={{ color: instate.count > 0 ? 'green' : 'red' }}>{instate.count}</h1>
       </div>
    )
}

export default Utilities;
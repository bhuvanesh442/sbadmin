import { useState } from "react"

function Components(prop) {
    const [ine,dis]=useState(0)
    return(
       <div>
        <h1>useState</h1>
         <button onClick={()=>dis(ine+1)}>inc</button>
         <button onClick={()=>dis(ine-1)}>dic</button>
         <h1 style={{ color: ine > 0 ? 'green' : 'red' }}>{ine}</h1>
       </div>
    )
}
export default Components


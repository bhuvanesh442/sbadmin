import { useParams } from "react-router-dom";

function View() {
    let {id}=useParams()
    console.log(id.id)
    return(
       
        <div>{id.id}</div>
    )
}
export default View;
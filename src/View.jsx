import { useParams } from "react-router-dom";

function View() {
    let {id}=useParams()
    console.log(id)
    return(
        <div>{id.Name}</div>
    )
}
export default View;
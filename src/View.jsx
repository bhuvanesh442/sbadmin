import { useParams } from "react-router-dom";

function View() {
    let {id}=useParams()
    console.log(id)
    return(
       
        <div>i ams</div>
    )
}
export default View;
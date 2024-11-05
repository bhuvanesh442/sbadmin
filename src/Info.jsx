import { useParams, useSearchParams } from "react-router-dom";

function Info() {
    let pap=useParams()
    console.log(pap)
    const [searchparams,getsearchparams]=useSearchParams()
    console.log(searchparams)
    return(
        <></>
    )
}
export default Info;
import { Link, useParams,useSearchParams } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import { useEffect, useState } from "react";

function View() {
    const { id } = useParams(); 
    const [employees,getemploye]=useState([]);
    useEffect(()=>{
        let fetchdata = async ()=>{
            let empdata =  await axios.get(`https://670b53baac6860a6c2cbbe07.mockapi.io/users/${id}`)
            getemploye(empdata.data)
        }
        fetchdata()
    },[id])
   
    // const { id } = useParams();
    // const [searchparams,getsearchparams]=useSearchParams()
    // console.log(...searchparams)
    // const employee = employees.find(emp => emp.id === parseInt(id));

    // if (!employee) {
    //     return (
    //         <div className="container text-center mt-5">
    //             <h5 className="text-danger">Employee not found</h5>
    //         </div>
    //     );
    // }

    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <div className="card shadow-lg">
                        <div className="card-header bg-primary text-white text-center">
                            <h4>Employee Information</h4>
                        </div>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">
                                <strong>Name:</strong> { employees.Name}
                            </li>
                            <li className="list-group-item">
                                <strong>Position:</strong> { employees.Position}
                            </li>
                            <li className="list-group-item">
                                <strong>Office:</strong> { employees.Office}
                            </li>
                            <li className="list-group-item">
                                <strong>Age:</strong> { employees.Age}
                            </li>
                            <li className="list-group-item">
                                <strong>Start Date:</strong> { employees.StartDate}
                            </li>
                            <li className="list-group-item">
                                <strong>Salary:</strong> { employees.Salary}
                            </li>
                        </ul>
                        <div className="card-footer text-center">
                            <Link className="btn btn-outline-primary" to="/Tables" >
                                Back to Employee List
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default View;

import { Link } from "react-router-dom";
import axios from "./Axiosapi";
import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from "react";

function Tables() {
    const [employees,getemploye]=useState([])
    useEffect(()=>{
        
        fetchdata()
    },[])
    let fetchdata = async ()=>{
       
        let empdata=  await axios.get("/users")
        getemploye(empdata.data)
        // fetchdata()
    }
  
    // [
    //     { id: 1, Name: "Tiger Nixon", Position: "System Architect", Office: "Edinburgh", Age: 61, StartDate: "2011/04/25", Salary: "$320,800" },
    //     { id: 2, Name: "Garrett Winters", Position: "Accountant", Office: "Tokyo", Age: 63, StartDate: "2011/07/25", Salary: "$170,750" },
    //     { id: 3, Name: "Ashton Cox", Position: "Junior Technical Author", Office: "San Francisco", Age: 66, StartDate: "2009/01/12", Salary: "$86,000" },
    //     { id: 4, Name: "Cedric Kelly", Position: "Senior Javascript Developer", Office: "Edinburgh", Age: 22, StartDate: "2012/03/29", Salary: "$433,060" },
    //     { id: 5, Name: "Airi Satou", Position: "Accountant", Office: "Tokyo", Age: 33, StartDate: "2008/11/28", Salary: "$162,700" },
    //     { id: 6, Name: "Brielle Williamson", Position: "Integration Specialist", Office: "New York", Age: 61, StartDate: "2012/12/02", Salary: "$372,000" },
    //     { id: 7, Name: "Herrod Chandler", Position: "Sales Assistant", Office: "San Francisco", Age: 59, StartDate: "2012/08/06", Salary: "$137,500" },
    //     { id: 8, Name: "Rhona Davidson", Position: "Integration Specialist", Office: "Tokyo", Age: 55, StartDate: "2010/10/14", Salary: "$327,900" },
    //     { id: 9, Name: "Colleen Hurst", Position: "Javascript Developer", Office: "San Francisco", Age: 39, StartDate: "2009/09/15", Salary: "$205,500" },
    // ];

    const handleDelete = async (id) => {
        await axios.delete(`/users/${id}`)
        fetchdata()
        // let ask=window.confirm("do want to delete")
        // if(ask){
        //     await axios.delete(`https://670b53baac6860a6c2cbbe07.mockapi.io/users/${id}`)
        // }
    }

    return (
        <>
            <h1 className="h3 mb-4 text-gray-800">Employee Data</h1>
            <p className="mb-4">
                This table displays employee data with options to view, edit, or delete each entry.
            </p>
       
            {/* DataTables Example */}
            <div className="card shadow mb-4">
                <div className="card-header py-3 d-flex justify-content-between align-items-center">
                    <h6 className="m-0 font-weight-bold text-primary">Employee List</h6>
                    <Link className="btn btn-primary btn-sm" to="/Tables/Createuser">
                        Add New Employee
                    </Link>
                </div>
                     
                <div className="card-body">
                    <div className="table-responsive">
                        <table className="table table-bordered table-hover" id="dataTable" width="100%" cellSpacing="0">
                            <thead className="thead-light">
                                <tr>
                                    <th>no.of</th>
                                    <th>Name</th>
                                    <th>Position</th>
                                    <th>Office</th>
                                    <th>Age</th>
                                    <th>Start Date</th>
                                    <th>Salary</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tfoot>
                                <tr>
                                    <th>no.of</th>
                                    <th>Name</th>
                                    <th>Position</th>
                                    <th>Office</th>
                                    <th>Age</th>
                                    <th>Start Date</th>
                                    <th>Salary</th>
                                    <th>Actions</th>
                                </tr>
                            </tfoot>
                            <tbody>
                                {employees.map((data,index) => (
                                    
                                    <tr key={data.id}>
                                        <td>{index+1}</td>
                                        <td>{data.Name}</td>
                                        <td>{data.Position}</td>
                                        <td>{data.Office}</td>
                                        <td>{data.Age}</td>
                                        <td>{data.StartDate}</td>
                                        <td>{data.Salary}</td>
                                        <td>
                                            <div className="btn-group" role="group">
                                                <Link className="btn btn-primary btn-sm" to={`/Tables/View/${data.id}`}>View</Link>
                                                <Link className="btn btn-success btn-sm" type="button"  to={`/Tables/Edit/${data.id}`}>Edit</Link>
                                                <button className="btn btn-danger btn-sm" type="button"onClick={() => handleDelete(data.id)}>Delete</button>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Tables;

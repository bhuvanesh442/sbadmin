import { Link, useParams,useSearchParams } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

function View() {
    let employees = [
        { id: 1, Name: "Tiger Nixon", Position: "System Architect", Office: "Edinburgh", Age: 61, StartDate: "2011/04/25", Salary: "$320,800" },
        { id: 2, Name: "Garrett Winters", Position: "Accountant", Office: "Tokyo", Age: 63, StartDate: "2011/07/25", Salary: "$170,750" },
        { id: 3, Name: "Ashton Cox", Position: "Junior Technical Author", Office: "San Francisco", Age: 66, StartDate: "2009/01/12", Salary: "$86,000" },
        { id: 4, Name: "Cedric Kelly", Position: "Senior Javascript Developer", Office: "Edinburgh", Age: 22, StartDate: "2012/03/29", Salary: "$433,060" },
        { id: 5, Name: "Airi Satou", Position: "Accountant", Office: "Tokyo", Age: 33, StartDate: "2008/11/28", Salary: "$162,700" },
        { id: 6, Name: "Brielle Williamson", Position: "Integration Specialist", Office: "New York", Age: 61, StartDate: "2012/12/02", Salary: "$372,000" },
        { id: 7, Name: "Herrod Chandler", Position: "Sales Assistant", Office: "San Francisco", Age: 59, StartDate: "2012/08/06", Salary: "$137,500" },
        { id: 8, Name: "Rhona Davidson", Position: "Integration Specialist", Office: "Tokyo", Age: 55, StartDate: "2010/10/14", Salary: "$327,900" },
        { id: 9, Name: "Colleen Hurst", Position: "Javascript Developer", Office: "San Francisco", Age: 39, StartDate: "2009/09/15", Salary: "$205,500" },
    ];

    const { id } = useParams();
    const [searchparams,getsearchparams]=useSearchParams()
    console.log(...searchparams)
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
                                <strong>Name:</strong> { employees[id-1].Name}
                            </li>
                            <li className="list-group-item">
                                <strong>Position:</strong> { employees[id-1].Position}
                            </li>
                            <li className="list-group-item">
                                <strong>Office:</strong> { employees[id-1].Office}
                            </li>
                            <li className="list-group-item">
                                <strong>Age:</strong> { employees[id-1].Age}
                            </li>
                            <li className="list-group-item">
                                <strong>Start Date:</strong> { employees[id-1].StartDate}
                            </li>
                            <li className="list-group-item">
                                <strong>Salary:</strong> { employees[id-1].Salary}
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

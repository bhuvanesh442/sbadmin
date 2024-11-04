import { Link } from "react-router-dom";

function Tables(prop) {
    let employees = [
        {   id:1,
            Name: "Tiger Nixon",
            Position: "System Architect",
            Office: "Edinburgh",
            Age: 61,
            StartDate: "2011/04/25",
            Salary: "$320,800",
        },
        {   id:2,
            Name: "Garrett Winters",
            Position: "Accountant",
            Office: "Tokyo",
            Age: 63,
            StartDate: "2011/07/25",
            Salary: "$170,750",
        },
        {   id:3,
            Name: "Ashton Cox",
            Position: "Junior Technical Author",
            Office: "San Francisco",
            Age: 66,
            StartDate: "2009/01/12",
            Salary: "$86,000",
        },
        {   id:4,
            Name: "Cedric Kelly",
            Position: "Senior Javascript Developer",
            Office: "Edinburgh",
            Age: 22,
            StartDate: "2012/03/29",
            Salary: "$433,060",
        },
        {   id:5,
            Name: "Airi Satou",
            Position: "Accountant",
            Office: "Tokyo",
            Age: 33,
            StartDate: "2008/11/28",
            Salary: "$162,700",
        },
        {   id:6,
            Name: "Brielle Williamson",
            Position: "Integration Specialist",
            Office: "New York",
            Age: 61,
            StartDate: "2012/12/02",
            Salary: "$372,000",
        },
        {   id:6,
            Name: "Herrod Chandler",
            Position: "Sales Assistant",
            Office: "San Francisco",
            Age: 59,
            StartDate: "2012/08/06",
            Salary: "$137,500",
        },
        {   id:7,
            Name: "Rhona Davidson",
            Position: "Integration Specialist",
            Office: "Tokyo",
            Age: 55,
            StartDate: "2010/10/14",
            Salary: "$327,900",
        },
        {   id:8,
            Name: "Colleen Hurst",
            Position: "Javascript Developer",
            Office: "San Francisco",
            Age: 39,
            StartDate: "2009/09/15",
            Salary: "$205,500",
        },
    ];

    return (
        <>
        
        
            <h1 className="h3 mb-2 text-gray-800">Tables</h1>
            <p className="mb-4">
                DataTables is a third party plugin that is used to generate the demo
                table below. For more information about DataTables, please visit the{" "}
                {/* <a target="_blank" href="https://datatables.net">
          official DataTables documentation
        </a> */}
                .
            </p>
       
            {/* DataTales Example */}
            <div className="card shadow mb-4">
                        <div className="card-header py-3">
                            <h6 className="m-0 font-weight-bold text-primary">DataTables Example</h6>
                        </div>
                     
                        <div className="card-body">
                            <div className="table-responsive">
                                 <Link className="btn btn-primary btn-sm" type="button" to={`/Tables/Createuser`}>Button</Link>
                                <table className="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Position</th>
                                    <th>Office</th>
                                    <th>Age</th>
                                    <th>Start date</th>
                                    <th>Salary</th>
                                    <th>information</th>
                                </tr>
                            </thead>
                            <tfoot>
                                <tr>
                                    <th>Name</th>
                                    <th>Position</th>
                                    <th>Office</th>
                                    <th>Age</th>
                                    <th>Start date</th>
                                    <th>Salary</th>
                                    <th>information</th>
                                </tr>
                            </tfoot>

                            <tbody>
                                {employees.map((data) => {
                                    return ( 
                                        <tr>
                                            
                                            <td>{data.Name}</td>
                                            <td>{data.Position}</td>
                                            <td>{data.Office}</td>
                                            <td>{data.Age}</td>
                                            <td>{data.StartDate}</td>
                                            <td>${data.Salary}</td>
                                            {/* <button className="nav-link" to="/Tables/View">
                                                <i className="fas fa-fw fa-table" />
                                                <span>View</span>
                                            </button> */}
                                            <Link className="btn btn-primary btn-sm " to={`/Tables/View/${data}`} type="button">View</Link>
                                            <button className="btn btn-success btn-sm" type="button">Info</button>
                                            <button className="btn btn-danger btn-sm" type="button">Delete</button>
                                        </tr>
                                    )
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Tables;

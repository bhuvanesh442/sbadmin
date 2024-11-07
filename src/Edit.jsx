import { Link, useNavigate, useNavigation, useParams, useRoutes, useSearchParams } from "react-router-dom";
import { Formik, useFormik } from 'formik';
import axios, { Axios } from "./Axiosapi";
import { useEffect } from "react";
function Edit() {
    let {edituser}=useParams()

    let Navigation=useNavigate()
    let newuser = useFormik({
        initialValues: {
            Name: "",
            Position: "",
            Office: "",
            Age: "",
            StartDate: "",
            Salary: "",
        },
        validate:(values) => {
           let error={}
           if(!values.Name){
            error.Name="please enter name"
           }
           if(!values.Position){
            error.Position="please enter position"
           }
           if(!values.Office){
            error.Office="please enter office"
           }
           if(!values.Age){
            error.Age="please enter Age"
           }
           if(!values.StartDate){
            error.StartDate="please enter StartDate"
           }
           if(!values.Salary){
            error.Salary="please enter Salary"
           }
           return error
           
         },
        onSubmit: async (values) => {
         try {
            await axios.put(`/users/${edituser}`, values);
            Navigation("/Tables"); 
         } catch (error) {
            alert("somthing went to wrong")
         }
         }

    });

   

    useEffect(()=>{
        let fetchdata = async ()=>{
       
          try {
            let empdata=  await axios.get(`/users/${edituser}`)
            newuser.setValues(empdata.data)
        } catch (error) {
            alert("somthing went to wrong")
          }
            // getemploye(empdata.data)
            // // fetchdata()
        
           
        }
        fetchdata()
    },[edituser])
    
    return (
        <div className="container">
            <form onSubmit={newuser.handleSubmit}>
                <div className="row">
                    <div className="col-lg-6">
                        <label>Name</label>
                        <input name="Name" 
                        onChange={newuser.handleChange} 
                        value={newuser.values.Name} 
                        type="text" className="form-control" 
                        />
                        {
                            newuser.errors.Name?<span style={{color:"red"}}>please enter name</span>:null
                        }
                    </div>
                    <div className="col-lg-6">
                        <label>Position</label>
                        <input
                            name="Position"
                            onChange={newuser.handleChange}
                            value={newuser.values.Position}
                            type="text"
                            className="form-control"
                        />
                         {
                            newuser.errors.Position?<span style={{color:"red"}}>please enter position</span>:null
                        }
                    </div>
                    <div className="col-lg-6">
                        <label>Office</label>
                        <input
                            name="Office"
                            onChange={newuser.handleChange}
                            value={newuser.values.Office}
                            type="text"
                            className="form-control"
                            placeholder="Office"
                        />
                         {
                            newuser.errors.Office?<span style={{color:"red"}}>please enter office</span>:null
                        }
                    </div>
                    <div className="col-lg-6">
                        <label>Age</label>
                        <input
                            name="Age"
                            onChange={newuser.handleChange}
                            value={newuser.values.Age}
                            type="text"
                            className="form-control"
                        />
                         {
                            newuser.errors.Age?<span style={{color:"red"}}>please enter Age</span>:null
                        }
                    </div>
                    <div className="col-lg-6">
                        <label>StartDate</label>
                        <input
                            name="StartDate"
                            onChange={newuser.handleChange}
                            value={newuser.values.StartDate}
                            type="date"
                            className="form-control"
                        />
                         {
                            newuser.errors.StartDate?<span style={{color:"red"}}>please enter StartDate</span>:null
                        }
                    </div>
                    <div className="col-lg-6">
                        <label>Salary</label>
                        <input
                            name="Salary"
                            onChange={newuser.handleChange}
                            value={newuser.values.Salary}
                            type="text"
                            className="form-control"
                        />
                         {
                            newuser.errors.Salary?<span style={{color:"red"}}>please enter Salary</span>:null
                        }
                    </div>
                    <div className=" p-4 col-lg-6">
                        <input
                            type="submit"
                            className="btn btn-outline-primary"
                            disabled={!newuser.isValid}
                        />
                    </div>
                    <div className="p-4 col-lg-6">
                        <Link className="btn btn-outline-primary" to="/Tables" >
                            Back to Employee List
                        </Link>
                    </div>
                </div>
            </form>
        </div>
  )
    
}
export default Edit;
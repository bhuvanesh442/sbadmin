import { useFormik } from "formik";
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

function Useredit(){
    let [isLoading,setLoading] = useState(false);
    let {edituser} = useParams();
    let navigate = useNavigate();
   
    const formik = useFormik({
        initialValues : {
            name: "",
            position: "",
            age: "",
            office: "",
            startDate: "",
            salary: "",
        },
        validate :(values)=> {
            let errors = {}
            
            let pattern = new RegExp(/^[a-zA-Z\-]+$/);// ella website layum irukkura oru default object
            if(!values.name){
              errors.name = "please enter the name"
            }else if(values.name.length < 5){
              errors.name = "Length should be more than 5"
            }else if(values.name.length > 25){
              errors.name = "Length should be less than 25"
            }else if(!pattern.test(formik.values.name)){
              errors.name = "User name should not have numbers"
            }
            // .vid 44 1:08:00
            if(!values.position){
              errors.position = "Please enter Position88"
            }
            return errors
        },
        onSubmit : async(values)=> {
         await axios.put("https://66dfea882fb67ac16f278b83.mockapi.io/api/students/${edituser},values")
         navigate('/utilities')
        },
    })
    useEffect(()=>{
        let fetchData = async ()=>{
            let userData = await axios.get(`https://66dfea882fb67ac16f278b83.mockapi.io/api/students/${edituser}`);
            console.log(userData);
            // setUsers(userData.data)
            formik.setValues(userData.data)
        }
        fetchData();
    },[])
    return (
        <div className="container">
        <form onSubmit={formik.handleSubmit}>
          <div className="row">
            <div className="col-lg-6">
              <label>Name</label>
              <input name="name" 
              onChange={formik.handleChange} 
              value={formik.values.name} 
              type="text" 
              className={`form-control ${formik.errors.name ? 'error-border' : ''}`} />

              {/* {
                formik.errors.name ? <span style={{color:'red'}} >Please enter the name</span> : null
              } */}
               {/* {
                formik.errors.name ? <span style={{color:'red'}} >{formik.errors.name}</span> : null
              } */}
            </div>
  
            <div className="col-lg-6">
              <label>Position</label>
              <input  name="position" 
              onChange={formik.handleChange} 
              value={formik.values.position}  type="text" className="form-control" />
                {
                formik.errors.position ? <span style={{color:'red'}} >Please enter the position</span> : null
              }
            </div>
  
            <div className="col-lg-6">
              <label>Office</label>
              <input  name="office" 
              onChange={formik.handleChange} 
              value={formik.values.office}  type="text" className="form-control" />
            </div>
  
            <div className="col-lg-6">
              <label>Age</label>
              <input  name="age" 
              onChange={formik.handleChange} 
              value={formik.values.age}  type="text" className="form-control" />
            </div>
  
            <div className="col-lg-6">
              <label>Start date</label>
              <input  name="startDate" 
              onChange={formik.handleChange} 
              value={formik.values.startDate}  type="date" className="form-control" />
            </div>
  
            <div className="col-lg-6">
              <label>Salary</label>
              <input  name="salary" 
              onChange={formik.handleChange} 
              value={formik.values.salary}  type="text" 
              className="form-control" />
            </div>
            <div className="col-lg-6">

<input 
      type={"submit"} 
      value="submit" 
      className="btn btn-primary mt-2" 
      // disabled={!formik.isValid} 
      disabled={!formik.isValid && isLoading} 
    />
  </div>
  
          </div>
        </form>
      </div>
    )
};
export default Useredit;
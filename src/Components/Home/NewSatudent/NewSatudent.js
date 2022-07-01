import React from 'react'
import "./NewSatudent.css"
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux'
import { getAllStudents, newStudentRegister,  } from '../../../Redux/actions.js'
import swal from 'sweetalert';


function validate(input) {
  const errors = {};
  if (!input.Student) errors.Student = "The field cannot be empty";
  if (!input.Industry) errors.Industry = "The field cannot be empty";
  if (!input.Interests) errors.Interests = "The field cannot be empty";
  //if (!input.City) errors.City = "The field cannot be empty";
   
  return errors;
}
function NewSatudent() {

  const dispatch = useDispatch();
  const allStudent = useSelector((state) => state.allStudent);

  useEffect(() => {
      dispatch(getAllStudents());
  }, [dispatch]);
  
  //const lastElement = allStudent.at(-1)
  const id = allStudent.length+2
  //const id = lastElement.id+1
  
  
  

  const [errors, setErrors] = useState({});
  let [input, setInput] = React.useState({
    id: id,
    Student: "",
    Industry: "",
    Interests: "",
    City: "",
  });

  function handleSubmit(e) {
    e.preventDefault();
    //console.log(input)
    if (Object.values(errors).length > 0) {
      swal("Please complete the required information.");
    } else if (
      input.Student === "" &&
      input.Industry === "" &&
      input.Interests === "" &&
      input.City === ""
    ) {
      swal("Please complete the required information.");
    } else {
      dispatch(newStudentRegister(input));
      swal("New student successfully added!");
      setInput({
        Student: "",
        Industry: "",
        Interests: "",
        City: "",
    });
    
    }
  }
  function handleChange(e) {
    e.preventDefault();
    setInput((prevInput) => {
     
      const newInput = {
        ...prevInput,
        [e.target.name]: e.target.value,
      };
      const validations = validate(newInput);
      setErrors(validations);
      return newInput;
      
    });
}

  return (
    <div className='containerNewSatudentRight'>
      <div className='containerNewSatudentRightTwo'>
        <form onSubmit={(e) => handleSubmit(e)}>
          <div className='section'><span className='numForm'>1</span>Student: </div>
          <div className="inner-wrap">
              <input className="inputName" placeholder="Student" name="Student" type="text" value={input.Student} onChange={(e) => handleChange(e)}/>{errors.Student && <span className="errors">{errors.Student}</span>}
          </div>
          <div className='section'><span className='numForm'>2</span>Industry: </div>
          <div className="inner-wrap">
              <input className="inputName" placeholder="Industry" name="Industry" type="text" value={input.Industry} onChange={(e) => handleChange(e)}/>{errors.Industry && <span className="errors">{errors.Industry}</span>}
          </div>
          <div className='section'><span className='numForm'>3</span>Interests: </div>
          <div className="inner-wrap">
              <input className="inputName" placeholder="Interests" name="Interests" type="text" value={input.Interests} onChange={(e) => handleChange(e)}/>{errors.Interests && <span className="errors">{errors.Interests}</span>}
          </div>
          <div className='section'><span className='numForm'>4</span>City: </div>
          <div className="inner-wrap">
            <input className="inputName" placeholder="City" name="City" type="text" value={input.City} onChange={(e) => handleChange(e)}/>{errors.City && <span className="errors">{errors.City}</span>}
          </div>
          <button className="buttonAll" type="submit">To Register</button>
        </form>
      </div>
      
    </div>
  )
}

export default NewSatudent

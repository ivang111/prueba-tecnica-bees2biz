import React from "react";
import "./StudentUpdate.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getStudentById, updateStudent } from "../../Redux/actions";
import swal from "sweetalert";

// function validate(input) {
//   const errors = {};
//   if (!input.Student) errors.Student = "The field cannot be empty";
//   if (!input.Industry) errors.Industry = "The field cannot be empty";
//   if (!input.Interests) errors.Interests = "The field cannot be empty";
//   if (!input.City) errors.City = "The field cannot be empty";

//   return errors;
// }

function StudentUpdate(props) {
  const dispatch = useDispatch();
  const id = props.match.params.id;
  const studeBy = useSelector((state) => state.studentById);

  useEffect(() => {
    dispatch(getStudentById(id));
  }, [dispatch, id]);

  //const [errors, setErrors] = useState({});
  let [input, setInput] = React.useState({
    id: id,
    Student: studeBy.Student,
    Industry: studeBy.Industry,
    Interests: studeBy.Interests,
    City: studeBy.City,
  });

  // function handleSubmit(e) {
  //   e.preventDefault();
  //   //console.log(input)
  //   if (Object.values(errors).length > 0) {
  //     swal("Please complete the required information.");
  //   } else if (
  //     input.Student === "" &&
  //     input.Industry === "" &&
  //     input.Interests === "" &&
  //     input.City === ""
  //   ) {
  //     swal("Please complete the required information.");
  //   } else {
  //     dispatch(updateStudent(input));
  //     swal("New student successfully added!");
  //     setInput({
  //       Student: "",
  //       Industry: "",
  //       Interests: "",
  //       City: "",
  //   });

  //   }
  // }

  function handleSubmit(e) {
    e.preventDefault();
    var stud = input.Student ? input.Student : studeBy.Student;
    var ind = input.Industry ? input.Industry : studeBy.Industry;
    var Int = input.Interests ? input.Interests : studeBy.Interests;
    var Cit = input.City ? input.City : studeBy.City;
    console.log(stud, ind, Int, Cit);
    var obj = {
      Student: stud,
      Industry: ind,
      Interests: Int,
      City: Cit,
    };
    dispatch(updateStudent(id, obj));
    swal("New student successfully update!");
    setInput({
      Student: "",
      Industry: "",
      Interests: "",
      City: "",
    });
  }

  function handleChange(e) {
    e.preventDefault();
    setInput((prevInput) => {
      const newInput = {
        ...prevInput,
        [e.target.name]: e.target.value,
      };
      return newInput;
    });
  }

  return (
    <div className="containerNewSatudentRight">
      <div className="containerNewSatudentRightTwo">
        <form onSubmit={(e) => handleSubmit(e)}>
          <div className="section">
            <span className="numForm">1</span>Student:{" "}
          </div>
          <div className="inner-wrap">
            <input
              className="inputName"
              placeholder={studeBy.Student}
              name="Student"
              type="text"
              value={input.Student}
              onChange={(e) => handleChange(e)}
            />
          </div>
          <div className="section">
            <span className="numForm">2</span>Industry:{" "}
          </div>
          <div className="inner-wrap">
            <input
              className="inputName"
              placeholder={studeBy.Industry}
              name="Industry"
              type="text"
              value={input.Industry}
              onChange={(e) => handleChange(e)}
            />
          </div>
          <div className="section">
            <span className="numForm">3</span>Interests:{" "}
          </div>
          <div className="inner-wrap">
            <input
              className="inputName"
              placeholder={studeBy.Interests}
              name="Interests"
              type="text"
              value={input.Interests}
              onChange={(e) => handleChange(e)}
            />
          </div>
          <div className="section">
            <span className="numForm">4</span>City:{" "}
          </div>
          <div className="inner-wrap">
            <input
              className="inputName"
              placeholder={studeBy.City}
              name="City"
              type="text"
              value={input.City}
              onChange={(e) => handleChange(e)}
            />
          </div>
          <button className="buttonAll" type="submit">
            To Register
          </button>
        </form>
        <h1>Actualiza tus datos</h1>
      </div>
    </div>
  );
}

export default StudentUpdate;

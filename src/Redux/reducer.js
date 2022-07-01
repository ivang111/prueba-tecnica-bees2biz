import { GET_ALL_STUDENT,GET_STUDENT_DETAIL,PUT_STUDENT_DETAIL,CREATE_STUDENT,DELETE_STUDENT,ALPHABETICAL_SORT,FILTER_INTEREST } from "./actionTypes"

const initialState = {
  allStudent: [],
  student: [],
  studentById: [],
  
  
  
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_STUDENT:
      return {
        ...state,
        allStudent: action.payload,
        student: action.payload,
      };
    case GET_STUDENT_DETAIL:
      return {
        ...state,
        studentById: action.payload,
      };
    case CREATE_STUDENT:
      return{
        ...state,
        allStudent: [...state.allStudent, action.payload]
      };
    case ALPHABETICAL_SORT:
        let sortStudent = [...state.allStudent];
        sortStudent =  action.payload === "A-Z"
            ? state.allStudent.sort(function (a, b) {
              if (a.Student.toLowerCase() > b.Student.toLowerCase()) return 1;
              if (a.Student.toLowerCase() < b.Student.toLowerCase()) return -1;
              return 0;
            })
            : state.allStudent.sort(function (a, b) {
              if (a.Student.toLowerCase() < b.Student.toLowerCase()) return 1;
              if (a.Student.toLowerCase() > b.Student.toLowerCase()) return -1;
              return 0;
            });
          return {
              ...state,
              allStudent: sortStudent,
        };   
    case DELETE_STUDENT:
        return{
          ...state,
        };
    case FILTER_INTEREST:
        const allStudent = state.allStudent;
            //console.log("REDUCER_DATA:", action.payload)
            
        let filterByineterest =  allStudent.filter((e) =>
        e.Interests.toLowerCase().includes(action.payload.toString().toLowerCase())
        );
        return { 
            ...state,
            allStudent: filterByineterest,
        };
    case PUT_STUDENT_DETAIL:
      return {
        ...state,
        studentById: action.payload,
      };
    default:
      return {
        ...state
      }
}};

export default rootReducer;


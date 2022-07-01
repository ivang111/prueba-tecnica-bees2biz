import axios from "axios"
import { GET_ALL_STUDENT,GET_STUDENT_DETAIL,PUT_STUDENT_DETAIL,CREATE_STUDENT,DELETE_STUDENT,ALPHABETICAL_SORT,FILTER_INTEREST } from "./actionTypes.js"


export function getAllStudents() {
  return async function (dispatch) {
    try {
      let response = await axios.get(`https://retoolapi.dev/cSZH8I/data`);
      // console.log(response.data)
      return dispatch({
        type: GET_ALL_STUDENT,
        payload: response.data,
      });
    } catch (error) {
      return error;
    }
  };
}
export  function  getStudentById(id) {
    //console.log("ACTIONID:",id)
    return async function (dispatch){
        await axios.get(`https://retoolapi.dev/cSZH8I/data/${id}`)
        .then((r) => {
            return dispatch({ 
                type: GET_STUDENT_DETAIL, 
                payload: r.data 
            });
        })
        .catch((error) => {
            console.log(error);
        });
    };
}
export function updateStudent(id, values){
    return async function (dispatch) {
        try {
          const resp = await axios.put(`https://api-generator.retool.com/cSZH8I/data/${id}`, values);
    
          const json = await resp.data;
          console.log(json);
          return dispatch({
                type: PUT_STUDENT_DETAIL,
                payload: json,
            })

        }catch (error) {
            console.log(error);
            return dispatch({
              type: PUT_STUDENT_DETAIL,
              payload: error.response.data,
            });
          }
    }
}

export function newStudentRegister(values) {
    return async function (dispatch) {
      try {
        const resp = await axios.post(`https://api-generator.retool.com/cSZH8I/data`, values);
        const json = await resp.data;
        console.log(json);
        return dispatch({
          type: CREATE_STUDENT,
          payload: json,
        });
      } catch (error) {
        console.log(error);
        return dispatch({
          type: CREATE_STUDENT,
          payload: error.response.data,
        });
      }
    };
  }
  export function deleteStuden(values) {
    //console.log("actioid",values)
    return async function (dispatch) {
      try {
        const resp = await axios.delete(`https://retoolapi.dev/cSZH8I/data/${values}`);
        //console.log("actiondele:",resp);
        return dispatch({
          type: DELETE_STUDENT,
          
        });
      } catch (error) {
        console.log(error);
      
      }
    };
  }
  export function aplhabeticalSort(payload) {
    return {
      type: ALPHABETICAL_SORT,
      payload,
    };
  }
  export function filterInterest(interest) {
    //console.log("ACTIONFILTER:", continente)
    return {
        type: FILTER_INTEREST,
        payload: interest, 
    }
} 

import React from 'react'
import "./CardStudent.css"
import { Link } from "react-router-dom"
import { useSelector, useDispatch } from 'react-redux'
import { useState, useEffect } from "react";
import { deleteStuden, getAllStudents,  } from '../../../../Redux/actions.js'
import swal from "sweetalert";

function CardStudent({id, name, industry, interests, city }) {
  
  const dispatch = useDispatch();

  const deleteStudent = useSelector((state) => state.msg);

  
  const onClick = ()=>{
    dispatch(deleteStuden(id))
    swal({
      title: deleteStudent
    })
  }

  
  return (
    <div className='containerCardStudent'>
      <div className='leftCardStudent'>
        <p className='subTitle'>ESTUDENT</p>
      </div>
      <div className='rightCardStudent'>
        <div className='textrightCardStudent'>
          <h2 className='textCardName'>{name}</h2>
          <h3 className='textCardText'>Industry: <span className='textCardSpan'> {industry}</span></h3>
          <h3 className='textCardText'>Interests: <span className='textCardSpan'> {interests}</span></h3>
          <h4 className='textCityCard'>{city}</h4> 
        </div>
        <div className='buttonrightCardStudent'>
        <Link to={`/update/${id}`}>
          <button className='buttonAll buttonCard'>Update</button>
        </Link>
          <button className='buttonAll buttonCard'onClick={onClick}>Remove</button>
        </div>

      </div>
    </div>
  )
}

export default CardStudent

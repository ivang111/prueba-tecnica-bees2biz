import React from 'react'
import "./Home.css"
import {  useState } from "react";
import AllStudent from './AllStudent/AllStudent';
import NewSatudent from './NewSatudent/NewSatudent';
import student from "../../Img/student.png"

function Home() {


  const [userOptionState, setuserOptionState] = useState(1);
  const toggleTab = (index) => {
    setuserOptionState(index);


  };
  return (
    <div className='containerHome'>
        <div className='containerTitleHome'>
            <h1 className='title'>Panel de Estudiantes</h1>
        </div>
        <div className='containerDataHome'>
            <div className='containerDataHomeLeft'>
                <h1>Panel de control</h1>
                <button className={userOptionState===1?"buttonAll deploys":"buttonAll doNotDeploys"}onClick={() => toggleTab(1)}>Todos los Estudiantes</button>
               
                <button className={userOptionState===2?"buttonAll deploys":"buttonAll doNotDeploys"}onClick={() => toggleTab(2)}>Nuevo Estudiante</button>
                <img className='studentImg' src={student} alt="student"/>
            </div>
            <div className={userOptionState===1?"active_deploy":"inactive_deploy"}>
                <AllStudent/>
            </div>
            <div className={userOptionState===2?"active_deploy":"inactive_deploy"}>
                <NewSatudent/>
            </div>
        </div>
    </div>
  )
}

export default Home

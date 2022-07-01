import React from 'react'
import "./Home.css"
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import AllStudent from './AllStudent/AllStudent';
import NewSatudent from './NewSatudent/NewSatudent';

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
                <h1>Search</h1>
                <button className={userOptionState===1?"buttonAll deploys":"buttonAll doNotDeploys"}onClick={() => toggleTab(1)}>Todos los Estudiantes</button>
               
                <button className={userOptionState===2?"buttonAll deploys":"buttonAll doNotDeploys"}onClick={() => toggleTab(2)}>Nuevo Estudiante</button>
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

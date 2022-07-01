import React from 'react'
import "./AllStudent.css"
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { aplhabeticalSort, getAllStudents, filterInterest } from "../../../Redux/actions.js"
import CardStudent from './CardStudent/CardStudent';
import pagLeft from "../../../Img/pagLeft.png"
import pagRight from "../../../Img/pagRight.png"

function AllStudent() {
    
    const dispatch = useDispatch();
    
    useEffect(() => {
      dispatch(getAllStudents());
    }, [dispatch]);
    
    const allStudent = useSelector((state) => state.allStudent);
    
    const [order, setOrder] = useState("");
    const [page, setPage] = useState(1);
    const [setstudentpage, setsetstudentpage] = useState(4)
    
    const PostPagOne = page * setstudentpage;
    const firstsetstudentpage = PostPagOne - setstudentpage;
    const PostByPage = allStudent.slice(firstsetstudentpage, PostPagOne);
    const maxPages = Math.ceil(allStudent.length / 4);

    function pageNum(e) {
      alert(page);
      document.getElementById("paginas").innerText = `${page}`;
      setPage(page);
    }
    function anterior() {
      if (page > 1) {
        document.getElementById("paginas").innerText = `Pag ${page - 1}`;
        setPage(page - 1);
      }
    }
    function siguiente() {
      if (page <= maxPages-1) {
        document.getElementById("paginas").innerText = `Pag ${page + 1}`;
        setPage(page + 1);
      }
    }
    const handlePageChange = (e) => {
      document.getElementById("paginas").innerText = `Pag ${e.target.value}`;
      document.getElementById("unadetantas").innerText = ` /${maxPages}`;
      e.target.value ? setPage(e.target.value) : setPage(1);
    };
    //Ordenamiento A-Z
  function orderAZ(e) {
    e.preventDefault();
    dispatch(aplhabeticalSort(e.target.textContent.trim()));
    setPage(1);
    setOrder(e.target.textContent.trim());
  }
  function handleInteretsChange(e) {
    e.preventDefault();
    setPage(1);
    if(e.target.value === 'all') return dispatch(getAllStudents())
    //console.log("FILTRO1:", e.target.value)
    dispatch(filterInterest(e.target.value.trim()));
    setOrder(e.target.value.trim());
  };

  return (
    <div className='containerDataHomeRight'>
        <div className='containerMenuHomeRight'>
            <button className='buttonAll' onClick={(e) => orderAZ(e)}>A-Z</button>
            <div>
              <select className='selecHome' name='actividades' placeholder='Select interest' onChange={(e)=> handleInteretsChange(e)}>
                <option value="all">Select interest</option>
                {allStudent?.map((e) => { return (
                <option key={e.id} value={e.Interests}>{e.Interests}</option>
                );})}
              </select>
             </div>
            <button className='buttonAll' onClick={(e) => orderAZ(e)}>Z-A</button>
        </div>
        <div className='containerCardsHomeRight'>
        <img className='pagArrow' src={pagLeft} alt="pagLeft" onClick={(e) => anterior(e)}/>
          
        <div >
        {PostByPage?.map(d => <CardStudent
            key={d.id}
            id={d.id}
            name={d.Student}
            industry={d.Industry}
            interests={d.Interests}
            city={d.City} 
          />)}    
           
        </div>
        <img className='pagArrow' src={pagRight} alt="pagRight" onClick={(e) => siguiente(e)}/>
        </div>
        <div className='containerMenuHomeRight'>
          <h3 className="countPag"><span  id="paginas">Pag 1</span>/{maxPages}</h3>
        </div> 
    </div>
  )
}

export default AllStudent

import "./ConvocationStage.css";
import { Link } from "react-router-dom";
import {useState} from "react";
import Axios from 'axios'
import NavbarStudent from "../Navbar/Navbar";

function ConvocationStage() {
  
  
  // var test = sessionStorage.getItem('apoge');
  // console.log("Testing attention please : "+test);
  // console.log("ABove is the test check it out");
  const [tel,setTel] = useState("");
  const [startDate,setStartDate] = useState("");
  const [enddate,setEndDate] = useState("");
  const submitReview3 = ()=>{
      const files = document.getElementById("upload");
      const formData = new FormData();
        for(let i =0; i < files.files.length; i++) {
            formData.append("image", files.files[i]);
    }
    fetch("http://localhost:3001/ConvocationStage", {
        method: 'post',
        body: formData
    })
        .then((res) => console.log(res))
        .catch((err) => ("Error occured", err));

      sessionStorage.setItem('tel' ,[tel]);
      sessionStorage.setItem('startDate' ,[startDate]);
      sessionStorage.setItem('enddate' ,[enddate]);
  };

  return (
    <>
          <NavbarStudent />
     <div class="TheBody" id="FormDiv2">
        <div class="contact-us">
          <form id="stageForm">
            <input
              placeholder="Numéro de téléphone"
              type="text"
              required
              onChange={(e)=>{
                setTel(e.target.value)
              }}

            />
            <br></br>
            <div class="periode">
               <label>
               Période de stage
               </label>
               <br/>
    
               <label>
               De
               </label>
                <input type="date" name="startDtae" required 
                 onChange={(e)=>{
                  setStartDate(e.target.value)
                }}/>
                <label>
                   À
               </label>
               <input type="date" name="endDate" required
               onChange={(e)=>{
                setEndDate(e.target.value)
              }}/>
               </div>
              <br/>
              <label>
              Copie de l’assurance
               </label>
               <br/>
               <input type="file" multiple id="upload" name="upload" accept="application/pdf,application/vnd.ms-excel" />
          </form>
        </div>
      </div>
      <div id="next" onClick={submitReview3} >
              <Link to="/" >
            <button class="btn1 btn--1 btn-sep-1" >Annuler</button>
            </Link>
            <Link to="/Entreprise">
            <button class="btn2 btn-2 btn-sep-2" id="Button2">Envoyer</button>
            </Link>
       </div>     
    </>
  );

}

export default ConvocationStage;

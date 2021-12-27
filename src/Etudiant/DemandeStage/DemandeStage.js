import "./DemandeStage.css";
import { Link } from "react-router-dom";
import {useState, useEffect} from "react";
import NavbarStudent from "../Navbar/Navbar";
import $ from 'jquery';
import Axios from 'axios'

function DemandeStage() {
  const [typeStage,setTypeStage] = useState("");
  const [startDate,setStartDate] = useState("");
  const [enddate,setEndDate] = useState("");
  const [nomEntreprise,setNomEntreprise] = useState("");
  const submitReview2 = ()=>{
      Axios.post("http://localhost:3001/Stage", {
        typeStage:typeStage ,
        startDate:startDate,
        enddate:enddate,
        nomEntreprise:nomEntreprise,
      });
  };
  return (
    <>
      <NavbarStudent />
     <div class="TheBody" id="FormDiv">
        <div class="contact-us">
          <form id="stageForm">
            <input
              placeholder="Type de stage"
              type="text"
              required
              onChange={(e)=>{
                setTypeStage(e.target.value)
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
                <input type="date" name="startDtae" required  onChange={(e)=>{
                setStartDate(e.target.value)
              }}/>
                <label>
                   À
               </label>
               <input type="date" name="endDtae" required  onChange={(e)=>{
                setEndDate(e.target.value)
              }}/>
               </div>
                
              
              <br/>
            <input
              placeholder="Nom de l’entreprise (optionnel)"
              type="email"
              name="customerEmail"
              required="true"
              onChange={(e)=>{
                setNomEntreprise(e.target.value)
              }}
            />

          </form>
        </div>
      </div>
      <div id="next" onClick={submitReview2}>
              <Link to="/">
            <button class="btn1 btn--1 btn-sep-1" >Annuler</button>
            </Link>
            <Link to="/Succes">
            <button class="btn2 btn-2 btn-sep-2" id="Button2">Envoyer</button>
            </Link>
       </div>
          
     
    </>
  );

}

export default DemandeStage;

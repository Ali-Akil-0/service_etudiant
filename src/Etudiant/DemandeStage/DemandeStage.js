import "./DemandeStage.css";
import { Link } from "react-router-dom";
import NavbarStudent from "../Navbar/Navbar";
import $ from 'jquery';

function DemandeStage() {
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
                <input type="date" name="startDtae" required/>
                <label>
                   À
               </label>
               <input type="date" name="endDtae" required/>
               </div>
                
              
              <br/>
            <input
              placeholder="Nom de l’entreprise (optionnel)"
              type="email"
              name="customerEmail"
              required="true"
            />

          </form>
        </div>
      </div>
      <div id="next">
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

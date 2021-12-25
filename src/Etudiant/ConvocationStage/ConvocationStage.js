import "./ConvocationStage.css";
import { Link } from "react-router-dom";
import NavbarStudent from "../Navbar/Navbar";
import $ from 'jquery';

function ConvocationStage() {


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
              <label>
              Copie de l’assurance
               </label>
               <br/>
               <input type="file" id="upload" name="upload" accept="application/pdf,application/vnd.ms-excel"/>

          </form>
        </div>
      </div>
      <div id="next">
              <Link to="/Etudiant">
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

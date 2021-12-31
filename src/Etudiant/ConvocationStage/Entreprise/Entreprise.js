import NavbarStudent from "../../Navbar/Navbar";
import { Link } from "react-router-dom";
import "./Entreprise.css";
import Axios from "axios";
import {useState} from "react";

function Entreprise() {
  var testApoge = sessionStorage.getItem('apoge');
  var testTel = sessionStorage.getItem('tel');
  var testStartDate = sessionStorage.getItem('startDate');
  var testEndDate = sessionStorage.getItem('enddate');

  console.log("Testing Apoge attention please : "+testApoge);
  console.log("Testing Telephone attention please : "+testTel);
  console.log("Testing The start date attention please : "+testStartDate);
  console.log("Testing The end date attention please : "+testEndDate);
  console.log("ABove is the test check it out");
  const [raison,setRaison] = useState("");
  const [addresse,setAddresse] = useState("");
  const [email,setEmail] = useState("");
  const [nomEncadrant,setNomEncadrant] = useState("");
  const submitReview = ()=>{
      Axios.post("http://localhost:3001/Entreprise", {
        raison:raison ,
        addresse:addresse,
        email:email,
        nomEncadrant:nomEncadrant,
        testTel:testTel,
        testStartDate:testStartDate,
        testEndDate:testEndDate,
        testApoge:testApoge,

      });
  };
 
  return (
    <>
      <NavbarStudent />
      <div class="title">
        <h1>Veuillez remplir les champs ci-dessous :</h1>
      </div>
      <div class="TheBody">
        <div class="contact-us">
          <form>
            <input
              placeholder="Raison sociale"
              type="text"
              name="Raison"
              required
              onChange={(e)=>{
                setRaison(e.target.value)
              }}
            />
            <input
              placeholder="Adresse"
              type="text"
              name="customerEmail"
              required
              onChange={(e)=>{
                setAddresse(e.target.value)
              }}
            />
            <input placeholder="Numéro de téléphone" type="text" name="Tel" required />
            <input placeholder="Adresse mail" type="email" name="email" required  onChange={(e)=>{
                setEmail(e.target.value)
              }} />
            <input placeholder="Nom de l’encadrant dans l’entreprise (optionnel)" type="text" id="encadrant" name="encadrant" required  onChange={(e)=>{
                setNomEncadrant(e.target.value)
              }}/>
          </form>
        </div>
      </div>
      <div id="next" onClick={submitReview}>
              <Link to="/">
            <button class="btn1 btn--1 btn-sep-1" >Annuler</button>
            </Link>
            <Link to="/Succes">
            <button class="btn2 btn-2 btn-sep-2" id="EntrepriseSuccess">Envoyer</button>
            </Link>
      </div>
    </>
  ); 
}

export default Entreprise;

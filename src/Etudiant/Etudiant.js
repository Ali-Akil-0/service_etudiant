/* eslint-disable jsx-a11y/anchor-is-valid */
import "./Etudiant.css";
import { Component } from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import NavbarStudent from "./Navbar/Navbar";
import { GrNext } from "react-icons/gr";
import $ from "jquery";
import Scolarite from "./Scolarite/Scolarite";
import Axios from "axios";
function Etudiant() {
  const [mailI, setMailI] = useState("");
  const [apoge, setApoge] = useState("");
  const [cin, setCin] = useState("");
  const [document, setDocument] = useState("");
  const [joke, setJoke] = useState("");
  const [joke1, setJoke1] = useState("");

  const submitReview = () => {
    Axios.post("http://localhost:3001/", {
      mailI: mailI,
      apoge: apoge,
      document: document,
      cin: cin,
    });
  };
  sessionStorage.setItem('Email',[mailI]);
  sessionStorage.setItem('CIN',[cin]);
  sessionStorage.setItem('apoge',[apoge]);
  // storing the var in a global session 
  sessionStorage.setItem('apoge' ,[apoge]);
  
    var test = sessionStorage.getItem('apoge');
    var test2 = sessionStorage.getItem('CIN');

    var test3 = sessionStorage.getItem('Email');

    console.log("Testing attention please : "+test);
    console.log("ABove is the test check it out");
    // working on the useEffetct 
  var somejoke = "joke";
  var scolarite = "scolarite";
  var reussite = "reussite";
  var inscription = "inscription";
  var notes = "notes";
  var demandeStage = "demandeStage";
  var convocationStage = "convocationStage";

  var resultJoke = somejoke.localeCompare([joke]);
  console.log("the first is " + somejoke);
  console.log("the second one is  :" + [joke]);
  console.log("The joke result is  = " + resultJoke);
  var somejoke1 = "joke1";
  var resultJoke1 = somejoke1.localeCompare([joke1]);
  console.log("joke 2  = ", somejoke1);
  console.log([joke1]);

  // Checking the validation of the code

  useEffect(() => {
    if(resultJoke1==0){
      $("#next2").css("cursor", "pointer");
      $(".btn-next2").css("background", "rgb(45, 209, 45)");
      $(".btn-next2").css("opacity", "1");
    }
    console.log("The joke result is  = " + resultJoke);
    if (resultJoke == 0) {
      Axios.get("http://localhost:3001/").then((response) => {
        console.log(response.data[1]);
        console.log(
          "The email = " +
            response.data[0].EmailInstitutionnel +
            "The other is == " +
            [mailI]
        );
        console.log(
          "The Apoge = " +
            response.data[0].Apoge +
            "The other is == " +
            [apoge]
        );
        console.log(
          "The CIN = " + response.data[0].CIN + "The other is == " + [cin]
        );
        var result1 = response.data[0].EmailInstitutionnel.localeCompare([mailI]);
        var result2=1  ; 
         if(response.data[0].Apoge==[apoge]){
                  result2=0 ; 
         }
        var result3 = response.data[0].CIN.localeCompare([cin]);
        var k2 = 0;
        var positive = 0 ; 
        var i = 0;
        var checking =0 ; 
        var chacking1 = 0 ; 
         console.log("The length of the data is "+response.data.length);
        while (k2 !== 1 && i<=(response.data.length-1)) {
          result1 = response.data[i].EmailInstitutionnel.localeCompare([mailI]);
          if(response.data[i].Apoge==[apoge]){
            result2=0 ; 
          }
          result3 = response.data[i].CIN.localeCompare([cin]);
          console.log("For the email : "+result1);
          console.log("For the Apoge : "+result2);
          console.log("For the CIN : "+result3);

          if (result1 == 0 && result2 == 0 && result3 == 0) {
            k2 = 1;
            positive=1;
          }
          i++;
        }
        console.log("Before the testing of the document type : ") ; 
        if (positive == 1) {

          if (scolarite.localeCompare([document]) == 0) {
            Axios.post("http://localhost:3001/Scolarite/", {
              apoge:apoge,
            });
            window.location.replace("http://localhost:3000/Succes/");
          } else if (reussite.localeCompare([document]) == 0) {
            window.location.replace("http://localhost:3000/Reussite/");
          } else if (inscription.localeCompare([document]) == 0) {
            Axios.post("http://localhost:3001/Inscription", {
              apoge:apoge,
            });
            window.location.replace("http://localhost:3000/Succes/");
          } else if (notes.localeCompare([document]) == 0) {
            window.location.replace("http://localhost:3000/Notes/");
          } else if (demandeStage.localeCompare([document]) == 0) {
            window.location.replace("http://localhost:3000/DemandeStage/");
          } else if (convocationStage.localeCompare([document]) == 0) {
            window.location.replace("http://localhost:3000/ConvocationStage/");
          }
        } else {
          alert("Identifiant ou Mot de passe non valide");
          window.location.replace("http://localhost:3000/");
        }
      });
    }
  });

  //Checking if the form is filled or not

  $("#document").click(function () {
    var checkForm;
    var trying = "scolarite";
    console.log($(this).find("option:selected").val());
    console.log(trying);
    $("#next").css("cursor", "pointer");
   
    $(".btn-1").css("background", "hsl(221, 82%, 53%)");
    $(".btn-1").css("opacity", "1");

    if ($(this).find("option:selected").val() != "") {
      checkForm = ValidateForm();
      if (checkForm != 1) {
        console.log($(this).find("input:selected").val());
        console.log("All information is set");
      } else {
        alert("Pleasr fill in the forms");
      }
    }

    // })
    function ValidateForm() {
      var formInvalid = false;
      $("form input").each(function () {
        if ($(this).val() === "") {
          formInvalid = true;
        }
      });
      if (formInvalid) return 1;
    }
  

  });

  return (
    <>
      <script src="EtudiantLogic.js"></script>
      <NavbarStudent />
      <div class="title">
        <h1>Veuillez remplir les champs ci-dessous :</h1>
      </div>
      <div class="TheBody">
        <div class="contact-us">
          <form>
            <input
              placeholder="Adresse mail institutionnelle"
              value={test3}

              type="text"

              required
              onChange={(e) => {
                setMailI(e.target.value);
              }}
            />
            <input
              placeholder="Numéro apogée"
              value={test}
              type="email"
              name="customerEmail"
              required
              onChange={(e) => {
                setApoge(e.target.value);
              }}
            />
            <input
              placeholder="CIN"
              type="text"
              value={test2}
              name="Code"
              required
              onChange={(e) => {
                setCin(e.target.value);
                setJoke1("joke1")
                //here
              }}
            />
            <label for="document" placeholder="">
              Document demandé :
            </label>
            <select
              id="document"
              name="document"
              required
              onChange={(e) => {
                setDocument(e.target.value);
              }}
              onClick={() => setJoke1("joke1")}
            >
              <option disabled selected value="">
                {""}
                -- Sélectionner --{" "}
              </option>
              <option value="scolarite">Attestation de scolarité</option>
              <option value="reussite">Attestation de réussite</option>
              <option value="inscription">Attestation d’inscription</option>
              <option value="notes">Relevé de notes</option>
              <option value="demandeStage">Demande de stage</option>
              <option value="convocationStage">Convocation de stage</option>
            </select>
            <div class="mybuttons">
            <div id="next" onClick={() => setJoke("joke")}>
              <button type="submit" class="btn btn-1 btn-sep icon-info">
                Suivant
              </button>
            </div>
            <div id="next2" >
              <Link to="/Profil">
              <button type="submit" class="btn btn-next2 btn-sep icon-info anotherbtn">
                Profil
              </button>
              </Link>
            </div>

            </div>
            {/* <div class="profileClickDiv">
            <Link to={Profil}>
              <p  class="profileClick">
                Suivre demandes 
              </p>
              </Link>
            </div> */}
          </form>
        </div>
      </div>
    </>
  );
}
export default Etudiant;

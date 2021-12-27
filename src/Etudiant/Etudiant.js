/* eslint-disable jsx-a11y/anchor-is-valid */
import "./Etudiant.css";
import { Component } from "react";
import {useState, useEffect} from "react";
import { Link } from "react-router-dom";
import NavbarStudent from "./Navbar/Navbar";
import { GrNext } from "react-icons/gr";
import $ from "jquery";
import Scolarite from "./Scolarite/Scolarite";
import Axios from 'axios'

function Etudiant() {
  const [mailI,setMailI] = useState("");
  const [apoge,setApoge] = useState("");
  const [cin,setCin] = useState("");
  const [document,setDocument] = useState("");
  const submitReview = ()=>{
      Axios.post("http://localhost:3001/", {
        mailI:mailI ,
        apoge:apoge,
        document:document,
        cin:cin,
      });
  };

  var i = 0;
  var the_to ;
  $("#document").click(function () {
    var checkForm ;
    var txt;
    var trying = "scolarite";
    txt = $(this).find("option:selected").text();
    console.log($(this).find("option:selected").val());
    console.log(trying);
    $("#next").css("cursor", "pointer");
    $(".btn").css("background", "hsl(221, 82%, 53%)");
    $(".btn").css("opacity", "1");
    if ($(this).find("option:selected").val() == "scolarite") {
      checkForm=ValidateForm()
      if(checkForm!=1){
        console.log($(this).find("input:selected").val());
        console.log("what ???");
        $("a").attr("href", "../Scolarite");
        // it works with just a href
      }else {
        alert("Please Fill in the form !!");
      }
    }
    else if ($(this).find("option:selected").val() == "reussite") {
      checkForm=ValidateForm()
      if(checkForm!=1){
      console.log("what ???");
      $("a").attr("href", "../Reussite");
      // it works with just a href
      }else {
        alert("Please Fill in the form !!");
      }
    }
    else if ($(this).find("option:selected").val() == "inscription") {
      checkForm=ValidateForm()
      if(checkForm!=1){
      console.log("what ???");
      $("a").attr("href", "../Inscription");
      // it works with just a href
      }else {
        alert("Please Fill in the form !!");
      }
    }
    else if ($(this).find("option:selected").val() == "notes") {
      checkForm=ValidateForm()
      if(checkForm!=1){
      console.log("what ???");
      $("a").attr("href", "../Notes");
      // it works with just a href
      }else {
        alert("Please Fill in the form !!");
      }
    }
    else if ($(this).find("option:selected").val() == "demandeStage") {
      checkForm=ValidateForm()
      if(checkForm!=1){
      console.log("what ???");
      $("a").attr("href", "../DemandeStage");
      // it works with just a href
      }else {
        alert("Please Fill in the form !!");
      }
    }
    else if ($(this).find("option:selected").val() == "convocationStage") {
      checkForm=ValidateForm()
      if(checkForm!=1){
      console.log("what ???");
      $("a").attr("href", "../ConvocationStage");
      // it works with just a href
      }else {
        alert("Please Fill in the form !!");
      }
    }
    // })
    function ValidateForm() {
      var formInvalid = false;
      $('form input').each(function() {
        if ($(this).val() === '') {
          formInvalid = true;
        }
      });
      if (formInvalid)
        return 1 ;
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
              type="text"
              required
              onChange={(e)=>{
                setMailI(e.target.value)
              }}
            />
            <input
              placeholder="Numéro apogée"
              type="email"
              name="customerEmail"
              required="true"
              onChange={(e)=>{
                setApoge(e.target.value)
              }}
            />
            <input placeholder="CIN" type="text" name="Code" required="true" onChange={(e)=>{
              setCin(e.target.value);
            }} />
            <label for="document" placeholder="">
              Document demandé :
            </label>
            <select id="document" name="document" onChange={(e)=>{
              setDocument(e.target.value)
            }}>
              <option disabled selected value="">
                {""}
                -- Sélectionner --{" "}
              </option>
              <option value="scolarite" >Attestation de scolarité</option>
              <option value="reussite"  >Attestation de réussite</option>
              <option value="inscription"  >Attestation d’inscription</option>
              <option value="notes"  >Relevé de notes</option>
              <option value="demandeStage" >Demande de stage</option>
              <option value="convocationStage"  >Convocation de stage</option>
            </select>
          </form>
        </div>
      </div>
      <div id="next" onClick={submitReview}>
          <a href="">
          <button class="btn btn-1 btn-sep icon-info" >Suivant</button>
          </a>
      </div>
    </>
  ); 
}

export default Etudiant;

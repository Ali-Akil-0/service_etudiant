import "./Notes.css";
import {useState} from "react";
import { Link } from "react-router-dom";
import NavbarStudent from "../Navbar/Navbar";
import $ from 'jquery';
import React , {useEffect} from 'react';
// Attention please Axios with {} will fuck you up
import  Axios from "axios";

function Notes() {
  var test = sessionStorage.getItem('apoge');
  console.log("Testing attention please : " + test);
  console.log("ABove is the test check it out");

  const [AnneeNotes,setAnneeNotes] = useState("");
  

  const submitReview40 = ()=>{
      Axios.post("http://localhost:3001/Notes", {
        AnneeNotes:AnneeNotes ,
        test:test ,
      });
  };

  $(document).on("change", "#documentNotes", function () {
    var checkForm ;
    var txt;
    txt = $(this).find("option:selected").text();
    console.log($(this).find("option:selected").val());
    $("#next").css("cursor", "pointer");
    $(".btn--1 ").css("background", "#e06666");
    $(".btn-2").css("background", "#13ad28");
    $(".btn1").css("opacity", "1");
    $(".btn2").css("opacity", "1");
  });

  return (
    <>
      <NavbarStudent />
     <h1 id="notes">Relevé de Notes</h1>
     <select id="documentNotes" name="documentNotes"  onChange={(e)=>{
                setAnneeNotes(e.target.value)
              }}>
              <option disabled selected value="">
                {""}
                -- Sélectionner --{" "}
              </option>
              <option value="2021">2021</option>
              <option value="2020">2020</option>
              <option value="2019">2019</option>
              <option value="2018">2018</option>
            </select>
            <div id="next" onClick={submitReview40}>
              <Link to="/">
            <button class="btn1 btn--1 btn-sep-1" >Annuler</button>
            </Link>
            <Link to="/Succes">
            <button class="btn2 btn-2 btn-sep-2">Envoyer</button>
            </Link>
      </div>
    </>
  );

}

export default Notes;

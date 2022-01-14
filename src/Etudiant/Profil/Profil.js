import React ,{useEffect , useState} from "react";
import NavbarStudent from "../Navbar/Navbar";
import "./Profil.css";
import Profile from "./Placeholder.jpg";
import  Axios from "axios";
import image from "./back.jpg";

function Profil() {
  const [prenom , setprenom] =useState("") ; 
  const [nom , setnom] =useState("") ; 
  const [reussite , setreussite] =useState("") ; 
  const [statusreussite , setstatusreussite] =useState("") ; 

  const [scolarite , setscolarite] =useState("") ; 
  const [statusscolarite , setstatusscolarite] =useState("") ; 

  const [inscription , setinscription] =useState("") ; 
  const [statusinscription , setstatusinscription] =useState("") ; 

  const [note , setnote] =useState("") ; 
  const [statusnote , setstatusnote] =useState("") ; 

  const [demandeStage , setdemandeStage] =useState("") ; 
  const [statusdemandeStage , setstatusdemandeStage] =useState("") ; 

  const [ConvocationStage , setConvocationStage] =useState("") ; 
  const [statusConvocationStage , setstatusConvocationStage] =useState("") ; 


  var test = sessionStorage.getItem('apoge');
  console.log("Testing attention please : " + test);
  Axios.post("http://localhost:3001/Profil/", {
    test:test,
  });
  console.log("after");

  // // The use effect
  useEffect(() => {
     Axios.get("http://localhost:3001/Profil/", { params: { answer: test } }).then(response => {
      let helping = response.data[0] ; 
     setreussite(helping.date_demande) ; 
     setstatusreussite(helping.Status);
     setprenom(helping.Prenom);
     setnom(helping.Nom);
     let helping2 = response.data[1] ; 
     setscolarite(helping2.date_demande) ; 
     setstatusscolarite(helping2.Status);
     console.log(reussite);
     console.log("Ontop");
      console.log(response.data);
      console.log("Ontop");
    },[])
  });

  return (
    <>
      <NavbarStudent></NavbarStudent>
      <div class="allcontainer">
      <img class="profile-img" src={Profile} alt="ProfileImage" />
      <div class="NomProfile">
        <h1>{prenom} {nom} </h1>
        <hr />
      </div>
      <table class="ProfilTable">
        <tr>
          <td>
            <div class="InfoDetail DivColor1">
              <h2> Attestation de scolarité</h2>
              <h3>  Date de la dernière  demande </h3>
              <p class="importantInfo">{scolarite}</p>
              <h3>  Status</h3>
              <p class="importantInfo">{statusscolarite}</p>
            </div>
          </td>
          <td>
            <div class="InfoDetail DivColor2">
              <h2>Attestation de réussite</h2>
              <h3> Date de la dernière  demande </h3>
              <p class="importantInfo">{reussite}</p>
              <h3>  Status</h3>
              <p class="importantInfo">{statusreussite}</p>
            </div>
          </td>
          <td>
            <div class="InfoDetail DivColor3">
              <h2>Attestation d’inscription</h2>
              <h3> Date de la dernière  demande</h3>
              <p class="importantInfo">{inscription}</p>
              <h3>  Status</h3>
              <p class="importantInfo">{statusinscription}</p>
            </div>
          </td>
          <td>
            <div class="InfoDetail DivColor4">
              <h2>Relevé des notes</h2>
              <h3 class="h3tr">  Date de la dernière  demande </h3>
              <p class="importantInfo">{note}</p>
              <h3>  Status</h3>
              <p class="importantInfo">{statusnote}</p>
            </div>
          </td>
          <td>
            <div class="InfoDetail DivColor5">
              <h2>Demande de stage</h2>
              <h3>  Date de la dernière  demande</h3>
              <p class="importantInfo">{demandeStage}</p>
              <h3>  Status</h3>
              <p class="importantInfo">{statusdemandeStage}</p>
            </div>
          </td>
          <td>
            <div class="InfoDetail DivColor6">
              <h2>Convocation de stage</h2>
              <h3>  Date de la dernière  demande </h3>
              <p class="importantInfo">{ConvocationStage}</p>
              <h3>  Status</h3>
              <p class="importantInfo">{statusConvocationStage}</p>
            </div>
          </td>
        </tr>
      </table>
      </div>
    </>
  );
}
export default Profil;
import "./Reussite.css";
import { Link } from "react-router-dom";
import NavbarStudent from "../Navbar/Navbar";
import $ from 'jquery';

function Reussite() {


  return (
    <>
        <NavbarStudent />
        <div id="headercontainer">
        <h1 id="Scolarite">Votre demande a été envoyée avec succès !</h1>
        </div>
     
     <div id="next">
         <Link to="/">
          <button class="btn btn-1 btn-sep icon-info" id="successButton">Retourner à la page d'accueil</button>
          </Link>
      </div>
    </>
  );

}

export default Reussite;

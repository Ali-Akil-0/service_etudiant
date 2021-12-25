import NavbarStudent from "../../Navbar/Navbar";
import { Link } from "react-router-dom";
import "./Entreprise.css";

function Entreprise() {
 
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
            />
            <input
              placeholder="Adresse"
              type="text"
              name="customerEmail"
              required
            />
            <input placeholder="Numéro de téléphone" type="text" name="Tel" required />
            <input placeholder="Adresse mail" type="email" name="email" required />
            <input placeholder="Nom de l’encadrant dans l’entreprise (optionnel)" type="text" id="encadrant" name="encadrant" required />
          </form>
        </div>
      </div>
      <div id="next">
              <Link to="/Etudiant">
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

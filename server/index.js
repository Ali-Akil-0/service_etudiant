const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");
const multer = require("multer");
var multipart = require('connect-multiparty');
const bodyParser = require("body-parser");
const session = require("express-session");
const { FaPaperclip } = require("react-icons/fa");
var multipartMiddleware = multipart();

const fileStorageEngine = multer.diskStorage({
    destination : (req,file,cb)=>{
        cb(null,'../../Files_Directory');
    },
    filename : (req,file,cb)=>{
        cb(null,Date.now()+'--'+file.originalname);
    },
});
const upload = multer({storage : fileStorageEngine});
const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "",
  database: "demandedocument",
});
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Etudiant
app.post("/", (req, res) => {
  const mailI = req.body.mailI;
  const apoge = req.body.apoge;
  const document = req.body.document;
  app.locals.mailI = "Hello world";
  app.locals.apoge = apoge;
  app.locals.document = document;
});
app.get("/", (req, res) => {
  db.query(
    "select EmailInstitutionnel,Apoge,CIN from etudiants;",
    (err, result) => {
      res.send(result);
      console.log(result);
    }
  );
});

// Profil :
app.get("/Profil", (req, res) => {
  let test = req.query["answer"];
  console.log("Testing");
  console.log(test);
  db.query(
    "select type_demande,Apoge,Nom,Prenom,Status,date_demande from historique_demandes where Apoge=? ORDER BY type_demande ASC ;",
    [test],
    (err, result) => {
      console.log(result);
      res.send(result);
    }
  );
});
// For the email
// working on scolarite 

app.get("/Scolarite", (req, res) => {
  res.send("Scolarité");
});
app.post("/Scolarite", (req, res) => {
  const apoge = req.body.apoge;
  var Nom;
  var Prenom;
  var CodeEtudiant;
  var CIN;
  var Filiere;
  var LieuNaissance;

  db.query(
    "select Nom,Prenom,CodeEtudiant,CIN,Filiere,LieuNaissance,Apoge from etudiants where Apoge = ?;",
    [apoge],
    (err, result) => {
      // res.send(result);
      console.log(result);
      Nom = result[0].Nom;
      console.log(Nom);
      Prenom = result[0].Prenom;
      console.log(Prenom);
      Prenom = result[0].Prenom;
      CodeEtudiant = result[0].CodeEtudiant;
      console.log(CodeEtudiant);
      CIN = result[0].CIN;
      console.log(CIN);
      Filiere = result[0].Filiere;
      console.log(Filiere);
      LieuNaissance = result[0].LieuNaissance;
      console.log("Le lieu de naissance est : " + LieuNaissance);
      console.log("Name after query : " + Nom);
      const sqlInsert =
        "Insert into attestationscolarite(Nom,Prenom,CodeEtudiant,CIN,Filiere,LieuNaissance,Apoge) values(?,?,?,?,?,?,?) ; ";
      db.query(
        sqlInsert,
        [Nom, Prenom, CodeEtudiant, CIN, Filiere, LieuNaissance, apoge],
        (err, result) => {
          console.log(err);
        }
      );
    }
  );
});


// Working pour l'attestation de réussite 


app.get("/Reussite", (req, res) => {
  res.send("Reussite");
});
app.post("/Reussite", (req, res) => {
  const test = req.body.test;
  const AnneeAttestation = req.body.AnneeAttestation ; 
  var Nom;
  var Prenom;
  var DateNaissance;
  var LieuNaissance ;
  var Filiere;
  console.log("Are you here ???????????????????????????,");

  db.query(
    "select Nom,Prenom,DateNaissance,LieuNaissance,Filiere,Apoge from etudiants where Apoge = ?;",
    [test],
    (err, result) => {
      // res.send(result);
      console.log(result[0]);
      Nom = result[0].Nom;
      console.log(Nom);
      Prenom = result[0].Prenom;
      console.log(Prenom);
      Prenom = result[0].Prenom;
      Filiere = result[0].Filiere;
      console.log(Filiere);
      LieuNaissance = result[0].LieuNaissance;
      console.log("Le lieu de naissance est : " + LieuNaissance);
      DateNaissance = result[0].DateNaissance;
      console.log("Le lieu de naissance est : " + DateNaissance);
      console.log("Name after query : " + Nom);
      const sqlInsert =
        "Insert into attestationreussite(Nom,Prenom,DateNaissance,LieuNaissance,Filiere,AnneeAttestation,Apoge) values(?,?,?,?,?,?,?) ; ";
      db.query(
        sqlInsert,
        [Nom, Prenom, DateNaissance, LieuNaissance, Filiere, AnneeAttestation, test],
        (err, result) => {
          console.log(err);
        }
      );
    }
  );
});

// Working pour l'inscription

app.get("/Inscription", (req, res) => {
  res.send("Inscription");
});
app.post("/Inscription", (req, res) => {
  const apoge = req.body.apoge;
  var Nom;
  var Prenom;
  var AnneeDebut;

  db.query(
    "select AnneeDebut,Nom,Prenom,Apoge from etudiants where Apoge = ?;",
    [apoge],
    (err, result) => {
      // res.send(result);
      console.log(result);
      Nom = result[0].Nom;
      console.log(Nom);
      Prenom = result[0].Prenom;
      console.log(Prenom);
      AnneeDebut = result[0].AnneeDebut;
      console.log(AnneeDebut);

      console.log("Name after query : " + Nom);
      const sqlInsert =
        "Insert into attestationinscription(AnneeDebut,Nom,Prenom,Apoge) values(?,?,?,?) ; ";
      db.query(sqlInsert, [AnneeDebut, Nom, Prenom, apoge], (err, result) => {
        console.log(err);
      });
    }
  );
});

// Working on the releve de notes

app.get("/Notes", (req, res) => {
  res.send("Notes");
});
app.post("/Notes", (req, res) => {
  const test = req.body.test;
  const AnneeNotes = req.body.AnneeNotes ; 
  var Nom;
  var Prenom;
  var AnneeDebut;
  var CodeEtudiant;
  var AdresseEtudiant;
    console.log("Before.....");
    console.log(test);
  db.query(
    "select Nom,Prenom,CodeEtudiant,AnneeDebut,AdresseEtudiant,Apoge from etudiants where Apoge = ?;",
    [test],
    (err, result) => {
      // res.send(result);
      console.log(result[0]);
      Nom = result[0].Nom;
      console.log("The name is   : "+ Nom);
      Prenom = result[0].Prenom;
      console.log("The first name is  : "+ Prenom);
      AnneeDebut = result[0].AnneeDebut;
      console.log(AnneeDebut);
      CodeEtudiant = result[0].CodeEtudiant;
      console.log(CodeEtudiant);
      AdresseEtudiant = result[0].AdresseEtudiant;
      console.log(AdresseEtudiant);

      console.log("Name after query : " + Nom);
      const sqlInsert =
        "Insert into relevenotes(CodeEtudiant,AnneeDebut,AdresseEtudiant,AnneeNotes,Nom,Prenom,Apoge) values(?,?,?,?,?,?,?) ; ";
      db.query(
        sqlInsert,
        [CodeEtudiant, AnneeDebut, AdresseEtudiant,AnneeNotes, Nom, Prenom, test],
        (err, result) => {
          console.log(err);
        }
      );
    }
  );
});

// Wokring for the internship

app.get("/Stage", (req, res) => {
  res.send("Stage");
});
app.post("/Stage", (req, res) => {
  const typeStage = req.body.typeStage;
  const startDate = req.body.startDate;
  const enddate = req.body.enddate;
  const nomEntreprise = req.body.nomEntreprise;
  const test = req.body.test;
  var Nom;
  var Prenom;
  db.query(
    "select Nom,Prenom,Apoge from etudiants where Apoge = ?;",
    [test],
    (err, result) => {
      // res.send(result);
      console.log(result);
      Nom = result[0].Nom;
      console.log(Nom);
      Prenom = result[0].Prenom;
      console.log(Prenom);
      console.log("Name after query : " + Nom);
      const sqlInsert =
        "Insert into stage(TypeStage,DebutStage,FinStage,NomEntreprise,Nom,Prenom,Apoge) values(?,?,?,?,?,?,?) ; ";
      db.query(
        sqlInsert,
        [typeStage,startDate,enddate,nomEntreprise,Nom, Prenom,test],
        (err, result) => {
          console.log(err);
        }
      );
    }
  );
 
});

// Uploading the file 
app.post("/ConvocationStage",upload.single('image'),(req,res)=>{
    console.log(req.file);
    res.send("Single file upload");
    // res.send(200);
})
// working on the convocation de stage

app.post("/Entreprise", (req, res) => {
  const raison = req.body.raison;
  const addresse = req.body.addresse;
  const email = req.body.email;
  const nomEncadrant = req.body.nomEncadrant;
  const testTel = req.body.testTel ; 
  const testStartDate = req.body.testStartDate ; 
  const testEndDate = req.body.testEndDate ; 
  const testApoge = req.body.testApoge ; 
  // getting the name last name and filiere
  var Nom;
  var Prenom;
  var Filiere ; 
  db.query(
    "select Nom,Prenom,Filiere,Apoge from etudiants where Apoge = ?;",
    [testApoge],
    (err, result) => {
      // res.send(result);
      console.log(result);
      Nom = result[0].Nom;
      console.log(Nom);
      Prenom = result[0].Prenom;
      console.log(Prenom);
      Filiere = result[0].Filiere;
      console.log(Filiere);
      console.log("Name after query : " + Nom);
      const sqlInsert =
      "Insert into convocationstage(Tel,StartDate,EndDate,Apoge,Nom,Prenom,Filiere,RaisonSociale,Addresse,EmailEntreprise,NomEncadrant) values(?,?,?,?,?,?,?,?,?,?,?) ; ";
      // Nom Prenom and Filiere are left out 
    db.query(
      sqlInsert,
      [testTel,testStartDate,testEndDate,testApoge,Nom,Prenom,Filiere,raison, addresse, email, nomEncadrant],
      (err, result) => {
        console.log(err);
      }
    );
    }
  );
// Maybe useless
});

app.listen(3001, () => {
  console.log("running on port 3001");
});

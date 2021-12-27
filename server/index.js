const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const mysql = require('mysql');
const session =require('express-session');
const cors = require('cors');

const db = mysql.createPool({
    host:'localhost',
    user:'root',
    password:'',
    database:'demandedocument',

});
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({extended:true}))
app.get("/", (req,res)=>{
    res.send("hello");
});

app.post("/", (req,res)=>{
    const mailI = req.body.mailI;
    const apoge = req.body.apoge ;
    const document = req.body.document ; 
    const cin = req.body.cin ;
    const sqlInsert = "Insert into acceuil(EmailInstitutionnel,Apoge,cin,Document) values(?,?,?,?) ; ";
    db.query(sqlInsert ,[mailI,apoge,cin,document],(err, result)=>{
        console.log(err);
    });
});

app.get("/Stage", (req,res)=>{
    res.send("Stage");
});
app.post("/Stage", (req,res)=>{
    const typeStage = req.body.typeStage;
    const startDate = req.body.startDate ;
    const enddate = req.body.enddate ; 
    const nomEntreprise = req.body.nomEntreprise ;
    const sqlInsert = "Insert into stage(TypeStage,DebutStage,FinStage,NomEntreprise) values(?,?,?,?) ; ";
    db.query(sqlInsert ,[typeStage,startDate,enddate,nomEntreprise],(err, result)=>{
        console.log(err);
    });
});
app.get("/Convocation", (req,res)=>{
    res.send("Convocation");
});
app.post("/Convocation", (req,res)=>{
    const tel = req.body.tel;
    const startDate = req.body.startDate ;
    const enddate = req.body.enddate ; 
    const sqlInsert = "Insert into convocationstage(tel,StartDate,EndDate) values(?,?,?) ; ";
    db.query(sqlInsert ,[tel,startDate,enddate],(err, result)=>{
        console.log(err);
    });
});


app.post("/Entreprise", (req,res)=>{
    const raison = req.body.raison;
    const addresse = req.body.addresse ;
    const email = req.body.email ; 
    const nomEncadrant = req.body.nomEncadrant ; 
    const sqlInsert = "Insert into entreprise(RaisonSociale,Addresse,EmailEntreprise,NomEncadrant) values(?,?,?,?) ; ";
    db.query(sqlInsert ,[raison,addresse,email,nomEncadrant],(err, result)=>{
        console.log(err);
    });
});

app.listen(3001,()=>{
    console.log("running on port 3001");
});

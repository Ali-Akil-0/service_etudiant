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
    const sqlInsert = "Insert into acceuil(EmailInstitutionnel,Apoge,Document) values(?,?,?) ; ";
    db.query(sqlInsert ,[mailI,apoge,document],(err, result)=>{
        console.log(err);
    });
});


app.listen(3001,()=>{
    console.log("running on port 3001");
});

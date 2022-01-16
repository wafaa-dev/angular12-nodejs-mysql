const express = require ('express');
const bodyparser =require ('body-parser');
const cors =require('cors');
const mysql=require('mysql2');

const app=express();

app.use(cors());
app.use(bodyparser.json());

// connect mysql database
 const db=mysql.createConnection({
     host:'localhost',
     user:'root',
     password:'',
     database:'personne',
     port:3306,
 });
// check database connection
db.connect(err=>{
    if (err){
        console.log(err,'database error');
} else
      console.log('database connected ...');   
})

// //get all data 
app.get('/personne',(req,res)=>{
// console.log('get personnes')

var qr =`select * from personnes`;
db.query(qr,(err,result)=>{
if (err)
{
    console.log(err,'error');
}
if(result.length>0)
{
    res.send({
        message:'all data from backend',
        data :result
    });
}
});
});

//get single data
app.get('/personne/:id',(req,res)=>{
// console.log(req.params.id,`is the person id`)
let pId=req.params.id;
let qr=`select * from personnes where id=${pId}`;
db.query(qr,(err,result)=>{
    if(err){console.log(err);} 
    if(result.length>0)
{
    res.send({
        message:'get single data',
        data :result
    });
}
else {
    res.send({
        message:'data not found'
    });
}
})
});

//create data
app.post('/personne',(req,res)=>{
    // console.log('post data');
    console.log(req.body,'created data');
    let name=req.body.name;
    let lastname=req.body.lastname;
    let age=req.body.age;
    let path=req.body.path;
    let cin=req.body.cin;
    let job=req.body.job;
    let qr=`insert into personnes(name,lastname,age,path,cin,job) 
    values('${name}','${lastname}',${age},'${path}',${cin},'${job}')`;
db.query(qr,(err,result)=>{
    if(err){console.log(err);}
else
{    console.log(result,'resultat')
}
    res.send({
        message:'data inserted'
    });
//     if(result.lenght>0)
//     {res.send({
//     message:'data inserted'  
//     });
// }else
// {res.send({
//         message:'wrong...'
//     })
// }
});
});

//update data 
app.put('/personne/:id',(req,res)=>{
    // console.log(req.body,'data to update');
    let pId=req.params.id;
    let name=req.body.name;
    let lastname=req.body.last;
    let age=req.body.age;
    let path=req.body.path;
    let cin=req.body.cin;
    let job=req.body.job;
    let qr=`UPDATE personnes SET name='${name}',lastname='${lastname}',age=${age},path='${path}',cin=${cin},job='${job}' WHERE id=${pId}`;

db.query(qr,(err,result)=>{
    if (err){console.log(err);}
 res.send({
        message:'your data has been updated',
        data :result
    });
});
});

//DELETE single data
app.delete('/personne/:id',(req,res)=>{
    let pId =req.params.id;

    let qr=`delete from personnes where id='${pId}'`;
    db.query(qr,(err,result)=>{
        if (err){console.log(err);}
        res.send({
            message:'data deleted'
        });

    });
});
app.listen(3000,()=>{
    console.log('server running ..');
})
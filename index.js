const express=require('express');
const app=express();
app.get('/',(req,res,next)=>{
        res.send('welcome to firebase');
});
app.listen(3000,()=>{
        console.log('Server');
});


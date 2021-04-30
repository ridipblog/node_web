const express=require('express');
const app=express();
const port=process.env.PORT || 3000;
app.get('/',(req,res,next)=>{
        res.send('welcome to heroku i am very happy');
});
app.listen(port,()=>{
        console.log('Server');
});


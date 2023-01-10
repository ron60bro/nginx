const express=require('express');
const app = express();

app.get("/",(req,res)=>{
    res.send('<h1>My Node App</h1>')
});
app.listen(5001,()=>{
    console.log('App is listening to port 5001')
})
const express=require("express");
const port=8000;
const app=express();

app.use(express.urlencoded());

app.set("view engine","ejs");
app.set("views","./views");

app.use("/",require("./routes/home"));



app.listen(port,function(e){
if(e){
    console.log("Error in running the server");
}
console.log(`Server is running at port:${port}`);
});
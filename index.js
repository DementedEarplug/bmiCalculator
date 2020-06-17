const express = require("express")
const bPars = require("body-parser")
const app = express()

//To grab shit from html froms
app.use(bPars.urlencoded({extended:true}))

// Routes Setup
app.get("/",(req, res)=>{
    res.sendFile(__dirname+"/calculator.html")
})

app.post("/", (req, res)=>{
    let num1 = Number(req.body.num1)
    let num2 = Number(req.body.num2)

    let sum = num1 +num2
    res.send("Sum of num1 and num1 is "+sum)
})

app.get("/bmi",(req,res)=>{
    res.sendFile(__dirname+"/bmicalc.html")
})

app.post("/bmi",(req,res)=>{
    let h = Number(req.body.height)
    let w = Number(req.body.weight)*705

    let bmi = ((w/h)/h).toFixed(2)

    res.send("Your bmi is: "+bmi)
})

//Listening on port 8080
app.listen(8080, ()=>{
    console.log("Server started on port 8080")
})

const express = require("express");

const app = express();

app.use(express.json());

app.get("/",function(req,res){
    res.sendFile("/Users/omkar/Development/learning backend/backend0.3/index.html")
})


//using query parameters
// http://localhost:3002/sum?a=1&b=2
/*app.get("/sum",function(req,res){
    const a = parseInt(req.query.a);
    const b = parseInt(req.query.b);

    const sum = a + b;

    res.json({
        ans : sum
    })
}) */

//using path parameters
//http://localhost:3002/sum/2/4
app.get("/add/:a/:b",function(req,res){
    const a = parseInt(req.params.a);
    const b = parseInt(req.params.b);

    const sum = a + b;

    res.json({
        ans : sum
    })
})
app.get("/sub/:a/:b",function(req,res){
    const a = parseInt(req.params.a);
    const b = parseInt(req.params.b);

    const sub = a - b;

    res.json({
        ans : sub
    })
})
app.get("/multiply/:a/:b",function(req,res){
    const a = parseInt(req.params.a);
    const b = parseInt(req.params.b);

    const multiply = a * b;

    res.json({
        ans : multiply
    })
})
app.get("/division/:a/:b",function(req,res){
    const a = parseInt(req.params.a);
    const b = parseInt(req.params.b);

    const division = a / b;

    res.json({
        ans : division
    })
})

app.listen(3003);
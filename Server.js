const express =  require("express");
const request = require('request-promise');

const PORT = process.env.PORT || 8000

var cache = {};


const app = express()

app.get("/News", function(req, res){
    var baseURl = "https://gnews.io/api/v4/"
    var maxArticle = 10;
    var title = "";
    var keyword = "Example";
    var token = "22b7d44550da6f0887c4c748364c0e64";
    var key = "";

    token = req.query.token || token;
    maxArticle = req.query.maxArticle;
    title = req.query.in;
    keyword = req.query.keyword;

    if(keyword === undefined){
        baseURl = baseURl + "top-headlines?";
        key = baseURl
        baseURl = baseURl + "token=" + token;

    }
    else{
        baseURl = baseURl + "search?q=" + keyword;
        key = baseURl
        baseURl = baseURl + "&token=" + token;
    }


    if(maxArticle === undefined){

        baseURl = baseURl + "&max=10"
        key = key + "&max=10"

    }
    else{
        baseURl = baseURl + "&max=" + maxArticle;
        key = key + "&max=" + maxArticle
    }

    if(title !== undefined){
        baseURl = baseURl + "&in=title";
        key = key + "&in=title";
    }


    const run = async()=>{
        const data = await request(baseURl)
        const jsonData = JSON.parse(data)
        cache[key] = jsonData;
        res.json(jsonData);
    }

    if(cache[key] !== undefined){
        console.log("Cache is called");
        res.json(cache[key]);
    }
    else{
        run();
        
    }
    

})



app.listen(PORT, function (){
    console.log("Server is running");

})




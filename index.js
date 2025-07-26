console.log("server staring");
const http=require("http");
const fs=require("fs");
const server=http.createServer((req,res)=>{
     res.setHeader("Content-Type","text/html");
    let path="./html/";
    switch(req.url){
        case "/" :
            path+='index.html';
            res.statusCode=200;
            break;  
        case "/about":
            path+="about.html";
            res.statusCode=200;
            break;
        case "/about-us":
            
            res.statusCode=301;
            res.setHeader("Location","/about");
            break;
        default :
            path+="notfound.html";
            res.statusCode=404;
            break;
    }
    //set hreader
   
    fs.readFile(path,(err,data)=>{
        if(err){
            console.log(err);
            res.end();  }
            else{
                res.write(data);
                res.end();
            }
    })


});
const PORT=process.env.PORT||3000;
server.listen(PORT ,"localhost",()=>{ 

    console.log("listening to port 3000")
});
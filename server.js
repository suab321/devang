const app=require('server')();

const path=require('path');


app.use(express.static(__dirname+"/dist/devtoang"));

app.get('*',(req,res)=>{
    res.sendFile(path.join(__dirname+'/dist/devtoang/index.html'));
})


app.listen(process.env.PORT||3002);
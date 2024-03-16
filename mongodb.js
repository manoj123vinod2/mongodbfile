const mongoose=require('mongoose');

let compass_url='mongodb://localhost:27017/sampledb'
let mongodb_url="mongodb+srv://athulps:athulps@athulps.80h2hoh.mongodb.net/?retryWrites=true&w=majority&appName=athulps"
mongoose.connect(mongodb_url).then(()=>{
    console.log("db connected");
})
.catch( (err)=>{
    console.log(err)
});



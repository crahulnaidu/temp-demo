const {readFile,writeFile}=require('fs');
console.log("starting");
readFile('./content/first.txt','utf-8',(err,result)=>{
if(err){
    console.log(err);
}
const first=result;

readFile('./content/second.txt','utf-8',(err,result)=>{
if(err){
    console.log(err);
}
const second=result;

writeFile('./content/fs-async.txt',"Hello this is the result:"+first +second,(err,result)=>{

if(err){
    console.log(err);
}
console.log("in progress");
})


})



})

console.log("done with the task");
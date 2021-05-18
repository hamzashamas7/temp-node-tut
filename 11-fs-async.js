//FS Module
const {readFile,writeFile} = require('fs')

readFile('./content/first.txt','utf8',(err,result)=>{
    if(err){
        return;
    }
    const first=result
    readFile('./content/second.txt','utf8',(err,result)=>{
        if(err){
            console.log(err);
            return
        }
        const sec=result
        writeFile('./content/result-asyncs.txt','here is result a sync '+first+" file",(err,result)=>{
            if(err){
                return
            }
            console.log(result);
        })
    })

});


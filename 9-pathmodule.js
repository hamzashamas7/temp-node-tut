const path=require('path')
console.log(path.sep);

const filePath=path.join('/content','subfolder','text.txt')
console.log(filePath);

const bsepath=path.basename(filePath);
console.log(bsepath);

const absolutePath=path.resolve(__dirname,'content','subfolder','text.txt');
console.log(absolutePath);
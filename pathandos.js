const os=require('os');

const user=os.userInfo();

const currentOs={
    name:os.type(),
    release:os.release(),
    totalMem:os.totalmem(),
    freeMem:os.freemem()
};

const path=require('path');
console.log(path.sep);

const filePath=path.join('/content','subfolder','text.txt');
const base=path.basename(filePath);
const absolute=path.resolve(__dirname,'content','subfolder','text.txt');
console.log(absolute);

console.log("hello sururaj");

let a = setInterval(()=>{
    console.log("hello");
},1000)

setTimeout(()=>{
    console.log("welcome...");
    clearInterval(a)
},4000)

console.log(__dirname);
console.log(__filename);



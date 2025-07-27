
function person(name, callbackFn){
 setTimeout(() => {
     console.log(`Hello ${name}`)
 }, 3000);
  callbackFn()
}

function address(){
    console.log('Nigeria')
}

person("Yusuf", address)

const fs = require('fs')

fs.readFile("example.txt", "utf8", (err, data)=>{
    if(err){
        console.err("Error reading file", err)
        return
    }

    console.log(data)
})
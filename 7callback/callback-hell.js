const fs = require("fs")

fs.readFile("example.txt", "utf8", (err, data) => {
    const modifyFileData = data.toUpperCase();
      

    fs.writeFile("output.txt", modifyFileData, (err) => {
        if (err){
            console.error("Error writing file", err) 
            return
        }
        console.log("data writing to the new file")

        fs.readFile("output.txt", "utf8", (err, data) => {
            if(err){
                console.error("Error Reading file", err)

            }

            console.log(data)
        })



    })


})
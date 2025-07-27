const fs = require('fs');
const path = require('path');

const dataFolder = path.join(__dirname, 'data');

if (!fs.existsSync(dataFolder)) {
    fs.mkdirSync(dataFolder);
    console("data folder created");
}

const filePath = path.join(dataFolder, 'example.txt');

fs.writeFileSync(filePath, 'Hello, from node js')
    console.log('File created successfully');


    // const readContentFromFile = fs.readFileSync(filePath, 'utf8');
    // console.log('File content:', readContentFromFile); // Outputs: Hello, from node

    fs.appendFileSync(filePath, '\nThis is a new line added.');
    console.log('Content appended successfully');
const readContentFromFile = fs.readFileSync(filePath, 'utf8');
    console.log('File content:', readContentFromFile); // Outputs: Hello, from node

    const asyncfilePath = path.join(dataFolder, 'async-example.txt');
fs.writeFile(asyncfilePath, 'This is an async file', (err) => {
    if(err) throw err;
    console.log('Async file created successfully');

    fs.readFile(asyncfilePath, 'utf8', (err, data) => {
        if (err) throw err;
        console.log('Async file content:', data); // Outputs: This is an async file
 
        fs.appendFile(asyncfilePath, '\nThis is an appended line in async file', (err) => {
            if (err) throw err;
            console.log('Async content appended successfully');

            fs.readFile(asyncfilePath, 'utf8', (err, data) => {
                if (err) throw err;
                console.log('Updated async file content:', data); // Outputs: This is an async file
            });
        });

})
});
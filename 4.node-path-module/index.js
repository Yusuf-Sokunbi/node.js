const path = require('path');

console.log("Directory name :", path.dirname(__filename));
console.log("file name :", path.basename(__filename));
console.log("file extension :", path.extname(__filename));

const joinPath = path.join("/user", "documents","node", "file.txt");
console.log("Joined path :", joinPath); // Outputs: /user/documents/node/file.txt

const resolvedPath = path.resolve("user", "documents", "node", "file.txt");
console.log("Resolved path :", resolvedPath); // Outputs: Absolute path to the file.txt based

const normalizedPath = path.normalize("/user/.documents/../node/file.txt");
console.log("Normalized path :", normalizedPath); // Outputs: /user/node/file.txt
// file system
const fs = require("fs");

//read file below are asynchoronous methods
fs.readFile("./docs/file.txt", (err, data) => {
  if (err) {
    console.log(err);
  }
  console.log(data.toString());
});


// writing files
// if the file name in which we want to write is not present
// then in that case it will create that file and the text
fs.writeFile("./docs/file.txt", "hello bro", () => {});

// directory create a new folder
fs.mkdir("./assests", (err) => {
  if (err) {
    console.log(err);
  }
  console.log("folder created");
});

// delete a file
if (fs.existsSync("./docs/deleteme.txt")) {
  fs.unlink("./docs/deleteme.txt", (err) => {
    if (err) {
      console.log(err);
    }
    console.log("file deleted");
  });
}

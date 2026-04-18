const fs = require("fs");
const {Command} = require("commander");
const program = new Command();

program
    .name('counter')
    .description("CLI for file based tasks")
    .version("1.0.0")

// Create a file
program.command('cr')
    .description('Creates a new file')
    .argument('<file>', 'file to create')
    .action((fileName)=> {
        fs.writeFile(fileName, "", (err)=> {
            if(err){
                console.error("Error:", err.message);
                return;
            }
            else{
                console.log(`File ${fileName} created`);
            }
        });
    });

// Delete a file
program.command('dl')
    .description('Deletes an existing file')
    .argument('<file>', 'file to delete')
    .action((fileName)=> {
        fs.unlink(fileName, (err)=> {
            if(err) {
                console.error("Error:", err.message);
                return;
            }
            else {
                console.log(`File ${fileName} deleted`);
            }
        });
    });

// Count Words
program.command('CountWords')
    .description('Count number of words')
    .argument('<file>', 'file to count')
    .action((fileName)=> {
        fs.readFile(fileName, "utf-8", (err, data) => {
            if(err) {
                console.error("Error:", err.message);
                return;
            }
            else {
                const words = data.trim() === "" ? 0 : data.trim().split(/\s+/).length;
                if(words === 1) {
                    console.log(`There is ${words} word in ${fileName}`);
                }
                else{
                    console.log(`There are ${words} words in ${fileName}`);
                }
            }
        });
    });

// Count Lines
program.command('CountLines')
    .description('Count number of lines')
    .argument('<file>', 'file to count')
    .action((fileName) => {
        fs.readFile(fileName, "utf-8", (err, data)=> {
            if(err){
                console.error("Error:", err.message);
                return;
            }
            else {
                const lines = data.trim() === "" ? 0 : data.trim().split("\n").length;
                if(lines === 1) {
                    console.log(`There is ${lines} line in ${fileName}`);
                }
                else{
                    console.log(`There are ${lines} lines in ${fileName}`);
                }
            }
        });
    });

// Show Content
program.command('show')
    .description('Show data in existing file')
    .argument("<file>", "file to show" )
    .action((fileName)=> {
        fs.readFile(fileName, "utf-8", (err, data)=> {
            if(err) {
                console.error("Error:", err.message);
                return;
            }
            else{
                console.log(data);
            }
        });
    });

//Append content
program.command('add')
    .description('Append text to an existing file')
    .argument("<file>", "file to append to")
    .argument("<text>", "text to append")
    .action((fileName, text)=> {
        fs.appendFile(fileName, text + "\n", (err) =>{
            if(err){
                console.error("Error:", err.message);
                return;
            }
            console.log(`Text added to file ${fileName}`);
        });
    });
    

program.parse();

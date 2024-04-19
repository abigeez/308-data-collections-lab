//Part 1 Refactoring Old Code
//"ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor's Assistant,26"
//string before it turns into an array
let csvStr = "ID,Name,Occupation,Age,\n42,Bruce,Knight,41,\n57,Bob,Fry Cook,19,\n63,Blaine,Quiz Master,58,\n98,Bill,Doctor's Assistant,26"
//array to split up the rows later
let rows =[] 
//array to set up the initial columns
let cells =[]
// taking the string and splitting it  by the /n to create a new substring for each break
rows=csvStr.split("/n");
// iterating through every line and executing cells to be split by the comma 
for(let i=0;i<rows.length;i++){
    cells = rows[i].split(",");
    console.log(`${cells[0]} ${cells[1]} ${cells[2]} ${cells[3]}`)
}
// console logging the cells by their iteration which produces the value of the first four columns


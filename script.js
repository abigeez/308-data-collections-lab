//Part 1 Refactoring Old Code
//"ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor's Assistant,26"
//string before it turns into an array
let csvStr = "ID,Name,Occupation,Age,\n42,Bruce,Knight,41,\n57,Bob,Fry Cook,19,\n63,Blaine,Quiz Master,58,\n98,Bill,Doctor's Assistant,26"
//array to split up the rows later
let rows =[] 
//array to set up the initial columns
let cells =[]
// taking the string and splitting it  by the /n to create a new substring for each break
rows=csvStr.split("\n");
console.log(rows)
// iterating through every line and executing cells to be split by the comma 
for(let i=0;i<rows.length;i++){
    cells = rows[i].split("\n");
    console.log(`${cells[0]} ${cells[1]} ${cells[2]} ${cells[3]}`)
}
// console logging the cells by their iteration which produces the value of the first four columns

////part 2 expanding functionality
let csvStr1 = "ID,Name,Occupation,Age,\n42,Bruce,Knight,41,\n57,Bob,Fry Cook,19,\n63,Blaine,Quiz Master,58,\n98,Bill,Doctor's Assistant,26"
let numCol = (`${cells[0]} ${cells[1]} ${cells[2]} ${cells[3]}`);
// let twodArray=[innerArray];
let innerArray=[];

rows=csvStr1.split("\n")
//variable that stores the number of columns

cells=rows[0].split(",");
//declaring the amt of columns that are in the first row.
console.log(cells)


numCol=cells.length;
console.log(`There are: ${numCol}`) ;
//logging the amount of columns there are.


// a loop that works with n amount of columns 
for(i=0;i<rows.length;i++) {
    cells = rows[i].split(",");
    
    if(cells.length>numCol){
        cells.length=numCol
    }
    
    innerArray.push(cells);
   cells=innerArray;
   

}

console.log(cells)
cells.push(innerArray);
console.log("this is two-dimensional array")
console.log(innerArray);
//2d array is now within the innerarray;
//part3 transforming data 


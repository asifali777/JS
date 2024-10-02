// for each loop

const coding = ['js', 'python', 'ruby', 'cpp']

coding.forEach( function (item){
    console.log(item);
});

coding.forEach((item)=>{
    console.log(item);
})
function printme(item){
console.log(item);
}
coding.forEach(printme)

coding.forEach((item,index, arr)=>{
    console.log(item, index, arr);
})
//////////////////////////////////////////////**************************************///////////////////////////////////////////
const myCoding = [
    {
        language: "javascript",
        filetype: "JS"
    },
    {
        language: "java",
        filetype: "Java"
    },
    {
        language: "python",
        filetype: "py"
    },
];

myCoding.forEach((item)=>{
    console.log(item.filetype);
})
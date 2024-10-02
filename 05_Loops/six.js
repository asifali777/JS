// const coding = ['js', 'python', 'ruby', 'cpp']

// const values = coding.forEach((item)=>{
//     console.log(item);
// })
// console.log(values); // undefined

const myNum = [1,2,3,4,5,6,7]
const newNums = myNum.filter((num)=>{
   return num>5
   
})
console.log(newNums);

///////////////////////////////////////////////
const number = [11,22,33,44,55,66,77,88,99]

const newNumber = []

number.forEach((num)=>{
    if( num > 33){
        newNumber.push(num)
    }
})
console.log(newNumber);
///////////////////////////////////////////////


const books = [
    {
        title:'book one', genre:'English', publication: 1992, edition: 2002
    },
    {
        title:'book two', genre:'English', publication: 1992, edition: 2001
    },
    {
        title:'book three', genre:'Geography', publication: 1992, edition: 2003
    },
    {
        title:'book four', genre:'Science', publication: 1992, edition: 2006
    },
    {
        title:'book five', genre:'Polytical', publication: 1992, edition: 2000
    },
    {
        title:'book six', genre:'English', publication: 1992, edition: 2003
    },
    {
        title:'book seven', genre:'English', publication: 1992, edition: 2008
    },
    {
        title:'book eight', genre:'English', publication: 1992, edition: 2008
    },
    {
        title:'book nine', genre:'Science', publication: 1992, edition: 20068
     },
    {
        title:'book ten', genre:'Hindi', publication: 1992, edition: 2006
    },
];
const userBooks = books.filter((bk)=> bk.genre === "English");
console.log(userBooks);


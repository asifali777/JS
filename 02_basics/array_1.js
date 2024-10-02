const marvel_heros = ["Ironman","thor","spiderman"]
const dc_heros = ["superman", "flash", "batman"]
// marvel_heros.push(dc_heros)
// console.log(marvel_heros)
// console.log(marvel_heros[3][2])




const allHeros = marvel_heros.concat(dc_heros)
console.log(allHeros);


const allNewHeros = [...marvel_heros, ...dc_heros]//spread operator
console.log(allNewHeros)


const anotherArr = [3,2,4,[3,4,5],6,8,[45,64,77,[88,99,100]]]
const real_another_arr = anotherArr.flat(Infinity)
console.log(real_another_arr);
console.log(anotherArr);

/////////////////////
console.log(Array.isArray("asif"));
console.log(Array.from("asif"));
console.log(Array.from({name: "asif"})); ///instrsting


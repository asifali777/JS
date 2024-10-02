// forloop


for (let i = 0; i <= 10; i++) {
    const element = i;
   
    if (i == 5) {
        console.log("5 is the best number")
        break;
    }
    console.log(element);
}

for (let i = 0; i <= 10; i++) {
    // console.log(`outerloop : ${i}`);
    for (let a = 0; a <=10; a++) {
        // console.log(`innerloop : ${a} and inner loop ${i}`);
        // console.log( i + '*' + a + "=" + i*a);
    }
}


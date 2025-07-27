
function delayFn(time) {
  return new Promise((resolve) => setTimeout(resolve, time));
}           

async function delayedGreet(name) {
    await delayFn(2000);
    console.log(name);
}

delayedGreet("Yusuf");
console.log("End of async-await example");


async function division(num1, num2){
    try{
        if (num2 === 0) 
            throw new Error("Cannot perform division by 0");
        return num1 / num2;
    }catch(error){
        console.log("Error:", error);
        return null
    }
}

async function mainFn() {
    console.log(await division(10, 2)); // Should print 5
    console.log(await division(10, 0)); // Should print error message
}

mainFn();
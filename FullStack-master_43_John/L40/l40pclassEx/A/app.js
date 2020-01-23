const fileHandler = require("./file-handler");

const arr = [];
const newArr = [];
// let secondAvergae = ""

for (let i = 0; i < 100; i++) {
    let randomNum = ""
    randomNum = Math.floor((Math.random() * 1000) + 1);
    arr.push(randomNum)
}

function calcAverage(arr) {
    let sum = 0;
    for (const i of arr) {
        sum += +i
    }
    const avg = sum / arr.length
    console.log("check different vals: " + arr[0] + " the average is: " + avg)
}
//---- output
async function main() {
    try {
        await fileHandler.write("my-file.txt", arr);
        const content = await fileHandler.read("my-file.txt")
        newArr.push(100)
        calculateBothAverages(arr, newArr)
        // console.log(newArr)

    }
    catch (err) {
        console.log(err)
    }
    // return content
}
main();
function calculateBothAverages(oneArr, twoArr) {
    calcAverage(oneArr)
    calcAverage(twoArr)
    console.log("first array: " + oneArr, "\nsecond  array: " + twoArr)
}
let hi = calcAverage(arr);

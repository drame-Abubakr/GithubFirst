 const calculate = (num1, num2, operation) => {
    if (operation === 'add') {
        return num1 + num2;
    }else if (operation === "subtract"){
        return num1 - num2;
    }else if (operation === 'multiply'){
        return num1 * num2;
    }else if(operation === 'divide'){
        return num1 / num2;
    } else {
        return "invalid operation"
     }
 }

const result = calculate(2, 8, 'add');
const result2 = calculate(2, 3, 'divide');
const result3 = calculate(4, 3, 'multiply');
const result4 = calculate(6, 1, 'subtract');
console.log(result)
console.log(result2)
console.log(result3)
console.log(result4)
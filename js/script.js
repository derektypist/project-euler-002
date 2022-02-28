// Function to Get Number Information (including Invalid Input)
function getNumberInfo() {
    // Set Up Variable
    let txt="";
    // Get the Value of the Input Field
    let num = document.getElementById("mynumber").value;
    // Check if number is valid
    if (isNaN(num) || num.toString().length == 0 || num< 0 || num>5000000 || !Number.isInteger(Number(num))) {
        txt += `Invalid Input.  Please enter a whole number between 0 and 5000000.`;
    } else {
        txt += `You have entered the number ${num}. <p>`;
        txt += `Sum of even-valued terms is ${fiboEvenSum(num)}.`
    }

    // Display Information in the Browser
    document.getElementById("numinfo").innerHTML = txt;
}

/*
    Function to Return the Sum of All Even Fibonacci Sequence Elements
    that are equal to or less than n
*/
function fiboEvenSum(n) {
    if (n<=1) return 0;

    // Set Up Variable
    let fibs = [1,1];
    // Apply While Loop
    while (fibs[fibs.length-1] <= n) {
        fibs.push((fibs[fibs.length-2] + fibs[fibs.length-1]));
    }

    // Filter the Even Fibonacci Numbers and Store in New Array
    let evenFibs = fibs.filter((i) => i%2 == 0);

    // Calculate the sum of Even Fibonacci Numbers and Return
    return evenFibs.reduce((p,c) => p + c, 0);
}

// Function to Clear Information
function clearInfo() {
    let txt="";
    document.getElementById("numinfo").innerHTML = txt;
}
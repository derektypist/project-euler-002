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
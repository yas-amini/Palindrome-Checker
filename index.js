// Get the input field
const input = document.getElementById("input")
// Reverse the input
function reverseString(str){
    //splits the string into an array of characters, reverses the array, then joins it back into a string 
    return str.split("").reverse().join("")
}
//Checking if the input value is a palindrome
function check() {
    // Gets the current value from the input field
    const value = input.value;
    // Reverses the input value using the reverseString function
    const reverse = reverseString(value)
    // Compares the original vaLue with the reversed value
    if (value === reverse){
        // If they are equal, displays an alert with the text PALINDROME
        alert ( "P A L I N D R O M E")
    } else {
        // If not equal, displays "Not today!"
        alert("Not today!")
    }
}
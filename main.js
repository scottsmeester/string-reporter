var anyWord = prompt("Enter any word you want:");

console.log("You entered " + anyWord);

console.log("There are " + anyWord.length + " characters in your word.");

console.log("The third character in your word is " + anyWord.charAt(2));

console.log("Your word in lowercase is '" + anyWord.toLowerCase() + "'");

console.log("Your word in uppercase is '" + anyWord.toUpperCase() + ";");

console.log("Example: 'Hello, I have been a " + anyWord + " for 5 years!");

console.log("Subword: " + anyWord.substring(1, 4));
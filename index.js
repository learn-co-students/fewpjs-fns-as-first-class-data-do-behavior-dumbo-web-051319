/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/
function greet(arg){
 let  hour = parseInt(arg)
if (hour < 12) {
return "Good Morning"}
else if (hour > 12 && hour < 17) {
return "Good Afternoon"}
else {
return "Good Evening"
}
}

function displayMessage(string){
  const greeting = document.querySelector('#greeting');
  greeting.innerText = string;
}

/* Write your implementation of greet() */
/* Write your implementation of displayMessage() */

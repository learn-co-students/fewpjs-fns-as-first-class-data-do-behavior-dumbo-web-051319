/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
function greet(string) {
  let newString = string.split(":", 1)[0];
  const hour = parseInt(newString);
  if (0 < hour && hour < 12) {
    return "Good Morning";
  } else if (11 < hour && hour < 18) {
    return "Good Afternoon";
  } else {
    return "Good Evening";
  }
}

/* Write your implementation of displayMessage() */
function displayMessage(string) {
  const greeting = document.querySelector('#greeting');
  greeting.innerText = string;
}

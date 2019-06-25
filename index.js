/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

function greet(time) {
  const hr = +time.substring(0, time.indexOf(':'));
  return hr < 12 ? 'Good Morning' : hr >= 12 && hr < 17 ? 'Good Afternoon' : 'Good Evening';
}

function displayMessage(str) {
  const greeting = document.getElementById("greeting");
  greeting.innerText = str;
}

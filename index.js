/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */

function greet(hrsString){
  const time = parseInt(hrsString, 10);
  // const time = new Date().getHours();
  // debugger
  if (time < 12){
    return "Good Morning";
  }
  else if (time >= 12 && time <= 17){
    return "Good Afternoon";
  }
  else if (time >= 17 && time <= 24){
    return "Good Evening";
  }
}

  function displayMessage(str) {
    document.getElementById("greeting").innerText = str
  }

/* Write your implementation of displayMessage() */

/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}


/* End Given Code, don't edit above here...*/




 const displayMessage = (message) =>  {
   document.getElementById("greeting").innerText = message; 
 } 

  const greet = (timeString) => {
    const hour = parseInt(timeString, 10) 
    if(hour < 11) 
      return 'Good Morning' 
    if (hour > 16 )  
          return "Good Evening" 
    
        return "Good Afternoon"
  }   




 


/* Write your implementation of greet() */
/* Write your implementation of displayMessage() */







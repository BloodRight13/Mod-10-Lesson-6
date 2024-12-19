let intervalId;  
let repeatNotificationId;  
  
// Task 1
document.getElementById('start-btn').addEventListener('click', () => {  
   const duration = parseInt(document.getElementById('duration').value);  
   if (isNaN(duration) || duration <= 0) {  
      alert('Please enter a valid duration');  
      return;  
   }  
  
   let seconds = duration;  
   const timerDisplay = document.getElementById('timer-display');  
  
   intervalId = setInterval(() => {  
      const minutes = Math.floor(seconds / 60);  
      const secondsDisplay = seconds % 60;  
      timerDisplay.textContent = `${padZero(minutes)}:${padZero(secondsDisplay)}`;  
  
      if (seconds === 0) {  
        clearInterval(intervalId);  
        alert('Timer expired!');  
      }  
  
      seconds--;  
   }, 1000);  
});  
  
// Task 2
document.getElementById('delayed-notification-btn').addEventListener('click', () => {  
   const delay = 5000; // 5 seconds  
   setTimeout(() => {  
      alert('Delayed notification!');  
   }, delay);  
});  
  
// Task 3
document.getElementById('repeat-notification-btn').addEventListener('click', () => {  
   const interval = 5000; // 5 seconds  
   repeatNotificationId = setInterval(() => {  
      alert('Repeated notification!');  
   }, interval);  
});  
  
document.getElementById('stop-notification-btn').addEventListener('click', () => {  
   clearInterval(repeatNotificationId);  
});  
  
// Helper function to pad numbers with leading zeros  
function padZero(number) {  
   return (number < 10 ? '0' : '') + number;  
}
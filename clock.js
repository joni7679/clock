let hour = document.getElementById("hour");
let min = document.getElementById("min");

let sec = document.getElementById("sec");


function displayTime(){
    
    let date = new Date();
   // console.log(date);
   let Hour = date.getHours();
   let Min = date.getMinutes();
   let Sec = date.getSeconds();
   
  // console.log(Hour,Min,Sec);
  
  
  let HourRoation =30 * Hour + Min / 2;
  let minRoation = 6 * Min;
  let secondRoation =6 * Sec;
  
  hour.style.transform=`rotate(${HourRoation}deg)`;
  
  min.style.transform=`rotate(${minRoation}deg)`;
  
 sec.style.transform=`rotate(${secondRoation}deg)`;
  
  
   
}



setInterval(displayTime,1000)

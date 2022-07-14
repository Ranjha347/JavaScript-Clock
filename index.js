let second = document.querySelector('.second');
let minute = document.querySelector('.minute');
let hour = document.querySelector('.hour');

function dateFunction(){

   var date = new Date();   

   let nowSecond = date.getSeconds();
   let secondDegree = ((nowSecond / 60) * 360)  + 270;
    second.style.transform = `rotate(${secondDegree}deg)`;
  
   let nowMinutes = date.getMinutes();
   let MinutesDegree = ((nowMinutes / 60) * 360) + 270;
    minute.style.transform = `rotate(${MinutesDegree}deg)`;
  
   let nowHours = date.getHours();
   let HoursDegree = ((nowHours / 12) * 360) + 270;
    hour.style.transform = `rotate(${HoursDegree}deg)`;
  

}

setInterval(dateFunction,1000)

let date = document.getElementById("num");
let day = document.getElementById("day");
let month = document.getElementById("month");
let year = document.getElementById("year");

let currentdDate = new Date();
const weekDays =  ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const allMonths = [ 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December' ];
date.innerHTML = (currentdDate.getDate()<10?"0":"" )+ currentdDate.getDate();
day.innerHTML = weekDays[currentdDate.getDay()];
month.innerHTML = allMonths[currentdDate.getMonth()];
year.innerHTML = currentdDate.getFullYear();
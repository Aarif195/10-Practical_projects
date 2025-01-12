let dateContainer = document.querySelector(".date-container");

let hoursContainer = document.querySelector(".hours");
let minutesContainer = document.querySelector(".minutes");
let secondsContainer = document.querySelector(".seconds");

console.log(hoursContainer, minutesContainer, secondsContainer);

const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const monthnames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

function formateTime(time) {
  return time < 10 ? "0" + time : time;
}

function updateClock() {
  const today = new Date();
  // console.log(today);
  let date = today.getDate();
  let day = weekdays[today.getDay()];
  let month = monthnames[today.getMonth()];
  // console.log(today.getDay(), today.getMonth());

  let hours = formateTime(today.getHours());
  let minutes = formateTime(today.getMinutes());
  let seconds = formateTime(today.getSeconds());

  console.log(hours, minutes, seconds);

  dateContainer.innerHTML = `
  <p>${day}</p> <p><span>${date}</span></p> <p><span></span>${month}</p>`;

  hoursContainer.textContent = hours + ":";
  minutesContainer.textContent = minutes + ":";
  secondsContainer.textContent = seconds;
}

// updateClock();
setInterval(updateClock, 1000);

const startDate = new Date("01/02/2022");

const realMonth = [
  "Jan.",
  "Feb.",
  "Mar.",
  "Apr.",
  "May",
  "June",
  "July",
  "Aug.",
  "Sep.",
  "Oct.",
  "Nov.",
  "Dec.",
];

export function getTime(startStop) {
  let time = new Date();
  let month = realMonth[time.getMonth()];
  let date = time.getDate();

  let hour = startStop ? time.getHours() : roundHour(time);

  let min = startStop
    ? roundMinStart(time.getMinutes())
    : roundMinStop(time.getMinutes());

  let monthDate = `${month} ${date}`;
  let hourMin = `${hour}:${min}`;

  return { monthDate, hourMin };
}

function roundHour(time) {
  return time.getHours() <= 45 ? time.getHours() : time.getHours() + 1;
}

// If startStop == true ("start the timer"), round minutes down to the nearest quarter-hour.
function roundMinStart(min) {
  return min < 15 ? "00" : parseInt(min / 15) * 15;
}

// If startStop == false ("stop the timer"), round minutes up to the nearest quarter-hour.
function roundMinStop(min) {
  if (min === 0) return "00";
  if (min <= 15) return 15;
  if (min <= 30) return 30;
  if (min <= 45) return 45;
  if (min <= 59) return "00";
}

export function getWeek() {
  let time = new Date();
  let weekNumber = parseInt((time - startDate) / (1000 * 3600 * 24 * 7) + 1);

  let milliseconds = time - time.getDay() * 1000 * 3600 * 24;
  let weekSunday = new Date(milliseconds);
  let weekStart = {
    month: realMonth[weekSunday.getMonth()],
    date: weekSunday.getDate(),
    year: weekSunday.getFullYear(),
  };

  return { weekNumber, weekStart };
}

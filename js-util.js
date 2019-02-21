function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}
console.log(Math.random());
console.log(getRandomInt(30));
console.log(getRandomInt(30, 100));

function getTimeDifference(date1, date2) {
  if (date1.getTime() > date2.getTime()) {
    return getTimeDifference(date2, date1)
  }
  else {
    let seconds = date2.getSeconds() - date1.getSeconds()
    let minutes = date2.getMinutes() - date1.getMinutes()
    let hours = date2.getHours() - date1.getHours()
    let days = date2.getDate() - date1.getDate()
    let months = date2.getMonth() - date1.getMonth()
    let years = date2.getYear() - date1.getYear()
    let daysInMonth = 30
    const monthsWith31days = [0, 2, 4, 6, 7, 9, 11];

    if (seconds < 0) {
      seconds = seconds + 60
      minutes = minutes - 1
    }
    if (minutes < 0) {
      minutes = minutes + 60
      hours = hours - 1
    }
    if (hours < 0) {
      hours = hours + 24
      days = days - 1
    }
    if (days < 0) {
      if (date2.getMonth() == 1) // February
        daysInMonth = 28
      else if (monthsWith31days.includes(date2.getMonth()))
        daysInMonth = 31 // else daysInMonth is still 30
      days = days + daysInMonth
      months = months - 1
    }
    if (months < 0) {
      months = months + 12
      years = years - 1
    }

    return {
      years: years,
      months: months,
      days: days,
      hours: hours,
      minutes: minutes,
      seconds: seconds
    }
  }
}
let date1 = new Date('2019-02-21T20:15:46.164Z')
let date2 = new Date('2019-03-20T20:15:46.164Z')
console.log(getTimeDifference(date1, date2))

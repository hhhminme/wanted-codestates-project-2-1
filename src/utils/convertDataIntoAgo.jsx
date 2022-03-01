export const convertDataIntoAgo = data => {
  const [publishedYear, publishedMonth, publishedDay] = data
    .slice(0, 10)
    .split("-");
  const [publishedHour, publishedMin, publishedSec] = data
    .slice(11, 19)
    .split(":");
  const today = new Date();

  if (today.getFullYear() !== Number(publishedYear)) {
    const year = today.getFullYear() - publishedYear;
    return year === 1 ? `${year} year` : `${year} years`;
  }
  if (today.getMonth() + 1 !== Number(publishedMonth)) {
    const month = today.getMonth() + 1 - publishedMonth;
    return month === 1 ? `${month} month` : `${month} months`;
  }
  if (today.getDate() !== Number(publishedDay)) {
    const day = today.getDate() - publishedDay;
    if (day >= 7) {
      const week = Math.floor(day / 7);
      return week === 1 ? `${week} week` : `${week} weeks`;
    } else {
      return day === 1 ? `${day} day` : `${day} days`;
    }
  }
  if (today.getHours() !== Number(publishedHour)) {
    const hour = today.getHours() - Number(publishedHour);
    return hour === 1 ? `${hour} hour` : `${hour} hours`;
  }
  if (today.getMinutes() !== Number(publishedMin)) {
    const min = today.getMinutes() - Number(publishedMin);
    return min === 1 ? `${min} minute` : `${min} minutes`;
  }
  if (today.getSeconds() !== Number(publishedSec)) {
    const sec = today.getSeconds() - Number(publishedSec);
    return sec === 1 ? `${sec} second` : `${sec} seconds`;
  }
  return "now";
};

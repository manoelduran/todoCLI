export const getCurrentDay = (startDay?: string) => {
  let parsedData;

  if (startDay) {
    const [day, month, year] = startDay?.split('/');
    const fullDate = new Date(Number(year), Number(month) - 1, Number(day));
    parsedData = fullDate.toUTCString();
  }

  const date = new Date(startDay ? parsedData : new Date().toUTCString());
  return new Date(
    Date.UTC(
      date.getUTCFullYear(),
      date.getUTCMonth(),
      date.getUTCDate(),
      date.getUTCHours() - 3,
      date.getUTCMinutes(),
    ),
  );
};
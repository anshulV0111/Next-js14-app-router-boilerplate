export const dateFormator = (dateParam) => {
  let formattedDate = '';
  if (dateParam) {
    const date = new Date(dateParam);
    formattedDate = `${date.toLocaleDateString('en-GB')} ${'At'} ${date.toLocaleTimeString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })}`;
  }

  return formattedDate;
};

export const getDefaultDates = () => {
  const today = new Date();
  const lastMonth = new Date();
  lastMonth.setMonth(today.getMonth() - 1);
  return {
    start: lastMonth.toISOString().split('T')[0],
    end: today.toISOString().split('T')[0],
  };
};

export const dateFormatorWithFormat = (date, format) => {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');

  switch (format) {
    case 'yyyy-MM-dd':
      return `${year}-${month}-${day}`;
    case 'MM/dd/yyyy':
      return `${month}/${day}/${year}`;
    default:
      return `${year}-${month}-${day}`;
  }
};

const getNavigatorLanguage = () => {
  return (navigator.languages && navigator.languages[0])
    || ('userLanguage'in navigator && navigator['userLanguage'])
    || ('language'in navigator && navigator['language'])
    || ('browserLanguage' in navigator && navigator['browserLanguage'])
    || 'en';
};

export const formatNumber = (number: number) => {
  const locale = getNavigatorLanguage();
  const { format } = new Intl.NumberFormat(locale, { style: 'decimal'});
  return format(number);
};

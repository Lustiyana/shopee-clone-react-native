export const formatter = (amount: any, thousands = '.') => {
  try {
    const negativeSign = amount < 0 ? '-' : '';
    const integerPart = Math.abs(Math.trunc(amount)).toString();
    let j = integerPart.length > 3 ? integerPart.length % 3 : 0;

    return (
      negativeSign +
      (j ? integerPart.substr(0, j) + thousands : '') +
      integerPart.substr(j).replace(/(\d{3})(?=\d)/g, '$1' + thousands)
    );
  } catch (error) {
    console.error(error);
  }
};

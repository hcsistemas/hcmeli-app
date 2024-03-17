const LOCALE = process.env.LOCALE;

export function toMoneyValue(value, currency, decimals = 0) {
  const intlOptions = { 
    style: 'currency',
    currency,
    maximumFractionDigits: decimals,
    minimumFractionDigits: decimals,
  }

  return new Intl.NumberFormat(LOCALE, intlOptions).format(value);
}
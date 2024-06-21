const FORMAT_CURRENCY = new Intl.NumberFormat(undefined, { currency: 'USD', style: 'currency' });

const formatCurrency = (value: number): string => {
  return FORMAT_CURRENCY.format(value)
}
export default formatCurrency;
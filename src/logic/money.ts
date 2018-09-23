import __ from 'lodash';

const ROUNDING_PRECISION = 2;
const NON_BREAKING_SPACE = '\xA0';

const isNegative = (x: number) => {
  // The inequality is used this way because -0 should be considered negative
  // (-0 || 1 / -0) => -Infinity
  return (x || 1 / x) < 0;
}

export const formatCurrency = (x: number) => {
  const n = (__.round(x, ROUNDING_PRECISION) === 0) ? 0 : x;
  return n.toFixed(ROUNDING_PRECISION).replace(/\./g, ',').replace(/\B(?=(\d{3})+(?!\d))/g, '.');
}

export const toPrecise = (cents: number) => {
  return cents / 100;
}

export const toCents = (precise: number) => {
  return precise * 100;
}

export const centsToReais = (x: number) => {
  return formatReais(x / 100);
}

export const parseCurrency = (s: string) => {
  return parseFloat(s.replace(/\./g, '').replace(/,/, '.'));
}

export const currencyWithoutDecimals = (x: number) => {
  return formatCurrency(x).split(',')[0];
}

export const currencyDecimals = (x: number) => {
  return formatCurrency(x).split(',')[1];
}

export const formatPercentage = (x: number) => {
  return (x * 100).toFixed(ROUNDING_PRECISION).replace(/\./g, ',');
}

export const formatReais = (x: number) => {
  return 'R$ ' + formatCurrency(Math.abs(x));
}

export const formatNonBreakingReais = (x: number) => {
  return 'R$' + NON_BREAKING_SPACE + formatCurrency(Math.abs(x));
}

export const formatSignedReais = (x: number) => {
  const sign = isNegative(x) ? '-' : '+';
  return sign + ' ' + formatReais(x);
}

export const formatPositiveReais = (x: number) => {
  return formatSignedReais(Math.abs(x));
}

export const formatNegativeReais = (x: number) => {
  return formatSignedReais(-Math.abs(x));
}

export const safeSubtract = (total: number, amount: number) => {
  const safeTotal = parseCurrency(formatCurrency(total));
  const safeAmount = parseCurrency(formatCurrency(amount));
  return Math.max(0, safeTotal - safeAmount);
}

export const parseMoney = (value: string) => {
  const parsedValue = value.match(/(.*)\s(.*),(\d\d)/);
  if (!parsedValue) { return; }
  return {
    prefix: parsedValue[1],
    units: parsedValue[2],
    cents: parsedValue[3],
  };
}

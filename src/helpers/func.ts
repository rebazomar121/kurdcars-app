import { CURRENCY_MAP, METRIC_MAP } from "../constants/general.const";

export const priceString = (x: any) => {
  const numberOfDecimals = 2;
  let decimalString = "";
  for (let i = 0; i < numberOfDecimals; i++) decimalString += "0";
  if (!x || x === null || x === undefined || x === "undefined") return "0";
  let fixed = Number(x).toFixed(numberOfDecimals);
  let fixedString = fixed.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  let tempFixedString = fixedString;
  return fixedString.slice(numberOfDecimals * -1) === decimalString
    ? fixedString.substr(0, fixedString.length - (numberOfDecimals + 1))
    : fixedString;
};

export const priceStringWithCurrencySymbol = (x: any, currencyType: any) => {
  let value = priceString(x);
  if (currencyType === CURRENCY_MAP.IQD) return `${value} د.ع`;
  else if (currencyType === CURRENCY_MAP.USD) return `$ ${value}`;
  return value;
};

export const metricCalculator = (range: any, typeOfRange: any) => {
  let value = priceString(range);

  if (typeOfRange === METRIC_MAP.KM) return `${value} ${METRIC_MAP.KM}`;
  else if (typeOfRange === METRIC_MAP.ML) return `${value} ${METRIC_MAP.ML}`;
  return value;
};

export const getClassNames = (
  baseClasses: any,
  sizeClass: any,
  customClasses = ""
) => {
  const classNames = [baseClasses, sizeClass, customClasses]
    .filter(Boolean)
    .join(" ");
  return classNames;
};

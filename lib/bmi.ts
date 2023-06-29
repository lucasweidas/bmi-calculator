const ONE_FOOT_IN_INCHES = 12;
const ONE_INCH_IN_CENTIMETERS = 2.54;
const ONE_POUND_IN_KILOGRAMS = 0.45359237;
const ONE_METER_IN_CENTIMETERS = 100;
const HEALTHY_MIN_BMI = 18.5;
const HEALTHY_MAX_BMI = 25;

export function calculateBMI(centimeters: number, kilograms: number) {
  if (centimeters === 0 || kilograms === 0) {
    return 0;
  }
  return (kilograms / (centimeters / ONE_METER_IN_CENTIMETERS) ** 2).toFixed(1);
}

export function imperialToMetric(feet: number, inches: number, pounds: number) {
  const cm = +(feet * ONE_FOOT_IN_INCHES + inches) * ONE_INCH_IN_CENTIMETERS;
  const kg = +pounds * ONE_POUND_IN_KILOGRAMS;
  return [cm, kg];
}

export function kgsTolbs(kg: number) {
  return kg / 0.45359237;
}

export function getWeightRange(isMetric: boolean, bmi: number, meters: number) {
  let category = '';

  if (bmi < 18.5) {
    category = 'underweight';
  } else if (bmi >= 18.5 && bmi < 25) {
    category = 'a healthy weight';
  } else if (bmi < 30) {
    category = 'at risk of overweight';
  } else {
    category = 'overweight';
  }

  const minKilograms = HEALTHY_MIN_BMI * meters ** 2;
  const maxKilograms = HEALTHY_MAX_BMI * meters ** 2;
  const minWeight = +(isMetric ? minKilograms : kgsTolbs(minKilograms)).toFixed(1);
  const maxWeight = +(isMetric ? maxKilograms : kgsTolbs(maxKilograms)).toFixed(1);
  return { category, minWeight, maxWeight };
}

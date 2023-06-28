export function calculateBMI(height: number, weight: number) {
  if (height === 0 || weight === 0) {
    return 0;
  }
  return (weight / (height / 100) ** 2).toFixed(1);
}

export function imperialToMetric(feet: number, inches: number, pounds: number) {
  const cm = +(feet * 12 + inches) * 2.54;
  const kg = +pounds / 2.2046;
  return [cm, kg];
}

export function kgsTolbs(kg: number) {
  return kg / 0.45359237;
}

export function getWeightRange(isMetric: boolean, bmi: number, meters: number) {
  let minBMI = 0;
  let maxBMI = 0;
  let category = 'underweight';

  if (bmi < 16) {
    minBMI = 16;
  } else if (bmi < 17) {
    minBMI = 16;
    maxBMI = 17;
  } else if (bmi < 18.5) {
    minBMI = 17;
    maxBMI = 18.5;
  } else if (bmi < 25) {
    minBMI = 18.5;
    maxBMI = 25;
    category = 'a healthy weight';
  } else if (bmi < 30) {
    minBMI = 25;
    maxBMI = 30;
    category = 'at risk of overweight';
  } else if (bmi < 35) {
    minBMI = 35;
    maxBMI = 40;
    category = 'overweight';
  } else {
    minBMI = 40;
    category = 'overweight';
  }

  const minKilograms = minBMI * meters ** 2;
  const maxKilograms = maxBMI * meters ** 2;
  const minWeight = +(isMetric ? minKilograms : kgsTolbs(minKilograms)).toFixed(1);
  const maxWeight = +(isMetric ? maxKilograms : kgsTolbs(maxKilograms)).toFixed(1);
  return { category, minWeight, maxWeight: maxBMI ? maxWeight : 0 };
}

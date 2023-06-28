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
  } else if (bmi < 30) {
    minBMI = 25;
    maxBMI = 30;
  } else if (bmi < 35) {
    minBMI = 35;
    maxBMI = 40;
  } else {
    minBMI = 40;
  }

  const minKilograms = minBMI * meters ** 2;
  const maxKilograms = maxBMI * meters ** 2;
  const minWeight = isMetric ? minKilograms : kgsTolbs(minKilograms);
  const maxWeight = isMetric ? maxKilograms : kgsTolbs(maxKilograms);
  return [+minWeight.toFixed(1), maxBMI ? +maxWeight.toFixed(1) : 0];
}

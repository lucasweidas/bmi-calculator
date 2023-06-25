'use client';
import { ChangeEvent, ChangeEventHandler } from 'react';
import { useState } from 'react';

function calculateBMI(height: number, weight: number) {
  if (height === 0 || weight === 0) {
    return 0;
  }
  return (weight / (height / 100) ** 2).toFixed(2);
}

function imperialToMetric(feet: number, inches: number, pounds: number) {
  const cm = +((feet * 12 + inches) * 2.54).toFixed(1);
  const kg = +(pounds / 2.2046).toFixed(1);
  return [cm, kg];
}

export default function Card() {
  const [isMetric, setIsMetric] = useState(true);
  const [bmi, setBMI] = useState(0);

  function handleMeasurementChange() {
    setIsMetric(!isMetric);
    setBMI(0);
  }

  return (
    <div className="absolute top-full flex flex-col gap-6 rounded-2.5xl bg-white p-6 shadow-card">
      <h2 className="text-xl font-semibold text-blue-900">Enter your details below</h2>
      <div className="flex flex-wrap justify-between gap-4">
        <div className="flex items-center gap-4">
          <input
            className="relative flex h-8 w-8 cursor-pointer appearance-none items-center justify-center rounded-full outline-none ring-1 ring-gray-200 before:h-3.5 before:w-3.5 before:rounded-full before:bg-blue-500 before:opacity-0 focus-visible:ring-2 focus-visible:ring-blue-500 aria-checked:bg-indigo-50 aria-checked:ring-indigo-50 aria-checked:before:opacity-100"
            type="radio"
            name="measurement"
            id="metric"
            onChange={handleMeasurementChange}
            defaultChecked={true}
            aria-checked={isMetric}
          />
          <label className="cursor-pointer font-medium text-blue-900" htmlFor="metric">
            Metric
          </label>
        </div>
        <div className="flex items-center gap-4">
          <input
            className="relative flex h-8 w-8 cursor-pointer appearance-none items-center justify-center rounded-full outline-none ring-1 ring-gray-200 before:h-3.5 before:w-3.5 before:rounded-full before:bg-blue-500 before:opacity-0 focus-visible:ring-2 focus-visible:ring-blue-500 aria-checked:bg-indigo-50 aria-checked:ring-indigo-50 aria-checked:before:opacity-100"
            type="radio"
            name="measurement"
            id="imperial"
            onChange={handleMeasurementChange}
            aria-checked={!isMetric}
          />
          <label className="cursor-pointer font-medium text-blue-900" htmlFor="imperial">
            Imperial
          </label>
        </div>
      </div>
      <div className="flex flex-col gap-4.5">{isMetric ? <MetricInputs setBMI={setBMI} /> : <ImperialInputs setBMI={setBMI} />}</div>
      <div className="flex flex-col gap-4 rounded-2xl bg-linear-gradient-blue-500 p-6">
        {bmi === 0 ? (
          <>
            <h3 className="text-xl font-semibold text-white">Welcome!</h3>
            <p className="text-white">Enter your height and weight and you’ll see your BMI result here</p>
          </>
        ) : (
          <>
            <div>
              <h3 className="mb-2 font-semibold text-white">Your BMI is...</h3>
              <span className="text-5xl font-semibold text-white">{bmi}</span>
            </div>
            <p className="text-white">
              Your BMI suggests you’re a healthy weight. Your ideal weight is between <span className="font-semibold">63kgs - 85kgs</span>.
            </p>
          </>
        )}
      </div>
    </div>
  );
}

function MetricInputs({ setBMI }: { setBMI: Function }) {
  const [centimeters, setCentimeters] = useState('');
  const [kilograms, setKilograms] = useState('');

  function handleChange({ target }: ChangeEvent<HTMLInputElement>) {
    if (+target.value < 0 || isNaN(+target.value)) return;

    let nextCentimeters = centimeters;
    let nextKilograms = kilograms;

    if (target.id === 'centimeters') {
      nextCentimeters = target.value;
      setCentimeters(nextCentimeters);
    } else {
      nextKilograms = target.value;
      setKilograms(nextKilograms);
    }
    setBMI(calculateBMI(+nextCentimeters, +nextKilograms));
  }

  return (
    <>
      <div className="flex flex-col gap-2.5">
        <label className="text-sm font-medium text-gray-500" htmlFor="centimeters">
          Height
        </label>
        <TextInput id="centimeters" placeholder="0" value={centimeters} onChange={handleChange}>
          cm
        </TextInput>
      </div>
      <div className="flex flex-col gap-2.5">
        <label className="text-sm font-medium text-gray-500" htmlFor="kilograms">
          Weight
        </label>
        <TextInput id="kilograms" placeholder="0" value={kilograms} onChange={handleChange}>
          kg
        </TextInput>
      </div>
    </>
  );
}

function ImperialInputs({ setBMI }: { setBMI: Function }) {
  const [feet, setFeet] = useState('');
  const [inches, setInches] = useState('');
  const [pounds, setPounds] = useState('');

  function handleChange({ target }: ChangeEvent<HTMLInputElement>) {
    if (+target.value < 0 || isNaN(+target.value)) return;

    let nextFeet = feet;
    let nextInches = inches;
    let nextPounds = pounds;

    if (target.id === 'feet') {
      nextFeet = target.value;
      setFeet(nextFeet);
    } else if (target.id === 'inches') {
      nextInches = target.value;
      setInches(nextInches);
    } else {
      nextPounds = target.value;
      setPounds(nextPounds);
    }
    const [cm, kg] = imperialToMetric(+nextFeet, +nextInches, +nextPounds);
    setBMI(calculateBMI(cm, kg));
  }

  return (
    <>
      <div className="flex flex-col gap-2.5">
        <label className="text-sm font-medium text-gray-500" htmlFor="feet">
          Height
        </label>
        <TextInput id="feet" placeholder="0" value={feet} onChange={handleChange}>
          ft
        </TextInput>
        <TextInput id="inches" placeholder="0" value={inches} onChange={handleChange}>
          in
        </TextInput>
      </div>
      <div className="flex flex-col gap-2.5">
        <label className="text-sm font-medium text-gray-500" htmlFor="pounds">
          Weight
        </label>
        <TextInput id="pounds" placeholder="0" value={pounds} onChange={handleChange}>
          lbs
        </TextInput>
      </div>
    </>
  );
}

interface TextInput {
  children: string;
  id: string;
  placeholder: string;
  value: string;
  onChange: ChangeEventHandler;
}
function TextInput({ children, id, placeholder, value, onChange }: TextInput) {
  return (
    <div className="relative flex items-center">
      <input
        className="w-full rounded-xl px-6 py-4 text-xl font-semibold text-blue-900 outline-none ring-1 ring-gray-200 placeholder:text-gray-300 focus-visible:ring-2 focus-visible:ring-blue-500"
        type="text"
        id={id}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
      <span className="absolute right-6 text-xl font-semibold text-blue-500">{children}</span>
    </div>
  );
}

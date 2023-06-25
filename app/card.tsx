'use client';
import { ChangeEvent, useEffect } from 'react';
import { useState } from 'react';

function calculateBMI(isMetric: boolean, height: string, weight: string) {
  if (+height === 0 || +weight === 0) {
    return 0;
  }
  if (isMetric) {
    return +weight / (+height) ** 2;
  }
  const [feet, inches] = height.trim().split(' ');
  return (+weight * 703) / (+feet * 12 + +inches);
}

export default function Card() {
  const [isMetric, setIsMetric] = useState<boolean>(true);
  const [height, setHeight] = useState<string>('');
  const [weight, setWeight] = useState<string>('');
  const bmi = isMetric === null ? 0 : calculateBMI(isMetric, height, weight);

  function handleMeasurementChange() {
    setIsMetric(!isMetric);
  }

  function handleValueChange({ target }: ChangeEvent<HTMLInputElement>) {
    if (+target.value < 0 || isNaN(+target.value)) return;
    if (target.id === 'height') {
      setHeight(target.value);
    } else {
      setWeight(target.value);
    }
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
      <div className="flex flex-col gap-4.5">{isMetric ? <MetricInputs /> : <ImperialInputs />}</div>
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
              <span className="text-5xl font-semibold text-white">{bmi.toFixed(1)}</span>
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

function MetricInputs() {
  const [centimeters, setCentimeters] = useState<string>('');
  const [kilograms, setKilograms] = useState<string>('');

  return (
    <>
      <div className="flex flex-col gap-2.5">
        <label className="text-sm font-medium text-gray-500" htmlFor="centimeters">
          Height
        </label>
        <div className="relative flex items-center">
          <input
            className="w-full rounded-xl px-6 py-4 text-xl font-semibold text-blue-900 outline-none ring-1 ring-gray-200 placeholder:text-gray-300 focus-visible:ring-2 focus-visible:ring-blue-500"
            type="text"
            id="centimeters"
            placeholder="0"
            value={centimeters}
            onChange={e => setCentimeters(e.target.value)}
          />
          <span className="absolute right-6 text-xl font-semibold text-blue-500">cm</span>
        </div>
      </div>
      <div className="flex flex-col gap-2.5">
        <label className="text-sm font-medium text-gray-500" htmlFor="kilograms">
          Weight
        </label>
        <div className="relative flex items-center">
          <input
            className="w-full rounded-xl px-6 py-4 text-xl font-semibold text-blue-900 outline-none ring-1 ring-gray-200 placeholder:text-gray-300 focus-visible:ring-2 focus-visible:ring-blue-500"
            type="text"
            id="kilograms"
            placeholder="0"
            value={kilograms}
            onChange={e => setKilograms(e.target.value)}
          />
          <span className="absolute right-6 text-xl font-semibold text-blue-500">kg</span>
        </div>
      </div>
    </>
  );
}

function ImperialInputs() {
  const [feet, setFeet] = useState<string>('');
  const [inches, setInches] = useState<string>('');
  const [pounds, setPounds] = useState<string>('');

  useEffect(() => {
    console.log(inches, pounds);
  }, [inches, pounds]);

  return (
    <>
      <div className="flex flex-col gap-2.5">
        <label className="text-sm font-medium text-gray-500" htmlFor="feet">
          Height
        </label>
        <div className="relative flex items-center">
          <input
            className="w-full rounded-xl px-6 py-4 text-xl font-semibold text-blue-900 outline-none ring-1 ring-gray-200 placeholder:text-gray-300 focus-visible:ring-2 focus-visible:ring-blue-500"
            type="text"
            id="feet"
            placeholder="0"
            value={feet}
            onChange={e => setFeet(e.target.value)}
          />
          <span className="absolute right-6 text-xl font-semibold text-blue-500">ft</span>
        </div>
        <div className="relative flex items-center">
          <input
            className="w-full rounded-xl px-6 py-4 text-xl font-semibold text-blue-900 outline-none ring-1 ring-gray-200 placeholder:text-gray-300 focus-visible:ring-2 focus-visible:ring-blue-500"
            type="text"
            id="inches"
            placeholder="0"
            value={inches}
            onChange={e => setInches(e.target.value)}
          />
          <span className="absolute right-6 text-xl font-semibold text-blue-500">in</span>
        </div>
      </div>
      <div className="flex flex-col gap-2.5">
        <label className="text-sm font-medium text-gray-500" htmlFor="pounds">
          Weight
        </label>
        <div className="relative flex items-center">
          <input
            className="w-full rounded-xl px-6 py-4 text-xl font-semibold text-blue-900 outline-none ring-1 ring-gray-200 placeholder:text-gray-300 focus-visible:ring-2 focus-visible:ring-blue-500"
            type="text"
            id="pounds"
            placeholder="0"
            value={pounds}
            onChange={e => setPounds(e.target.value)}
          />
          <span className="absolute right-6 text-xl font-semibold text-blue-500">lbs</span>
        </div>
      </div>
    </>
  );
}

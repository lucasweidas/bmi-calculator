'use client';
import { ChangeEvent, useState } from 'react';
import { HeightWeightInputs, RadioInput, TextInput, WeightRange } from '@/interfaces';
import { calculateBMI, getWeightRange, imperialToMetric } from '@/lib/bmi';

export default function Card() {
  const [isMetric, setIsMetric] = useState(true);
  const [bmi, setBMI] = useState(0);
  const [weightRange, setWeightRange] = useState<WeightRange>({ category: '', minWeight: 0, maxWeight: 0 });

  function handleMeasurementChange() {
    setIsMetric(!isMetric);
    setBMI(0);
  }

  return (
    <div className="relative bottom-44 z-50 flex w-card-lg flex-col gap-6 rounded-2.5xl bg-white p-6 shadow-card md:bottom-64 md:gap-8 md:p-8 xl:absolute xl:bottom-auto xl:left-[38rem] xl:top-32 xl:w-card-md desktop:left-[44rem]">
      <h2 className="text-xl font-semibold text-blue-900 md:text-2xl">Enter your details below</h2>
      <div className="flex flex-wrap justify-between gap-4 md:gap-6">
        <RadioInput id="metric" name="measurement" checked={isMetric} onChange={handleMeasurementChange} defaultChecked={true}>
          Metric
        </RadioInput>
        <RadioInput id="imperial" name="measurement" checked={!isMetric} onChange={handleMeasurementChange}>
          Imperial
        </RadioInput>
      </div>
      <div className={`flex flex-col gap-4.5 ${isMetric ? 'md:flex-row' : ''} md:gap-6`}>
        {isMetric ? (
          <MetricInputs isMetric={isMetric} setBMI={setBMI} setWeightRange={setWeightRange} />
        ) : (
          <ImperialInputs isMetric={isMetric} setBMI={setBMI} setWeightRange={setWeightRange} />
        )}
      </div>
      <div className="rounded-2xl bg-linear-gradient-blue-500 p-6 md:rounded-l-lg md:rounded-r-12xl md:p-8">
        {bmi === 0 ? (
          <>
            <h3 className="mb-4 text-xl font-semibold text-white md:text-2xl">Welcome!</h3>
            <p className="text-white">Enter your height and weight and you&#x2019;ll see your BMI result here</p>
          </>
        ) : (
          <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between md:gap-8 md:pr-4">
            <div className="md:max-w-[40%]">
              <h3 className="mb-2 font-semibold text-white">Your BMI is...</h3>
              <span className="block truncate text-5xl font-semibold text-white">{bmi}</span>
            </div>
            <p className="text-white md:max-w-[17rem]">
              Your BMI suggests you&#x2019;re <span className="font-semibold">{weightRange.category}</span>. Your ideal weight is between{' '}
              <span className="font-semibold">
                <span className="inline-grid grid-cols-[repeat(2,auto)]">
                  <span className="block truncate">{weightRange.minWeight}</span>
                  {isMetric ? 'kgs' : 'lbs'}
                </span>
                {' - '}
                <span className="inline-grid grid-cols-[repeat(2,auto)]">
                  <span className="block truncate">{weightRange.maxWeight}</span>
                  {isMetric ? 'kgs' : 'lbs'}
                </span>
              </span>
              .
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

function RadioInput({ children, id, name, checked, onChange, defaultChecked = false }: RadioInput) {
  return (
    <div className="flex items-center gap-4 md:flex-1 md:gap-5">
      <input
        className="relative flex h-8 w-8 cursor-pointer appearance-none items-center justify-center rounded-full outline-none ring-1 ring-gray-200 transition-all before:h-3.5 before:w-3.5 before:rounded-full before:bg-blue-500 before:opacity-0 before:transition-opacity hover:ring-blue-500 focus-visible:ring-2 focus-visible:ring-blue-500 aria-checked:bg-indigo-50 aria-checked:ring-indigo-50 aria-checked:before:opacity-100 focus-visible:aria-checked:ring-blue-500"
        type="radio"
        name={name}
        id={id}
        onChange={onChange}
        defaultChecked={defaultChecked}
        aria-checked={checked}
      />
      <label className="cursor-pointer font-medium text-blue-900" htmlFor={id}>
        {children}
      </label>
    </div>
  );
}

function MetricInputs({ isMetric, setBMI, setWeightRange }: HeightWeightInputs) {
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
    const bmi = calculateBMI(+nextCentimeters, +nextKilograms);
    setBMI(bmi);
    setWeightRange(getWeightRange(isMetric, +bmi, +nextCentimeters / 100));
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

function ImperialInputs({ isMetric, setBMI, setWeightRange }: HeightWeightInputs) {
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
    const bmi = calculateBMI(cm, kg);
    const meters = cm / 100;
    setBMI(bmi);
    setWeightRange(getWeightRange(isMetric, +bmi, meters));
  }

  return (
    <>
      <div className="flex flex-col gap-2.5">
        <label className="text-sm font-medium text-gray-500" htmlFor="feet">
          Height
        </label>
        <div className="flex flex-col gap-2.5 md:flex-row md:gap-6">
          <TextInput id="feet" placeholder="0" value={feet} onChange={handleChange}>
            ft
          </TextInput>
          <TextInput id="inches" placeholder="0" value={inches} onChange={handleChange}>
            in
          </TextInput>
        </div>
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

function TextInput({ children, id, placeholder, value, onChange }: TextInput) {
  return (
    <div className="relative flex items-center">
      <input
        className="w-full rounded-xl py-4 pl-6 pr-16 text-xl font-semibold text-blue-900 outline-none ring-1 ring-gray-200 transition-shadow placeholder:text-gray-300 focus-visible:ring-2 focus-visible:ring-blue-500 md:py-5 md:text-2xl"
        type="text"
        id={id}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
      <span className="pointer-events-none absolute right-6 text-xl font-semibold text-blue-500 md:text-2xl">{children}</span>
    </div>
  );
}

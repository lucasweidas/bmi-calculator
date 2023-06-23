'use client';
import Image from 'next/image';
import React, { useState } from 'react';

// TODO: make calculation between different measurement systems

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

export default function Home() {
  const [isMetric, setIsMetric] = useState<boolean>(true);
  const [height, setHeight] = useState<string>('');
  const [weight, setWeight] = useState<string>('');
  const bmi = calculateBMI(isMetric, height, weight);

  function handleMeasurementChange() {
    setIsMetric(!isMetric);
  }

  function handleValueChange({ target }: React.ChangeEvent<HTMLInputElement>) {
    if (+target.value < 0 || isNaN(+target.value)) return;
    if (target.id === 'height') {
      setHeight(target.value);
    } else {
      setWeight(target.value);
    }
  }

  return (
    <main>
      <section className="rounded-b-5xl bg-linear-gradient-blue-200 px-6 pb-52">
        <div className="relative flex flex-col items-center">
          <div className="flex flex-col items-center gap-6 pb-10 pt-8">
            <Image src="/images/logo.svg" alt="" width={60} height={60} className="h-10 w-10" aria-hidden="true" />
            <h1 className="text-center text-5xl font-semibold leading-tight text-blue-800">Body Mass Index Calculator</h1>
            <p className="text-center text-gray-500">
              Better understand your weight in relation to your height using our body mass index (BM) calculator. While BMI is not the sole determinant of a
              healthy weight, it offers a valuable starting point to evaluate your overall health and well-being.
            </p>
          </div>
          <div className="absolute top-full flex flex-col gap-6 rounded-2.5xl bg-white p-6 shadow-card">
            <h2 className="text-xl font-semibold">Enter your details below</h2>
            <div className="flex flex-wrap justify-between gap-4">
              <div className="flex items-center gap-4">
                <input
                  className="relative flex h-8 w-8 cursor-pointer appearance-none items-center justify-center rounded-full outline-none ring-1 ring-gray-200 before:h-3.5 before:w-3.5 before:rounded-full before:bg-blue-500 before:opacity-0 checked:bg-indigo-50 checked:ring-indigo-50 checked:before:opacity-100 focus-visible:ring-2 focus-visible:ring-blue-500"
                  type="radio"
                  name="measurement"
                  id="metric"
                  onChange={handleMeasurementChange}
                  defaultChecked={true}
                />
                <label className="cursor-pointer font-medium" htmlFor="metric">
                  Metric
                </label>
              </div>
              <div className="flex items-center gap-4">
                <input
                  className="relative flex h-8 w-8 cursor-pointer appearance-none items-center justify-center rounded-full outline-none ring-1 ring-gray-200 before:h-3.5 before:w-3.5 before:rounded-full before:bg-blue-500 before:opacity-0 checked:bg-indigo-50 checked:ring-indigo-50 checked:before:opacity-100 focus-visible:ring-2 focus-visible:ring-blue-500"
                  type="radio"
                  name="measurement"
                  id="imperial"
                  onChange={handleMeasurementChange}
                />
                <label className="cursor-pointer font-medium" htmlFor="imperial">
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
        </div>
      </section>

      <section className="mt-[34rem]">
        <div className="relative flex aspect-video justify-center rounded-4xl bg-sky-50">
          <Image
            src="/images/person-eating.png"
            alt="A person eating asian food"
            width={311}
            height={333}
            className="absolute bottom-0 w-[min(100%-4rem,25rem)]"
          />
        </div>
        <div className="px-5 pt-10">
          <h2 className="mb-6 text-3xl font-semibold text-blue-800">What your BMI result means</h2>
          <p className="text-gray-500">
            A BMI range of 18.5 to 24.9 is considered a ‘healthy weight’. Maintaining a healthy weight may lower your changes of experiencing health issues
            later on, such as obesity and type 2 diabetes. Aim for a nutritious diet with reduced fat and sugar content, incorporating ample fruits and
            vegetables. Additionally, strive for regular physical activity, ideally about 30 minutes daily for five days a week.
          </p>
        </div>
      </section>

      <section className="mt-16 flex flex-col gap-10 bg-linear-gradient-blue-50 px-5 py-12.5">
        <div className="flex flex-col gap-5">
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-pink-100">
            <Image src="/images/bowl.svg" alt="" width={26} height={32} aria-hidden="true" />
          </div>
          <div>
            <h3 className="mb-5 text-2lg font-semibold text-blue-800">Healthy eating</h3>
            <p className="text-gray-500">Healthy eating promotes weight control, disease prevention, better digestion, immunity, mental clarity, and mood.</p>
          </div>
        </div>
        <div className="flex flex-col gap-5">
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-orange-100">
            <Image src="/images/gym.svg" alt="" width={32} height={32} aria-hidden="true" />
          </div>
          <div>
            <h3 className="mb-5 text-2lg font-semibold text-blue-800">Regular exercise</h3>
            <p className="text-gray-500">
              Exercise improves fitness, aids weight control, elevates mood, and reduces disease risk, fostering wellness and longevity.
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-5">
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-turquoise-100">
            <Image src="/images/night.svg" alt="" width={32} height={32} aria-hidden="true" />
          </div>
          <div>
            <h3 className="mb-5 text-2lg font-semibold text-blue-800">Adequate sleep</h3>
            <p className="text-gray-500">
              Sleep enhances mental clarity, emotional stability, and physical wellness, promoting overall restoration and rejuvenation.
            </p>
          </div>
        </div>
      </section>

      <section className="mt-14 px-5 pb-24">
        <div className="mb-14">
          <h2 className="mb-7 text-center text-3xl font-semibold text-blue-800">Limitations of BMI</h2>
          <p className="text-center text-gray-500">
            Although BMI is often a practical indicator of healthy weight, it is not suited for every person. Specific groups should carefully consider their
            BMI outcomes, and in certain cases, the isMetric may not be beneficial to use.
          </p>
        </div>

        <div className="flex flex-col gap-4">
          <div className="rounded-2.5xl p-5 shadow-card">
            <div className="mb-4 flex items-center gap-3.5">
              <Image src="/images/gender.svg" alt="" width={32} height={32} aria-hidden="true" />
              <h3 className="text-lg font-semibold text-blue-800">Gender</h3>
            </div>
            <p className="text-gray-500">
              The development and body fat composition of girls adn boys vary with age. Consequently, a child’s age and gender are considered when evaluating
              their BMI.
            </p>
          </div>
          <div className="rounded-2.5xl p-5 shadow-card">
            <div className="mb-4 flex items-center gap-3.5">
              <Image src="/images/cake.svg" alt="" width={32} height={32} aria-hidden="true" />
              <h3 className="text-lg font-semibold text-blue-800">Age</h3>
            </div>
            <p className="text-gray-500">In aging individuals, increased body fat and muscle loss may cause BMI to underestimate body fat content.</p>
          </div>
          <div className="rounded-2.5xl p-5 shadow-card">
            <div className="mb-4 flex items-center gap-3.5">
              <Image src="/images/muscle.svg" alt="" width={32} height={32} aria-hidden="true" />
              <h3 className="text-lg font-semibold text-blue-800">Muscle</h3>
            </div>
            <p className="text-gray-500">BMI may misclassify muscular individuals as overweight or obese, as it doesn’t differentiate muscle from fat.</p>
          </div>
          <div className="rounded-2.5xl p-5 shadow-card">
            <div className="mb-4 flex items-center gap-3.5">
              <Image src="/images/baby.svg" alt="" width={32} height={32} aria-hidden="true" />
              <h3 className="text-lg font-semibold text-blue-800">Pregnancy</h3>
            </div>
            <p className="text-gray-500">
              Expectant mothers experience weight gain due to their growing baby. Maintaining a healthy pre-pregnancy BMI is advisable to minimise health risks
              for both mother and child.
            </p>
          </div>
          <div className="rounded-2.5xl p-5 shadow-card">
            <div className="mb-4 flex items-center gap-3.5">
              <Image src="/images/person.svg" alt="" width={32} height={32} aria-hidden="true" />
              <h3 className="text-lg font-semibold text-blue-800">Race</h3>
            </div>
            <p className="text-gray-500">
              Certain health concerns may affect individuals of some Black and Asian origins at lower BMIs than others. To learn more, it is advised to discuss
              this with your GP or practice nurse.
            </p>
          </div>
        </div>
      </section>
    </main>
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

import Image from 'next/image';
// TODO: continue styling the custom radio (remove the border if checked)
export default function Home() {
  return (
    <main>
      <section className="rounded-b-5xl bg-slate-200 px-6">
        <div className="flex flex-col items-center gap-6 pt-8">
          <Image src="/images/logo.svg" alt="" width={60} height={60} className="h-10 w-10" aria-hidden="true" />
          <h1 className="text-center text-5xl font-semibold leading-tight text-blue-800">Body Mass Index Calculator</h1>
          <p className="text-center text-gray-500">
            Better understand your weight in relation to your height using our body mass index (BM) calculator. While BMI is not the sole determinant of a
            healthy weight, it offers a valuable starting point to evaluate your overall health and well-being.
          </p>
        </div>

        <div className="flex flex-col gap-6 rounded-2.5xl bg-white p-6">
          <h2 className="text-xl font-semibold">Enter your details below</h2>
          <div className="flex justify-between">
            <div className="flex items-center gap-4">
              <input
                className="relative flex h-8 w-8 cursor-pointer appearance-none items-center justify-center rounded-full border border-gray-200 before:h-3.5 before:w-3.5 before:rounded-full before:bg-blue-500 before:opacity-0 checked:border-indigo-50 checked:bg-indigo-50 checked:before:opacity-100"
                type="radio"
                name="measurement"
                id="metric"
                value=""
              ></input>
              <label className="cursor-pointer font-medium" htmlFor="metric">
                Metric
              </label>
            </div>
            <div className="flex items-center gap-4">
              <input
                className="relative flex h-8 w-8 cursor-pointer appearance-none items-center justify-center rounded-full border border-gray-200 before:h-3.5 before:w-3.5 before:rounded-full before:bg-blue-500 before:opacity-0 checked:border-indigo-50 checked:bg-indigo-50 checked:before:opacity-100"
                type="radio"
                name="measurement"
                id="imperial"
              />
              <label className="cursor-pointer font-medium" htmlFor="imperial">
                Imperial
              </label>
            </div>
          </div>
          <div className="flex flex-col gap-4.5">
            <div className="flex flex-col gap-2.5">
              <label className="text-sm font-medium text-gray-500" htmlFor="height">
                Height
              </label>
              <div className="relative flex items-center">
                <input
                  className="w-full rounded-xl border border-gray-200 px-6 py-4 text-xl font-semibold text-blue-900 outline-none placeholder:text-gray-300 focus-visible:ring-2 focus-visible:ring-blue-500"
                  type="text"
                  id="height"
                  placeholder="0"
                />
                <span className="absolute right-6 text-xl font-semibold text-blue-500">cm</span>
              </div>
            </div>
            <div className="flex flex-col gap-2.5">
              <label className="text-sm font-medium text-gray-500" htmlFor="weight">
                Weight
              </label>
              <div className="relative flex items-center">
                <input
                  className="w-full rounded-xl border border-gray-200 px-6 py-4 text-xl font-semibold text-blue-900 outline-none placeholder:text-gray-300 focus-visible:ring-2 focus-visible:ring-blue-500"
                  type="text"
                  id="weight"
                  placeholder="0"
                />
                <span className="absolute right-6 text-xl font-semibold text-blue-500">cm</span>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-4 rounded-2xl bg-blue-500 p-6">
            <>
              <h3 className="text-xl font-semibold text-white">Welcome!</h3>
              <p className="text-white">Enter your height and weight and you’ll see your BMI result here</p>
            </>
            {/* <>
              <div>
                <h3 className="mb-2 font-semibold text-white">Your BMI is...</h3>
                <span className="text-5xl font-semibold text-white">23.4</span>
              </div>
              <p className="text-white">
                Your BMI suggests you’re a healthy weight. Your ideal weight is between <span className="font-semibold">63.3kgs - 85.2kgs</span>.
              </p>
            </> */}
          </div>
        </div>
      </section>

      <section>
        <div>
          <Image src="/images/person-eating.png" alt="A person eating asian food" width={311} height={333} />
        </div>
        <div>
          <h2>What your BMI result means</h2>
          <p>
            A BMI range of 18.5 to 24.9 is considered a ‘healthy weight’. Maintaining a healthy weight may lower your changes of experiencing health issues
            later on, such as obesity and type 2 diabetes. Aim for a nutritious diet with reduced fat and sugar content, incorporating ample fruits and
            vegetables. Additionally, strive for regular physical activity, ideally about 30 minutes daily for five days a week.
          </p>
        </div>
      </section>

      <section>
        <div>
          <div>
            <Image src="/images/bowl.svg" alt="" width={32} height={32} aria-hidden="true" />
          </div>
          <div>
            <h3>Healthy eating</h3>
            <p>Healthy eating promotes weight control, disease prevention, better digestion, immunity, mental clarity, and mood.</p>
          </div>
        </div>
        <div>
          <div>
            <Image src="/images/gym.svg" alt="" width={32} height={32} aria-hidden="true" />
          </div>
          <div>
            <h3>Regular exercise</h3>
            <p>Exercise improves fitness, aids weight control, elevates mood, and reduces disease risk, fostering wellness and longevity.</p>
          </div>
        </div>
        <div>
          <div>
            <Image src="/images/night.svg" alt="" width={32} height={32} aria-hidden="true" />
          </div>
          <div>
            <h3>Adequate sleep</h3>
            <p>Sleep enhances mental clarity, emotional stability, and physical wellness, promoting overall restoration and rejuvenation.</p>
          </div>
        </div>
      </section>

      <section>
        <div>
          <h2>Limitations of BMI</h2>
          <p>
            Although BMI is often a practical indicator of healthy weight, it is not suited for every person. Specific groups should carefully consider their
            BMI outcomes, and in certain cases, the measurement may not be beneficial to use.
          </p>
        </div>

        <div>
          <div>
            <div>
              <Image src="/images/gender.svg" alt="" width={32} height={32} aria-hidden="true" />
              <h3>Gender</h3>
            </div>
            <p>
              The development and body fat composition of girls adn boys vary with age. Consequently, a child’s age and gender are considered when evaluating
              their BMI.
            </p>
          </div>
          <div>
            <div>
              <Image src="/images/cake.svg" alt="" width={32} height={32} aria-hidden="true" />
              <h3>Age</h3>
            </div>
            <p>In aging individuals, increased body fat and muscle loss may cause BMI to underestimate body fat content.</p>
          </div>
          <div>
            <div>
              <Image src="/images/muscle.svg" alt="" width={32} height={32} aria-hidden="true" />
              <h3>Muscle</h3>
            </div>
            <p>BMI may misclassify muscular individuals as overweight or obese, as it doesn’t differentiate muscle from fat.</p>
          </div>
          <div>
            <div>
              <Image src="/images/bady.svg" alt="" width={32} height={32} aria-hidden="true" />
              <h3>Pregnancy</h3>
            </div>
            <p>
              Expectant mothers experience weight gain due to their growing baby. Maintaining a healthy pre-pregnancy BMI is advisable to minimise health risks
              for both mother and child.
            </p>
          </div>
          <div>
            <div>
              <Image src="/images/person.svg" alt="" width={32} height={32} aria-hidden="true" />
              <h3>Race</h3>
            </div>
            <p>
              Certain health concerns may affect individuals of some Black and Asian origins at lower BMIs than others. To learn more, it is advised to discuss
              this with your GP or practice nurse.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

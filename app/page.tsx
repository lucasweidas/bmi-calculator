import Image from 'next/image';
import Card from './card';

export default function Home() {
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
          <Card />
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

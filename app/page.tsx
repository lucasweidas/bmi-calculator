import Image from 'next/image';
import Card from '../components/card';
import dynamic from 'next/dynamic';

const Desktop = dynamic(() => import('../components/desktop'), { ssr: false });

export default function Home() {
  return (
    <main className="xl:mx-auto xl:max-w-[90rem] xl:px-6">
      <section className="flex flex-col items-center xl:relative xl:items-start">
        <div className="flex w-full flex-col items-center gap-6 rounded-b-5xl bg-linear-gradient-blue-200 px-5 pb-52 pt-8 md:px-12 md:pb-74 xl:max-w-4.5xl xl:items-start xl:gap-0 xl:px-16 xl:pb-48 xl:pt-20 desktop:px-28">
          <Image src="/images/logo.svg" alt="" width={60} height={60} className="h-10 w-10 xl:h-14 xl:w-14" aria-hidden="true" />
          <div className="flex max-w-2xl flex-col items-center gap-6 text-center xl:max-w-[30rem] xl:items-start xl:gap-12 xl:text-start">
            <h1 className="text-4xl font-semibold !leading-tiny text-blue-800 max-xl:max-w-sm mobile:text-5xl xl:mt-33 xl:text-6xl">
              Body Mass Index Calculator
            </h1>
            <p className="text-gray-500">
              Better understand your weight in relation to your height using our body mass index (BM) calculator. While BMI is not the sole determinant of a
              healthy weight, it offers a valuable starting point to evaluate your overall health and well-being.
            </p>
          </div>
        </div>
        <Card />
      </section>

      <div className="relative bottom-20 md:bottom-28 xl:bottom-auto xl:mt-24">
        <section className="flex flex-col gap-10 md:mx-auto md:max-w-3xl md:flex-row md:items-center md:justify-between xl:max-w-6.5xl xl:items-end">
          <div className="relative isolate flex justify-center overflow-hidden rounded-4xl before:absolute before:bottom-0 before:left-0 before:-z-10 before:aspect-video before:max-h-80 before:w-full before:rounded-4xl before:bg-sky-50 md:-left-6 md:w-80 before:md:aspect-[1.2/1] xl:left-auto xl:w-[35rem] before:xl:max-h-96">
            <Image
              src="/images/person-eating.png"
              alt="A person eating asian food"
              width={311}
              height={333}
              className="w-[min(100%-4rem,25rem)] md:relative md:-left-4 md:w-80 xl:left-auto xl:w-[30rem]"
              priority
            />
          </div>
          <div className="px-5 md:mr-10 md:max-w-[21rem] md:px-0 xl:relative xl:mr-0 xl:max-w-[29rem] xl:pb-12">
            <Desktop>
              <Image
                src="/images/desktop-right-arc.svg"
                alt=""
                width={85}
                height={201}
                aria-hidden="true"
                className="absolute -top-[calc(100%-4rem)] right-3"
              />
            </Desktop>
            <h2 className="mb-6 text-3xl font-semibold text-blue-800 xl:text-4.5xl">What your BMI result means</h2>
            <p className="text-gray-500">
              A BMI range of 18.5 to 24.9 is considered a &#x2018;healthy weight&#x2019;. Maintaining a healthy weight may lower your changes of experiencing
              health issues later on, such as obesity and type 2 diabetes. Aim for a nutritious diet with reduced fat and sugar content, incorporating ample
              fruits and vegetables. Additionally, strive for regular physical activity, ideally about 30 minutes daily for five days a week.
            </p>
          </div>
        </section>
        <section className="mt-16 bg-linear-gradient-blue-50 md:mt-24 xl:rounded-4xl">
          <div className="grid gap-10 px-5 py-12.5 md:mx-auto md:max-w-3xl md:px-10 md:py-16 xl:max-w-none xl:grid-cols-3 xl:gap-9 xl:px-28 xl:py-17">
            <div className="flex flex-col gap-5 md:items-center md:gap-10 md:max-xl:flex-row xl:items-start xl:gap-11">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-pink-100 md:flex-none">
                <Image src="/images/bowl.svg" alt="" width={26} height={32} aria-hidden="true" />
              </div>
              <div>
                <h3 className="mb-5 text-1.5xl font-semibold text-blue-800 md:text-2xl xl:mb-6">Healthy eating</h3>
                <p className="text-gray-500">
                  Healthy eating promotes weight control, disease prevention, better digestion, immunity, mental clarity, and mood.
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-5 md:items-center md:gap-10 md:max-xl:flex-row xl:items-start xl:gap-11">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-orange-100 md:flex-none">
                <Image src="/images/gym.svg" alt="" width={32} height={32} aria-hidden="true" />
              </div>
              <div>
                <h3 className="mb-5 text-1.5xl font-semibold text-blue-800 md:text-2xl xl:mb-6">Regular exercise</h3>
                <p className="text-gray-500">
                  Exercise improves fitness, aids weight control, elevates mood, and reduces disease risk, fostering wellness and longevity.
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-5 md:items-center md:gap-10 md:max-xl:flex-row xl:items-start xl:gap-11">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-turquoise-100 md:flex-none">
                <Image src="/images/night.svg" alt="" width={32} height={32} aria-hidden="true" />
              </div>
              <div>
                <h3 className="mb-5 text-1.5xl font-semibold text-blue-800 md:text-2xl xl:mb-6">Adequate sleep</h3>
                <p className="text-gray-500">
                  Sleep enhances mental clarity, emotional stability, and physical wellness, promoting overall restoration and rejuvenation.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="mt-14 px-5 md:mx-auto md:mt-20 md:max-w-3xl md:px-10 xl:mt-33 xl:max-w-6.5xl xl:px-0">
          <div className="text-center md:max-w-[40rem] md:max-xl:mx-auto xl:relative xl:max-w-lg xl:text-start">
            <h2 className="text-3xl font-semibold text-blue-800 md:mb-6 xl:text-5xl">Limitations of BMI</h2>
            <p className="text-gray-500">
              Although BMI is often a practical indicator of healthy weight, it is not suited for every person. Specific groups should carefully consider their
              BMI outcomes, and in certain cases, the isMetric may not be beneficial to use.
            </p>
            <Desktop>
              <Image
                src="/images/desktop-left-arc.svg"
                alt=""
                width={93}
                height={123}
                aria-hidden="true"
                className="absolute -bottom-[calc(100%+4rem)] left-52"
              />
            </Desktop>
          </div>
          <div className="mt-7 grid gap-4 md:mt-17 md:grid-cols-4 xl:relative xl:bottom-28 xl:ml-auto xl:mt-0 xl:max-w-[59rem] xl:grid-cols-10 xl:grid-rows-[repeat(3,auto)] xl:gap-7">
            <div className="rounded-2.5xl p-5 shadow-card md:col-span-2 md:p-8 xl:col-span-4 xl:col-start-6">
              <div className="mb-4 flex items-center gap-3.5 md:gap-4 xl:gap-5">
                <Image src="/images/gender.svg" alt="" width={32} height={32} aria-hidden="true" />
                <h3 className="text-lg font-semibold text-blue-800 md:text-xl">Gender</h3>
              </div>
              <p className="text-gray-500">
                The development and body fat composition of girls adn boys vary with age. Consequently, a child&#x2019;s age and gender are considered when
                evaluating their BMI.
              </p>
            </div>
            <div className="rounded-2.5xl p-5 shadow-card md:col-span-2 md:p-8 xl:col-span-4 xl:col-start-3 xl:row-start-2">
              <div className="mb-4 flex items-center gap-3.5 md:gap-4 xl:gap-5">
                <Image src="/images/cake.svg" alt="" width={32} height={32} aria-hidden="true" />
                <h3 className="text-lg font-semibold text-blue-800 md:text-xl">Age</h3>
              </div>
              <p className="text-gray-500">In aging individuals, increased body fat and muscle loss may cause BMI to underestimate body fat content.</p>
            </div>
            <div className="rounded-2.5xl p-5 shadow-card md:col-span-2 md:p-8 xl:col-span-4 xl:col-start-7 xl:row-start-2">
              <div className="mb-4 flex items-center gap-3.5 md:gap-4 xl:gap-5">
                <Image src="/images/muscle.svg" alt="" width={32} height={32} aria-hidden="true" />
                <h3 className="text-lg font-semibold text-blue-800 md:text-xl">Muscle</h3>
              </div>
              <p className="text-gray-500">
                BMI may misclassify muscular individuals as overweight or obese, as it doesn&#x2019;t differentiate muscle from fat.
              </p>
            </div>
            <div className="rounded-2.5xl p-5 shadow-card md:col-span-2 md:p-8 xl:col-span-4 xl:col-start-1 xl:row-start-3">
              <div className="mb-4 flex items-center gap-3.5 md:gap-4 xl:gap-5">
                <Image src="/images/baby.svg" alt="" width={32} height={32} aria-hidden="true" />
                <h3 className="text-lg font-semibold text-blue-800 md:text-xl">Pregnancy</h3>
              </div>
              <p className="text-gray-500">
                Expectant mothers experience weight gain due to their growing baby. Maintaining a healthy pre-pregnancy BMI is advisable to minimise health
                risks for both mother and child.
              </p>
            </div>
            <div className="rounded-2.5xl p-5 shadow-card md:col-start-2 md:col-end-4 md:p-8 xl:col-span-4 xl:col-start-5 xl:row-start-3">
              <div className="mb-4 flex items-center gap-3.5 md:gap-4 xl:gap-5">
                <Image src="/images/person.svg" alt="" width={32} height={32} aria-hidden="true" />
                <h3 className="text-lg font-semibold text-blue-800 md:text-xl">Race</h3>
              </div>
              <p className="text-gray-500">
                Certain health concerns may affect individuals of some Black and Asian origins at lower BMIs than others. To learn more, it is advised to
                discuss this with your GP or practice nurse.
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

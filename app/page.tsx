import Image from 'next/image';

export default function Home() {
  return (
    <main>
      <section>
        <div>
          <Image src="/images/logo.svg" alt="" width={60} height={60} aria-hidden="true" />
          <h1>Body Mass Index Calculator</h1>
          <p>
            Better understand your weight in relation to your height using our body mass index (BM) calculator. While BMI is not the sole determinant of a
            healthy weight, it offers a valuable starting point to evaluate your overall health and well-being.
          </p>
        </div>
        <div>
          <h2>Enter your details below</h2>
          <div>
            <div>
              <input type="radio" name="measurement" id="metric" />
              <span></span>
              <label htmlFor="metric">Metric</label>
            </div>
            <div>
              <input type="radio" name="measurement" id="imperial" />
              <span></span>
              <label htmlFor="imperial">Imperial</label>
            </div>

            <div>
              <label htmlFor="height">Height</label>
              <div>
                <input type="text" id="height" />
                <span></span>
              </div>
            </div>
            <div>
              <label htmlFor="weight">Weight</label>
              <div>
                <input type="text" id="weight" />
                <span></span>
              </div>
            </div>

            <div>
              <h3>Welcome!</h3>
              <p>Enter your height and weight and you’ll see your BMI result here</p>
            </div>
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

import Image from "next/image"
import styles from "../../styles/home/food.module.css"
import sushi_5 from "../../public/assets/sushi-5.png"
import sushi_4 from "../../public/assets/sushi-4.png"
import arrow_vertical from "../../public/assets/arrow-vertical.svg"
import arrow_horizontal from "../../public/assets/arrow-horizontal.svg"

const Food = () => {
  return (
    <div className={styles.trending}>
      <section className={styles.trending__sushi}>
        <div className={styles.trending__content}>
          <p className={styles.sushi__subtitle}>What’s Trending / トレンド</p>

          <h3 className={styles.sushi__title}>Japanese Sushi</h3>
          <p className={styles.sushi__description}>
            Feel the taste of the most delicious Sushi here.
          </p>

          <ul className={styles.trending__list}>
            <li>
              <div>
                <img src="assets/check.svg" alt="check" />
              </div>
              <p>Make Sushi</p>
            </li>
            <li>
              <div>
                <img src="assets/check.svg" alt="check" />
              </div>
              <p>Oshizushi</p>
            </li>
            <li>
              <div>
                <img src="assets/check.svg" alt="check" />
              </div>
              <p>Uramaki Sushi</p>
            </li>
            <li>
              <div>
                <img src="assets/check.svg" alt="check" />
              </div>
              <p>Nigiri Sushi</p>
            </li>
            <li>
              <div>
                <img src="assets/check.svg" alt="check" />
              </div>
              <p>Temaki Sushi</p>
            </li>
            <li>
              <div>
                <img src="assets/check.svg" alt="check" />
              </div>
              <p>Inari Sushi</p>
            </li>
          </ul>
        </div>

        <div className={styles.trending__image}>
          <Image
            src={sushi_5}
            alt="sushi"
            className={styles.sushi_image}
            data-aos="fade-left"
          />

          <div className={styles.trending__arrow_left}>
            <Image src={arrow_vertical} alt="arrow vertical" />
          </div>

          <div className={styles.trending__arrow_bottom}>
            <Image src={arrow_horizontal} alt="arrow horizontal" />
          </div>
        </div>
      </section>

      <div className={styles.trending__discover} data-aos="zoom-in">
        <p>Discover</p>
      </div>

      <section className={styles.trending_drinks}>
        <div className={styles.trending__image}>
          <Image
            src={sushi_4}
            alt="sushi"
            className={styles.sushi_image}
            data-aos="fade-right"
          />

          <div className={styles.trending__arrow_top}>
            <Image src={arrow_horizontal} alt="arrow horizontal" />
          </div>

          <div className={styles.trending__arrow_right}>
            <Image src={arrow_vertical} alt="arrow vertical" />
          </div>
        </div>

        <div className={styles.trending__content}>
          <p className={styles.sushi__subtitle}>What’s Trending / トレンド</p>

          <h3 className={styles.sushi__title}>Japanese Drinks</h3>
          <p className={styles.sushi__description}>
            Feel the taste of the most delicious Japense drinks here.
          </p>

          <ul className={styles.trending__list}>
            <li>
              <div>
                <img src="assets/check.svg" alt="check" />
              </div>
              <p>Oruncha</p>
            </li>
            <li>
              <div>
                <img src="assets/check.svg" alt="check" />
              </div>
              <p>Sakura Tea</p>
            </li>
            <li>
              <div>
                <img src="assets/check.svg" alt="check" />
              </div>
              <p>Aojiru</p>
            </li>
            <li>
              <div>
                <img src="assets/check.svg" alt="check" />
              </div>
              <p>Ofukucha</p>
            </li>
            <li>
              <div>
                <img src="assets/check.svg" alt="check" />
              </div>
              <p>Kombu-cha</p>
            </li>
            <li>
              <div>
                <img src="assets/check.svg" alt="check" />
              </div>
              <p>Mugicha</p>
            </li>
          </ul>
        </div>
      </section>
    </div>
  )
}

export default Food

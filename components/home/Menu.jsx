import Image from "next/image"
import styles from "../../styles/home/menu.module.css"
import sushi_12 from "../../public/assets/sushi-12.png"
import sushi_11 from "../../public/assets/sushi-11.png"
import sushi_10 from "../../public/assets/sushi-10.png"
import sushi_9 from "../../public/assets/sushi-9.png"
import sushi_8 from "../../public/assets/sushi-8.png"
import sushi_7 from "../../public/assets/sushi-7.png"
import sushi_6 from "../../public/assets/sushi-6.png"
import arrow_right from "../../public/assets/arrow-right.svg"
import star from "../../public/assets/star.svg"
import Button from "@/utills/button/Button"

const Menu = () => {
  return (
    <div className={styles.popular_foods}>
      <h2 className={styles.popular_foods__title} data-aos="flip-up">
        Popular Food / 人気
      </h2>

      <div className={styles.popular_foods__filters} data-aos="fade-up">
        <button
          className={`${styles.popular_foods__filter__btn} 
          ${styles.navigation__btn}`}
        >
          All
        </button>
        <button className={styles.popular_foods__filter__btn}>
          <Image
            src={sushi_9}
            alt="sushi 9"
            className={styles.popular_foods__filter__btn_img}
          />
          Sushi
        </button>
        <button className={styles.popular_foods__filter__btn}>
          <Image
            src={sushi_8}
            alt="sushi 8"
            className={styles.popular_foods__filter__btn_img}
          />
          Ramen
        </button>
        <button className={styles.popular_foods__filter__btn}>
          <Image
            src={sushi_7}
            alt="sushi 7"
            className={styles.popular_foods__filter__btn_img}
          />
          Udon
        </button>
        <button className={styles.popular_foods__filter__btn}>
          <Image
            src={sushi_6}
            alt="sushi 6"
            className={styles.popular_foods__filter__btn_img}
          />
          Danggo
        </button>
        <button
          className={`${styles.popular_foods__filter__btn} 
          ${styles.navigation__btn}`}
        >
          All
        </button>
      </div>

      <div className={styles.popular_foods__catalogue} data-aos="fade-up">
        <article className={styles.popular_foods__card}>
          <Image
            src={sushi_12}
            alt="Picture of sushi"
            className={styles.image}
          />
          <h4 className={styles.popular_foods__card__title}>Chezu Sushi</h4>

          <div className={styles.popular_foods__card__details}>
            <div>
              <Image src={star} alt="star" width={18} />
              <p>4.9</p>
            </div>

            <p>$21.00</p>
          </div>
        </article>

        <article
          className={`${styles.popular_foods__card} ${styles.active_card}`}
        >
          <Image
            src={sushi_11}
            alt="Picture of sushi"
            className={styles.active_image}
          />
          <h4 className={styles.popular_foods__card__title__active}>
            Original Sushi
          </h4>

          <div className={styles.popular_foods__card__details__active}>
            <div>
              <Image src={star} alt="star" width={18} />
              <p>5.0</p>
            </div>

            <p>$19.00</p>
          </div>
        </article>

        <article className={styles.popular_foods__card}>
          <Image
            src={sushi_10}
            alt="Picture of sushi"
            className={styles.image}
          />
          <h4 className={styles.popular_foods__card__title}>Ramen Legendo</h4>

          <div className={styles.popular_foods__card__details}>
            <div>
              <Image src={star} alt="star" width={18} />
              <p>4.7</p>
            </div>

            <p>$13.00</p>
          </div>
        </article>
      </div>

      <Button color="black">
        Explore Food
        <Image
          src={arrow_right}
          alt="arrow-right"
          width={20}
          style={{ marginLeft: "5px" }}
        />
      </Button>
    </div>
  )
}

export default Menu

import Image from "next/image"
import styles from "../../styles/home/about-us.module.css"
import sushi_3 from "../../public/assets/sushi-3.png"
import sushi_2 from "../../public/assets/sushi-2.png"
import aboutBg from "../../public/assets/about_bg1.png"
import aboutBg_2 from "../../public/assets/about_bg2.png"
import readMore from "../../public/assets/arrow-up-right.svg"

const AboutUs = () => {
  return (
    <div className={styles.about_us}>
      <div className={styles.about_us__image}>
        <div className={styles.about_us_image__sushi}>
          <Image
            src={sushi_3}
            alt="Picture of sushi"
            className={styles.sushi_image}
            data-aos="fade-right"
          />
          <Image
            src={aboutBg}
            alt="Name of sushi"
            className={styles.sushi_image__description}
          />
        </div>

        <button className={styles.about_us__button}>
          Learn More
          <Image src={readMore} alt="learn more" width={15} />
        </button>

        <div className={styles.about_us_image__sushi}>
          <Image
            src={sushi_2}
            alt="Picture of sushi"
            className={styles.sushi_image}
            data-aos="fade-right"
          />
          <Image
            src={aboutBg_2}
            alt="Name of sushi"
            className={styles.sushi_image__description}
          />
        </div>
      </div>

      <div className={styles.about_us__content}>
        <p className={styles.sushi__subtitle}>About Us / 私たちに関しては</p>
        <h3 className={styles.sushi__title}>
          Our mission is to bring true Japanese flavours to you.
        </h3>
        <p className={styles.sushi__description}>
          We will continue to provide the experience of Omotenashi, the Japanese
          mindset of hospitality, with our shopping and dining for our
          customers.
        </p>
      </div>
    </div>
  )
}

export default AboutUs

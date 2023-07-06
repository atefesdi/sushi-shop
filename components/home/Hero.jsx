import Image from "next/image"
import styles from "../../styles/home/hero.module.css"
import user from "../../public/assets/user.png"
import Button from "@/utills/button/Button"
import playPic from "../../public/assets/play-circle.svg"
import sushiPic from "../../public/assets/sushi-1.png"

const Hero = () => {
  return (
    <div className={styles.hero__container}>
      <div className={styles.hero__image} data-aos="fade-left">
        <Image src={sushiPic} alt="Picture of sushi" className={styles.image} />
        <div className={styles.hero__image_caption}>
          <span>寿</span>
          <span>司</span>
          <span>皿</span>
        </div>
      </div>

      <div className={styles.hero__content} data-aos="fade-right">
        <div className={styles.hero__content_info}>
          <h1>Feel the taste of Japanese food</h1>
          <p>
            Feel the taste of the most popular Japanese food from anywhere and
            anytime.
          </p>
          <div className={styles.button__container}>
            <Button color={"black"}>Order Now</Button>
            <Button>
              <Image
                src={playPic}
                alt="play"
                width="55"
                height="55"
                style={{ padding: "5px" }}
              />
              How to Order
            </Button>
          </div>
        </div>

        <div className={styles.hero__content_testimonial}>
          <div className={styles.hero__content_customer}>
            <h4>
              24<span>k+</span>
            </h4>
            <p>Happy Customers</p>
          </div>

          <span className={styles.divider}></span>

          <div className={styles.hero__content_review}>
            <Image src={user} alt="user" width="55" height="55" />
            <p>
              "This is the best Japanese food delivery service that ever
              existed."
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero

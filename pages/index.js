import Head from "next/head"
import Image from "next/image"
import { Inter } from "@next/font/google"
import styles from "@/styles/Home.module.css"
import Heaher from "@/components/header/Heaher"
import Hero from "@/components/home/Hero"
import AboutUs from "@/components/home/AboutUs"
import Menu from "@/components/home/Menu"
import Food from "@/components/home/Food"

const inter = Inter({ subsets: ["latin"] })

export default function Home() {
  return (
    <Heaher>
      <section id="#hero">
        <Hero />
      </section>

      <section id="#about-us">
        <AboutUs />
      </section>

      <section id="#menu">
        <Menu />
      </section>

      <section id="food">
        <Food />
      </section>
    </Heaher>
  )
}

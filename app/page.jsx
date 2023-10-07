import Image from 'next/image'
import Navbar from '@/components/navbar'
import styles from './home.module.css'
import CoffeType from '@/components/coffetype'
import Footer from '@/components/footer'

export default function Home() {
  return (
    <div>
      <Navbar/>
      <section className={styles.containerHome}>
        <div className={styles.titlehome}>
          <h1>Discover the finest coffee beans from local vendors</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et iure quo impedit eum quidem beatae iusto ducimus illo optio odio?</p>
        </div>
        <div className={styles.imageHome}>
         <Image
          src="/img/coffe_cupp.png" 
          alt="Picture of the author"
          objectFit='contain'
          layout='fill'
         />
        </div>
      </section>
      <section className={styles.types}>
        <div className={styles.title}>
        <h2>Tipos de cafe</h2>
        </div>
        <div className={styles.list}>
          <CoffeType name={"Expresso"} />
          <CoffeType name={"Americano"} />
          <CoffeType name={"Latte"} />
          <CoffeType name={"Cold Brew"} />
          <CoffeType name={"Mocha"} />
          <CoffeType name={"Prensa francesa"} />
        </div>
      </section>
      <Footer/>
    </div>
  )
}

import Image from 'next/image'
import Navbar from '@/components/navbar'
import styles from './home.module.css'
import CoffeType from '@/components/coffetype'
import Footer from '@/components/footer'
import Link from 'next/link'

export default function Home() {
  return (
    <div>
      
      <section className={styles.containerHome}>
        <div className={styles.titlehome}>
          <h1>Descubra los mejores granos de café de proveedores locales.</h1>
          <p>Por cada grano de cafe existe un amante de cafe en el mundo</p>
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
        <Link className={styles.seeMore} href="/coffetypes"> Ver mas </Link>
      </section>
      
    </div>
  )
}

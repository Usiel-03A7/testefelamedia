import Image from 'next/image'
import Navbar from '@/components/navbar'
import styles from './home.module.css'

export default function Home() {
  return (
    <div>
      <Navbar/>
      <section className={styles.containerHome}>
        <div>
          <h1>Discover the finest coffee beans from local vendors</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et iure quo impedit eum quidem beatae iusto ducimus illo optio odio?</p>
        </div>
        <div className={styles.imageHome}>
         <Image
          src="/img/coffe_cupp.png" 
          width={400}
          height={295}
          alt="Picture of the author"
          objectFit='cover'
         />
        </div>
      </section>
      <section>
        <div className={styles.title}>
        <h2>Tipos de cafe</h2>
        </div>
        <div className={styles.list}>
          
        </div>
      </section>
    </div>
  )
}

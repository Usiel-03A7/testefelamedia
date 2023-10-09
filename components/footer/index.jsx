import Link from "next/link"
import styles from "./footer.module.css"
export default function Footer() {
  return (
    <footer className={styles.container}>
      <div className={styles.title}>
        <h2>The coffee restaurant</h2>
      </div>
      <div className={styles.information}>
        <ul className={styles.list}>
          <li>Connect with us</li>
          <li> <Link href="https://www.facebook.com/uzyel.solanosilva/"> Facebook</Link> </li>
          <li> <Link href="https://github.com/Usiel-03A7"> Github</Link> </li>
          <li><Link href="https://www.Linkedin.com">Linkedin</Link></li>
          <li><Link href="https://www.tiktok.com/@usiel03a7">Tiktok</Link></li>
          <li><Link href="https://www.instagram.com/usiel_03a7/">Instagram</Link></li>
        </ul>
      </div>
    </footer>
  )
}
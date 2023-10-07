import Link from "next/link"
import styles from "./footer.module.css"
export default function Footer() {
  return (
    <footer className={styles.container}>
      <div className={styles.title}>
        <h2>The coffee restaurant</h2>
      </div>
      <div className={styles.information}>
        <ul>
          <li>Connect with us</li>
          <li> <Link href="https://www.facebook.com/?locale=es_LA"> Facebook</Link> </li>
          <li><Link href="www.google.com"> Gmail</Link>  </li>
          <li><Link href="www.Linkedin.com">Linkedin</Link></li>
          <li><Link href="www.tiktok.com">Tiktok</Link></li>
          <li><Link href="www.instagram.com">Instagram</Link></li>
        </ul>
      </div>
    </footer>
  )
}
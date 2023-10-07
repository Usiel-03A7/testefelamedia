import Input from "../input"
import style from  "./navbar.module.css"
import Link from "next/link"
export default function Navbar() {
  return (
    <nav className={style.navbar}>
      <Input placeholder="Buscar"/>
      <ul className={style.containerpages}>
        <li> <Link href="/">Home</Link></li>
        <li><Link href="/about">About us</Link></li>
        <li><Link href="/contact">Contact us</Link></li>
      </ul>
    </nav>
  )
}
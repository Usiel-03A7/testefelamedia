import Image from "next/image"
import styles from "./coffetype.module.css"
export default function CoffeType({name, image}){
return (
  <div className={styles.container}>
    <h3>{name}</h3>
    {/* <Image width={100} height={100} src={image} alt={nombre}/> */}
  </div>
)
}
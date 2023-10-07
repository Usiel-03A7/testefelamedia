import Image from "next/image"
export default function CoffeType({nombre, imagen}){
return (
  <div>
    <h2>{nombre}</h2>
    <Image width={100} height={100} src={imagen} alt={nombre}/>
  </div>
)
}
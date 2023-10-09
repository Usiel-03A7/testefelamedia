import style from './about.module.css'
import Image from 'next/image'
export default function About() {
  return (
    <div className={style.container}>
      <div className={style.about}>
        <Image src="/img/about.jpg" alt="about" width={500} height={500} />
       <div className={style.aboutInfo}>
       <h2>Acerca de Nosotros</h2>
        <p>Bienvenidos a The coffee restaurant, un lugar donde la pasión por el café se une con un compromiso inquebrantable hacia nuestros clientes. Fundada con el objetivo de brindar experiencias excepcionales, The coffee restaurant se ha convertido en un refugio para amantes del café y buscadores de calidad en cada taza.</p>
       </div>
      </div>
      <div className={style.mision}>
      <Image src="/img/mision.jpg" alt="mision" width={500} height={500} />
        <div className={style.misionInfo}>
        <h2>Nuestra Misión</h2>
        <p>En The coffee restaurant, nuestra misión es simple pero poderosa: servir la mejor taza de café posible mientras creamos un ambiente acogedor y amigable para nuestros clientes. Estamos dedicados a llevar el arte del café a otro nivel, priorizando la calidad en cada etapa, desde la selección de granos hasta la preparación de la bebida final.</p>
        </div>
      </div>
      <div className={style.about}>
      <Image src="/img/calidad.jpg" alt="ccalidad" width={500} height={500} />
        <div className={style.aboutInfo}>
        <h2>Calidad Intransigente</h2>
        <p>Sabemos que la calidad es la base de cualquier experiencia memorable de café. Por eso, trabajamos incansablemente para asegurarnos de que cada taza de café que servimos sea una obra maestra en sí misma. Seleccionamos cuidadosamente granos de café de origen sostenible, los tostamos con precisión para resaltar sus sabores únicos y los preparamos con maestría para ofrecer una taza que deleite los sentidos.</p>
        </div>
      </div>
      <div className={style.mision}>
      <Image src="/img/trato.jpg" alt="trato" width={500} height={500} />
     <div className={style.misionInfo}>
     <h2>Trato al Cliente Excepcional</h2>
        <p>En The coffee restaurant, creemos que un trato al cliente excepcional es tan importante como el café que servimos. Nuestro equipo de baristas apasionados está comprometido a brindarte una experiencia personalizada y cordial cada vez que nos visites. Valoramos tus preferencias y estamos aquí para satisfacer tus necesidades con una sonrisa.</p>
     </div>
      </div>
      <div className={style.about}>
      <Image src="/img/comunidad.webp" alt="comunidad" width={500} height={500} />
        <div className={style.aboutInfo}>
        <h2>Comunidad Cafetera</h2>
        <p>Además de servir café excepcional, The coffee restaurant se esfuerza por ser un punto de encuentro para la comunidad cafetera. Organizamos eventos, catas y talleres para compartir nuestro amor por el café y fomentar la conexión entre los amantes de esta bebida.</p>
        </div>
      </div>
      <div className={style.mision}>
      <Image src="/img/unete.webp" alt="unete" width={500} height={500} />
        <div className={style.misionInfo}>
        <h2>Únete a Nosotros</h2>
        <p> Te invitamos a unirte a nosotros en este viaje apasionante. Descubre el mundo del café de calidad y el trato al cliente excepcional en The coffee restaurant. Ven a visitarnos y experimenta el aroma y el sabor de una taza de café que refleja nuestra dedicación a la excelencia.</p>
        </div>
      </div>

    </div>
  )

}
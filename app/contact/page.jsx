import styles from './contact.module.css'
export default function Contact(){

  return (
    <div className={styles.formContainer}>
      <h2>Formulario</h2>
      <form className={styles.formStyles} method="POST" action="/api/contact">
        <input name="fullname" type="text" placeholder="Nombre Completo" />
        <input name="email" type="mail" placeholder="Correo electronico" />
        <input name="number" type="number" placeholder="Numero de telefono" />
        <input name="text" type="text" placeholder="Mensaje" />
        <button>enviar</button>
      </form>
    </div>
  )
}
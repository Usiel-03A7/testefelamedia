
export default function Contact(){

  return (
    <div>
      <h2>formulario</h2>
      <form method="POST" action="/api/contact">
        <input name="fullname" type="text" placeholder="Nombre Completo" />
        <input name="email" type="mail" placeholder="Correo electronico" />
        <input name="number" type="number" placeholder="Numero de telefono" />
        <input name="text" type="text" placeholder="mensaje" />
        <button>enviar</button>
      </form>
    </div>
  )
}
import { send } from '@/services/nodemailer'
export async function POST(req) {
  const form = await req.formData();
  const email = form.get("email")
  const text = form.get("email")
  const number = form.get("email")
  const fullname = form.get("email") 
  const fulltext = `Nombre: ${fullname} \n Numero: ${number} \n \n Mensaje: \n ${text}`
  
  
  await send(email, "Contacto", fulltext)
  return Response.redirect('/contact')
}

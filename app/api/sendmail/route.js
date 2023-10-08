import { send } from '@/services/nodemailer'
export async function POST(req) {
  // const {emails, subject, text} = await req.json()
  // const form = await req.formData();
  // const emails = form.get("email")
  // await send(emails, subject, text)
  return Response.json({ success: true });
}

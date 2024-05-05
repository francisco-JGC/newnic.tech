import { EmailTemplate } from '../../../components/EmailTemplate'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req) {
  const { username, email, service, message } = await req.json()

  try {
    const data = await resend.emails.send({
      from: 'Acme <onboarding@resend.dev>',
      to: ['jjjchico1@gmail.com'],
      subject: 'Nuevo mensaje desde Newnic.tech',
      react: EmailTemplate({ username, email, service, message }),
    })

    return Response.json(data)
  } catch (error) {
    return Response.json({ error })
  }
}

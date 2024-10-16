/**
 * Contributed by HarshArora-1205
 */

import { NextResponse } from 'next/server'

import nodemailer from 'nodemailer'

const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 465,
  secure: true,
  auth: {
    user: process.env.NEXT_EMAIL,
    pass: process.env.NEXT_PASSWORD
  }
})

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
export async function POST(req: Request) {
  try {
    console.log('running on server!')
    const data = await req.json()
    const { name, email, message } = data

    if (!name || !email || !message || !emailRegex.test(email)) {
      if (!name || !email || !message) {
        return NextResponse.json(
          { message: 'All Fields are required' },
          { status: 422 }
        )
      } else {
        return NextResponse.json(
          { message: 'Invalid Data Provided' },
          { status: 422 }
        )
      }
    }

    const mailData = {
      from: process.env.NEXT_EMAIL,
      to: process.env.NEXT_RECEPIENT,
      subject: `${name} sent you a message!`,
      text: message,
      html: `
        <p><strong>Hi Sunny!</strong></p>
        <p>You have received a ping from ${name} (${email}).</p>
        <p><strong>Message:</strong> ${message}</p>
      `
    }

    await transporter.sendMail(mailData)

    return NextResponse.json({ message: 'Success' }, { status: 200 })
  } catch (error) {
    console.error('Error processing request:', error)
    return NextResponse.json({ message: 'Error Occurred' }, { status: 500 })
  }
}

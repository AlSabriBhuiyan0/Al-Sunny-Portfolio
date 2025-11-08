/**
 * Contributed by HarshArora-1205
 */

'use client'

import React, { useState } from 'react'

import Toast from './Toast'

// export const dynamic = "force-dynamic"

const ContactForm = () => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

  const [toast, setToast] = useState<boolean>(false)
  const [toastStatus, setToastStatus] = useState<boolean>(false)
  const [toastMsg, setToastMsg] = useState<string>('')

  const [sending, setSending] = useState<boolean>(false)

  const [name, setName] = useState<string>('')
  const [nameError, setNameError] = useState<string>('')

  const [email, setEmail] = useState<string>('')
  const [emailError, setEmailError] = useState<string>('')

  const [message, setMessage] = useState<string>('')
  const [messageError, setMessageError] = useState<string>('')

  const displayToast = (message: string, status: boolean) => {
    setToast(true)
    setToastMsg(message)
    setToastStatus(status)

    setTimeout(() => {
      setToast(false)
      setToastMsg('')
    }, 5000)
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setNameError('')
    setEmailError('')
    setMessageError('')

    // Validation
    if (!name) {
      setNameError('Name is required!')
    }
    if (!email) {
      setEmailError('Email is required!')
    } else if (!emailRegex.test(email)) {
      setEmailError('Invalid email format!')
    }
    if (!message) {
      setMessageError('Message is required!')
    }

    // If validation fails, don't proceed
    if (!name || !email || !emailRegex.test(email) || !message) {
      return
    }

    setSending(true)
    const data = { name, email, message }

    try {
      // Try Next.js API route first, fallback to PHP for static hosting
      let apiUrl = '/api/contact'
      let response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          Accept: 'application/json, text/plain, */*',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      })

      // If Next.js API fails (404), try PHP endpoint
      if (response.status === 404) {
        apiUrl = '/api/contact.php'
        response = await fetch(apiUrl, {
          method: 'POST',
          headers: {
            Accept: 'application/json, text/plain, */*',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(data)
        })
      }

      if (response.status === 422) {
        displayToast('Invalid Data Received', false)
      } else if (response.status === 200) {
        setName('')
        setEmail('')
        setMessage('')
        displayToast('Message sent successfully', true)
      } else {
        displayToast('Oops! An Error occurred', false)
      }
    } catch (error) {
      displayToast('An error occurred', false)
      console.error('An error occurred:', error)
    } finally {
      setSending(false)
    }
  }
  return (
    <div
      id="contact"
      className="flex h-auto w-full flex-col items-center justify-center px-6 py-12"
    >
      <h1 className="text-lg font-medium">or ping me directly here...</h1>
      {toast && <Toast message={toastMsg} status={toastStatus} />}
      <form
        className="mt-12 flex w-full max-w-[900px] flex-col gap-8"
        onSubmit={handleSubmit}
      >
        <div className="flex flex-row gap-4 md:flex-col">
          <div className="flex w-full flex-col">
            <label
              htmlFor="name"
              className="after:text-xl after:text-red-500 after:content-['*']"
            >
              NAME
            </label>
            <input
              type="text"
              value={name}
              name="name"
              id="name"
              placeholder="Khadiza Akter"
              onChange={(e) => {
                setName(e.target.value)
              }}
              className="border bg-transparent px-4 py-2 text-lg outline-none"
              autoComplete="off"
            />
            <div id="name-error" className="mt-1 text-red-500">
              {nameError}
            </div>
          </div>
          <div className="flex w-full flex-col">
            <label
              htmlFor="email"
              className="after:text-xl after:text-red-500 after:content-['*']"
            >
              EMAIL
            </label>
            <input
              placeholder="khadizaakter@gmail.com"
              onChange={(e) => {
                setEmail(e.target.value)
              }}
              type="email"
              value={email}
              name="email"
              id="email"
              autoComplete="off"
              className="border bg-transparent px-4 py-2 text-lg outline-none"
            />
            <div id="email-error" className="mt-1 text-red-500">
              {emailError}
            </div>
          </div>
        </div>
        <div className="flex flex-col">
          <label
            htmlFor="message"
            className="after:text-xl after:text-red-500 after:content-['*']"
          >
            MESSAGE
          </label>
          <textarea
            placeholder="Exciting friendship & conversations lie ahead! 😉"
            onChange={(e) => {
              setMessage(e.target.value)
            }}
            name="message"
            value={message}
            id="message"
            cols={30}
            rows={6}
            className="border bg-transparent px-4 py-2 text-lg outline-none"
          />
          <div id="message-error" className="mt-1 text-red-500">
            {messageError}
          </div>
        </div>
        <button
          type="submit"
          className={`w-full border bg-transparent px-4 py-2 text-lg font-bold transition-all delay-100 ease-in-out hover:border-black hover:bg-target hover:text-white disabled:border-gray-500 disabled:bg-gray-500 disabled:hover:bg-gray-500 disabled:hover:text-black dark:disabled:text-black`}
          disabled={sending}
        >
          {sending ? 'PINGING...' : 'PING ME!'}
        </button>
      </form>
    </div>
  )
}

export default ContactForm

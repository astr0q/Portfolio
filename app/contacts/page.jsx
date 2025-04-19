'use client'

import { useState, useEffect } from 'react'
import emailjs from '@emailjs/browser'
import { FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

export default function Contacts() {
  const [send, setSend] = useState(false)
  const [sent, setSent] = useState(false)

  useEffect(() => {
    emailjs.init(process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY)
  }, [])

  useEffect(()=>{
    const timer = setTimeout(() => {
      setSent(false)
    }, 3000)

    return () => clearTimeout(timer)
  },[sent])

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSend(true)

    const formData = {
      from_name: `${e.target['first-name'].value} ${e.target['last-name'].value}`,
      from_email: e.target.email.value,
      message: e.target.message.value,
      time: new Date().toLocaleString(),
    }

    try {
      const result = await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        formData
      )

      if (result.status === 200) {
        setSent(true)
        e.target.reset()
      }
    } catch (error) {
      console.error('Failed to send email:', error)
    } finally {
      setSend(false)
    }
  }

  return (
    <div className="isolate px-6 py-24 sm:py-32 lg:px-8">
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]"
      >
        <div
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
        />
      </div>
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-4xl font-semibold tracking-tight text-balance text-gray-900 sm:text-5xl p-3">
          Contact Page
        </h2>
        
        {/* Updated contact info styling */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-4 mb-6">
          <a 
            href="tel:+37128879971" 
            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/90 shadow-md hover:shadow-lg transition-all duration-300 group border border-black"
          >
            <FaPhone className="text-indigo-600 group-hover:scale-110 transition-transform duration-300" />
            <span className="text-gray-700 font-medium">(+371) 28879971</span>
          </a>
          
          <a 
            href="mailto:kkalkis89@gmail.com"
            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/90 shadow-md hover:shadow-lg transition-all duration-300 group border border-black"
          >
            <MdEmail className="text-indigo-600 text-xl group-hover:scale-110 transition-transform duration-300" />
            <span className="text-gray-700 font-medium">kkalkis89@gmail.com</span>
          </a>
        </div>

        <p className="mt-2 text-lg/8 text-gray-600">
          Feel free to ask and send message.
        </p>
      </div>
      <form onSubmit={handleSubmit} className="mx-auto mt-16 max-w-xl sm:mt-20">
        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
          <div>
            <label htmlFor="first-name" className="block text-sm/6 font-semibold text-gray-900">
              First name
            </label>
            <div className="mt-2.5">
              <input
                id="first-name"
                name="first-name"
                type="text"
                autoComplete="given-name"
                className="border border-black block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
              />
            </div>
          </div>
          <div>
            <label htmlFor="last-name" className="block text-sm/6 font-semibold text-gray-900">
              Last name
            </label>
            <div className="mt-2.5">
              <input
                id="last-name"
                name="last-name"
                type="text"
                autoComplete="family-name"
                className="border border-black block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="email" className="block text-sm/6 font-semibold text-gray-900">
              Email
            </label>
            <div className="mt-2.5">
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                className="border border-black block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="message" className="block text-sm/6 font-semibold text-gray-900">
              Message
            </label>
            <div className="mt-2.5">
              <textarea
                id="message"
                name="message"
                rows={4}
                className="border border-black block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
                defaultValue={''}
              />
            </div>
          </div>
        </div>
        <div className="mt-10">
          <button
            type="submit"
            disabled={send}
            className="border border-black block w-full rounded-md bg-indigo-900 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:opacity-50"
          >
            {send ? 'Sending...' : 'Let\'s talk'}
          </button>
        </div>
      </form>
      {sent && (
        <div className="fixed top-4 right-4 bg-green-500 text-white px-6 py-3 rounded-md shadow-lg">
          Message sent successfully!
        </div>
      )}
    </div>
  )
}
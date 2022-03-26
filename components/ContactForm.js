import { useRef, useState, useContext } from 'react'
import { ColorThemeContext } from '../context/ThemeProvider'
import emailjs from '@emailjs/browser'
import ReCAPTCHA from 'react-google-recaptcha'

const ContactForm = () => {
    const { colorTheme } = useContext(ColorThemeContext)

    const form = useRef()
    const [allowSend, setAllowSend] = useState(false)
    const [messageSent, setMessageSent] = useState(false)
    const [messageError, setMessageError] = useState(false)

    const sendEmail = (e) => {
        e.preventDefault()

        emailjs
            .sendForm(
                process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
                process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
                form.current,
                process.env.NEXT_PUBLIC_EMAILJS_USER_ID
            )
            .then(
                (result) => {
                    if (result.text === 'OK') {
                        setMessageSent(true)
                    }
                },
                (error) => {
                    setMessageError(true)
                }
            )
    }

    const onChangeReCAPTCHA = (value) => {
        console.log(value)
        if (value) {
            setAllowSend(true)
        } else {
            setAllowSend(false)
        }
    }

    // TODO: Add a message to the user if the message was sent successfully

    return (
        <form ref={form} onSubmit={sendEmail} className="">
            <div className="w-full py-2">
                <label htmlFor="name" className="block mb-1 text-sm font-medium text-sky-600 dark:text-sky-400">
                    Tu Name
                </label>
                <input
                    id="name"
                    type="text"
                    name="user_name"
                    className="w-full h-8 pl-2 text-gray-800 shadow-md dark:outline-sky-400 outline-sky-600"
                    required
                />
            </div>

            <div className="w-full py-2">
                <label htmlFor="email" className="block mb-1 text-sm font-medium text-sky-600 dark:text-sky-400 ">
                    Tu Email
                </label>
                <input
                    type="email"
                    name="user_email"
                    id="email"
                    className="w-full h-8 pl-2 text-gray-800 shadow-md dark:outline-sky-400 outline-sky-600"
                    required
                />
            </div>

            <div className="w-full py-2">
                <label htmlFor="message" className="block mb-1 text-sm font-medium text-sky-600 dark:text-sky-400 ">
                    Message
                </label>
                <textarea
                    name="message"
                    id="message"
                    className="w-full pl-2 text-gray-800 shadow-md dark:outline-sky-400 outline-sky-600"
                    rows={5}
                    required
                    minLength={10}
                />
            </div>
            {!allowSend ? (
                <ReCAPTCHA
                    size="normal"
                    theme={colorTheme === 'light' ? 'light' : 'dark'}
                    sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
                    onChange={onChangeReCAPTCHA}
                />
            ) : (
                <button className="btn" type="submit">
                    Enviar mensaje
                </button>
            )}
        </form>
    )
}
export default ContactForm

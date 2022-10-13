import { useRef, useState, FormEvent } from 'react'
import emailjs from '@emailjs/browser'
import ReCAPTCHA from 'react-google-recaptcha'
import { useTranslation } from 'next-i18next'

const ContactForm = () => {
    const { t } = useTranslation('common')

    const form = useRef<HTMLFormElement>(null)

    const [allowSend, setAllowSend] = useState(false)
    const [messageSent, setMessageSent] = useState(false)
    const [messageError, setMessageError] = useState(false)
    const [sendingMessage, setSendingMessage] = useState(false)

    const sendEmail = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        if (allowSend) {
            setSendingMessage(true)
            setMessageError(false)
            setMessageSent(false)

            emailjs
                .sendForm(
                    process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID as string,
                    process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID as string,
                    form.current as HTMLFormElement,
                    process.env.NEXT_PUBLIC_EMAILJS_USER_ID
                )
                .then(
                    (result) => {
                        if (result.text === 'OK') {
                            setMessageSent(true)

                            form.current?.reset()
                        }
                    },
                    (error) => {
                        console.error(error)
                        setMessageError(true)
                    }
                )
                .finally(() => setSendingMessage(false))
        }
    }

    const onChangeReCAPTCHA = (value: any) => {
        if (value) {
            setAllowSend(true)
        } else {
            setAllowSend(false)
        }
    }

    return (
        <form ref={form} onSubmit={sendEmail}>
            <div className="w-full py-2">
                <label htmlFor="name" className="block mb-1 text-base font-medium text-gray-800 dark:text-sky-400">
                    {t('contact.name_label')}
                </label>
                <input
                    id="name"
                    type="text"
                    name="user_name"
                    className="w-full h-10 pl-2 text-gray-800 shadow-md border-2 border-sky-400 dark:outline-sky-400 outline-sky-600 caret-sky-400"
                    required
                />
            </div>

            <div className="w-full py-2">
                <label htmlFor="email" className="block mb-1 text-base font-medium text-gray-800 dark:text-sky-400 ">
                    {t('contact.email_label')}
                </label>
                <input
                    type="email"
                    name="user_email"
                    id="email"
                    className="w-full h-10 pl-2 text-gray-800 shadow-md border-2 border-sky-400 dark:outline-sky-400 outline-sky-600 caret-sky-400"
                    required
                />
            </div>

            <div className="w-full py-2 mb-1">
                <label htmlFor="message" className="block mb-1 text-base font-medium text-gray-800 dark:text-sky-400 ">
                    {t('contact.message_label')}
                </label>
                <textarea
                    name="message"
                    id="message"
                    className="w-full pl-2 text-gray-800 shadow-md border-2 border-sky-400 dark:outline-sky-400 outline-sky-600 caret-sky-400"
                    rows={5}
                    required
                    minLength={10}
                />
            </div>
            <div className="mb-1">
                <ReCAPTCHA
                    size="normal"
                    sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY as string}
                    onChange={onChangeReCAPTCHA}
                />
            </div>
            <div className="btn-wrapper inline">
                <button
                    className="btn disabled:cursor-not-allowed"
                    type="submit"
                    disabled={!allowSend || sendingMessage}
                >
                    {t('contact.send')}
                </button>
            </div>
            {sendingMessage && (
                <div className="inline-flex items-center justify-center space-x-2 ml-8">
                    <div className="w-4 h-4 rounded-full animate-pulse bg-sky-400"></div>
                    <div className="w-4 h-4 rounded-full animate-pulse bg-sky-400"></div>
                    <div className="w-4 h-4 rounded-full animate-pulse bg-sky-400"></div>
                </div>
            )}

            {messageSent && (
                <div className="pt-4">
                    <p className="text-green-500 font-semibold text-base" role="status">
                        ✅ {t('contact.message_sent')}
                    </p>
                </div>
            )}
            {messageError && (
                <div className="pt-4">
                    <p className="text-red-600 font-semibold text-base" role="status">
                        😵‍💫 {t('contact.message_failed')}
                    </p>
                </div>
            )}
        </form>
    )
}
export default ContactForm

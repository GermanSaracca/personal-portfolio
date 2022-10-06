import { HiOutlineMail } from 'react-icons/hi'
import ContactForm from '../components/ContactForm'

const Contact = () => {
    return (
        <section className="flex items-center min-h-screen section-padding border-2 border-green-600" id="contact">
            <section className="w-full py-4 mt-8 sm:max-w-sm border-red-300 border-2 ml-auto">
                <h3 className="flex items-center mb-4 ">
                    Enviame un mensaje
                    <HiOutlineMail className="ml-2 text-sky-600 dark:text-sky-400" size={'1.10em'} />
                </h3>

                <ContactForm />
            </section>
        </section>
    )
}
export default Contact

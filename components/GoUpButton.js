import { useScroll } from 'framer-motion'
import { useEffect, useState } from 'react'
import { BsArrowUp } from 'react-icons/bs'

const GoUpButton = () => {
    const { scrollYProgress } = useScroll()
    const [showButton, setShowButton] = useState(false)

    useEffect(() => {
        return scrollYProgress.onChange((latest) => {
            if (latest * 100 > 70) {
                setShowButton(true)
            } else {
                setShowButton(false)
            }
        })
    }, [scrollYProgress])

    const goUp = () => {
        window.scrollTo({ behavior: 'smooth', top: 0 })
    }

    return (
        <button
            className="fixed bottom-12 right-12 text-white bg-sky-400 rounded-full p-3 
            hover:bg-sky-500 hover:scale-105
            active:scale-95
            transition ease-in-out"
            style={{ opacity: showButton ? 1 : 0 }}
            onClick={goUp}
        >
            <BsArrowUp size={30} />
        </button>
    )
}
export default GoUpButton

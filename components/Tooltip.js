import { useRef } from 'react'
import propTypes from 'prop-types'
import { m } from 'framer-motion'

const Tooltip = ({ children, tooltipText, orientation = 'right' }) => {
    const tipRef = useRef(null)

    const orientations = {
        right: 'right',
        top: 'top',
        left: 'left',
        bottom: 'bottom',
    }

    function handleMouseEnter() {
        tipRef.current.style.contentVisibility = 'visible'
        tipRef.current.style.opacity = 1
    }

    function handleMouseLeave() {
        tipRef.current.style.opacity = 0
        tipRef.current.style.contentVisibility = 'hidden'
    }

    const xyAxis = (orientation) => {
        let xyAxisClassNames

        switch (orientation) {
            case orientations.right:
                xyAxisClassNames = 'top-0 left-full ml-4'
                break
            case orientations.left:
                xyAxisClassNames = 'top-0 right-full mr-4'
                break
            case orientations.top:
                xyAxisClassNames = 'bottom-full left-[50%] translate-x-[-50%] -translate-y-2'
                break
            case orientations.bottom:
                xyAxisClassNames = 'top-full left-[50%] translate-x-[-50%] translate-y-2'
                break

            default:
                break
        }

        return xyAxisClassNames
    }

    const pointerPosition = (orientation) => {
        let pointerClassnames

        switch (orientation) {
            case orientations.right:
                pointerClassnames = 'left-[-6px]'
                break
            case orientations.left:
                pointerClassnames = 'right-[-6px]'
                break
            case orientations.top:
                pointerClassnames = 'top-full left-[50%] translate-x-[-50%] -translate-y-2'
                break
            case orientations.bottom:
                pointerClassnames = 'bottom-full left-[50%] translate-x-[-50%] translate-y-2'
                break

            default:
                break
        }

        return pointerClassnames
    }

    const classContainer = `w-max absolute ${xyAxis(
        orientation
    )} bg-gray-400 text-white text-sm px-2 py-1 rounded flex items-center transition-all duration-150`

    const classPointer = `bg-gray-400 h-3 w-3 absolute ${pointerPosition(orientation)} rotate-45 -z-10 `

    return (
        <div
            className="relative flex items-center border-2 border-red-400"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <div className={classContainer} style={{ opacity: 0, contentVisibility: 'hidden' }} ref={tipRef}>
                <div className={classPointer} />
                {tooltipText}
            </div>
            {children}
        </div>
    )
}

Tooltip.propTypes = {
    orientation: propTypes.oneOf(['top', 'left', 'right', 'bottom']),
    tooltipText: propTypes.string.isRequired,
}
export default Tooltip

import { useState, useEffect } from 'react'

const useWindowWidth = () => {
  const [windowWidth, setWindowWidth] = useState(
    typeof window !== 'undefined' ? window.innerWidth : 0
  )

  const updateWidth = () => {
    setWindowWidth(window.innerWidth)
  }
  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('resize', updateWidth)
    }
    return () => {
      window.removeEventListener('resize', updateWidth)
    }
  }, [])

  return windowWidth
}

export default useWindowWidth

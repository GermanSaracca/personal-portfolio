import { useEffect } from 'react'
import { useRouter } from 'next/router'

const useScrollToTop = () => {
  const { pathname } = useRouter()

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.scrollTo({ behavior: 'smooth', top: 0 })
    }
  }, [pathname])
}

export default useScrollToTop

import { useEffect, useState } from 'react'
import { ClapButton } from '@lyket/react'
import ScrollTop from '@/components/ScrollTop'
import devLogger from '@/lib/devLogger'
import { ClapButton } from '@lyket/react'
import ScrollTop from '@/components/ScrollTop'

const ScrollTopAndComment = () => {
  const [show, setShow] = useState(false)

  useEffect(() => {
    const handleWindowScroll = () => {
      const shouldShow = window.scrollY > 50
      devLogger('Scroll event', { scrollY: window.scrollY, shouldShow })
      if (shouldShow !== show) {
        setShow(shouldShow)
      }
    }

    window.addEventListener('scroll', handleWindowScroll)
    return () => window.removeEventListener('scroll', handleWindowScroll)
  }, [show])

  return (
    <>
      <div
        className={`fixed right-8 bottom-9 hidden flex-col gap-6 ${show ? 'md:flex' : 'md:hidden'}`}
      >
        <button className="mb-16">
          <ClapButton id="diy-fish-holder" namespace="post" hideCounterIfLessThan={1} />
        </button>
      </div>
      <ScrollTop />
    </>
  )
}

export default ScrollTopAndComment

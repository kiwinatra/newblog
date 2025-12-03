import siteMetadata from '@/data/siteMetadata'
import headerNavLinks from '@/data/headerNavLinks'
import Link from './Link'
import SectionContainer from './SectionContainer'
import Footer from './Footer'
import { navigation } from '@/data/nav'
import CommandPalette from './CommandPalette'
import ThemeSwitch from './ThemeSwitch'
import Typewriter from 'typewriter-effect'
import { useRouter } from 'next/router'
import DropMenu from './DropMenu.js'
import Snowflakes from './Snowflakes'

const ChristmasHat = () => (
  <svg 
    className="inline-block h-8 w-8" 
    viewBox="0 0 32 32" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Основа шапки */}
    <path 
      d="M16 4L4 14L16 24L28 14L16 4Z" 
      fill="url(#hatGradient)" 
      stroke="#B80F30" 
      strokeWidth="1"
    />
    
    {/* Меховая оторочка */}
    <path 
      d="M4 14L16 4L28 14" 
      fill="#FFFFFF" 
      stroke="#F0F0F0" 
      strokeWidth="0.5"
    />
    
    {/* Помпон с градиентом */}
    <circle 
      cx="16" 
      cy="3" 
      r="3" 
      fill="url(#pomponGradient)"
    />
    
    {/* Украшения на шапке - снежинки */}
    <path 
      d="M10 17L9 16M11 18L10 17M12 19L11 18" 
      stroke="#FFFFFF" 
      strokeWidth="0.8" 
      strokeLinecap="round"
      opacity="0.9"
    />
    <path 
      d="M22 17L23 16M21 18L22 17M20 19L21 18" 
      stroke="#FFFFFF" 
      strokeWidth="0.8" 
      strokeLinecap="round"
      opacity="0.9"
    />
    <path 
      d="M16 20L16 19M16 22L16 21" 
      stroke="#FFFFFF" 
      strokeWidth="0.8" 
      strokeLinecap="round"
      opacity="0.9"
    />
    
    {/* Золотые узоры */}
    <path 
      d="M8 12L16 8L24 12" 
      stroke="#FFD700" 
      strokeWidth="0.6" 
      strokeLinecap="round"
      opacity="0.8"
    />
    <path 
      d="M6 13L16 10L26 13" 
      stroke="#FFD700" 
      strokeWidth="0.5" 
      strokeLinecap="round"
      opacity="0.6"
    />
    
    {/* Градиенты */}
    <defs>
      <linearGradient id="hatGradient" x1="16" y1="4" x2="16" y2="24" gradientUnits="userSpaceOnUse">
        <stop stopColor="#DC143C"/>
        <stop offset="1" stopColor="#B80F30"/>
      </linearGradient>
      <radialGradient id="pomponGradient" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(16 3) rotate(90) scale(3)">
        <stop stopColor="#FFFFFF"/>
        <stop offset="0.5" stopColor="#FFD700"/>
        <stop offset="1" stopColor="#FFA500"/>
      </radialGradient>
    </defs>
  </svg>
)

const LayoutWrapper = ({ children }) => {
  const router = useRouter()

  return (
    <SectionContainer>
      <div className="flex h-screen flex-col justify-between">
        <header className="flex items-center justify-between py-10">
          <div>
            <Link href="/" aria-label={siteMetadata.headerTitle}>
              <div className="flex items-center text-xl font-semibold">
                <div className="flex items-center">
                  <ChristmasHat />
                  <span className="ml-3 text-gray-900 dark:text-gray-100">
                    {`~${router.asPath === '/' ? 'home' : router.asPath.replace('/', '')}`}
                  </span>
                </div>
                <Typewriter
                  options={{
                    strings: [],
                    autoStart: true,
                    loop: true,
                  }}
                  component="span"
                  className="ml-2"
                />
              </div>
            </Link>
          </div>
          <div className="flex items-center text-base leading-5">
            <div className="hidden sm:block">
              {headerNavLinks.map((link) => (
                <Link
                  key={link.title}
                  href={link.href}
                  className="link-underline rounded py-1 px-2 text-gray-900 hover:bg-gray-200 dark:text-gray-100 dark:hover:bg-gray-700 sm:py-2 sm:px-3"
                >
                  {link.title}
                </Link>
              ))}
            </div>
            <CommandPalette navigation={navigation} />
            <ThemeSwitch />
            <DropMenu />
          </div>
        </header>
        <main className="mb-auto">{children}</main>
        <Footer />
        <Snowflakes />
      </div>
    </SectionContainer>
  )
}

export default LayoutWrapper
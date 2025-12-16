import Link from 'next/link'
import kebabCase from '@/lib/utils/kebabCase'

const Tag = ({ text }) => {
  return (
    <Link href={`/tags/${kebabCase(text)}`}>
      <a className="group relative mt-2 mr-3 overflow-hidden rounded-full border border-christmas-green/70 bg-gray-900/80 py-2 px-5 text-sm font-medium uppercase text-gray-200 transition-all duration-400 ease-in-out hover:border-christmas-red hover:text-white hover:shadow-xl">
        {/* Фоновый градиент при наведении */}
        <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-christmas-red/0 via-christmas-gold/10 to-christmas-red/0 transition-transform duration-500 group-hover:translate-x-full"></div>
        
        {/* Текст с иконкой гирлянды */}
        <span className="relative z-10 flex items-center">
          <svg 
            className="mr-2 h-3 w-3 text-christmas-gold" 
            viewBox="0 0 24 24" 
            fill="currentColor"
          >
            <path d="M12 2L10.59 3.41L12 4.83L13.41 3.41L12 2ZM20 12L18.59 10.59L17.17 12L18.59 13.41L20 12ZM12 20L13.41 18.59L12 17.17L10.59 18.59L12 20ZM4 12L5.41 10.59L6.83 12L5.41 13.41L4 12Z"/>
          </svg>
          {text.split(' ').join('-')}
        </span>
        
        {/* Маленькие снежинки по краям (только на десктопе) */}
        <span className="absolute -left-1 top-1/2 hidden h-2 w-2 -translate-y-1/2 rounded-full bg-christmas-red opacity-0 transition-opacity duration-300 group-hover:opacity-70 md:block"></span>
        <span className="absolute -right-1 top-1/2 hidden h-2 w-2 -translate-y-1/2 rounded-full bg-christmas-green opacity-0 transition-opacity duration-300 group-hover:opacity-70 md:block"></span>
      </a>
    </Link>
  )
}

export default Tag
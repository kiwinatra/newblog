

import Image from 'next/image'
import SocialIcon from './social-icons'
import FolderIcon from './icon'

const Card = ({ title, description, imgSrc, href, github, tech1, tech2, tech3 }) => (
  <div className="md p-4 md:w-1/2 relative group" style={{ maxWidth: '544px' }}>
    {/* Аккуратные еловые веточки по углам */}
    <div className="absolute -top-2 -left-2 w-5 h-5 text-christmas-green opacity-60">
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M20 10L12 2L4 10L7 10L4 13L12 5L20 13L17 10L20 10Z"/>
      </svg>
    </div>
    <div className="absolute -bottom-2 -right-2 w-5 h-5 text-christmas-red opacity-60 rotate-180">
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M20 10L12 2L4 10L7 10L4 13L12 5L20 13L17 10L20 10Z"/>
      </svg>
    </div>
    
    <div className="h-full transform overflow-hidden rounded-lg border-2 border-solid border-christmas-green bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 bg-opacity-95 transition-all duration-500 hover:scale-[1.02] hover:border-christmas-red hover:shadow-2xl hover:shadow-christmas-red/30 dark:border-christmas-green dark:hover:border-christmas-red">
      
      {/* Акцентная полоска сверху */}
      <div className="h-1 bg-gradient-to-r from-christmas-red via-christmas-gold to-christmas-red"></div>
      
      <div className="p-6">
        <div className="flex flex-row items-center justify-between">
          <div className="my-2">
            <div className="relative">
              <FolderIcon />
              {/* Маленькая звездочка над иконкой папки */}
              <div className="absolute -top-1 -right-1 w-3 h-3 text-christmas-gold animate-pulse">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"/>
                </svg>
              </div>
            </div>
          </div>
          <div className="flex flex-row justify-between">
            <div className="mx-1.5">
              {href ? <SocialIcon kind="external" href={href} size="6" className="hover:text-christmas-gold transition-colors duration-300" /> : null}
            </div>
            <div className="mx-1.5">
              {github ? <SocialIcon kind="github" href={github} size="6" className="hover:text-christmas-gold transition-colors duration-300" /> : null}
            </div>
          </div>
        </div>
        
        {/* Изображение с рождественской рамкой */}
        {imgSrc && (
          <div className="mb-4 relative">
            <div className="absolute inset-0 border-2 border-christmas-red/30 rounded-lg pointer-events-none"></div>
            <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-6 h-6 text-christmas-gold">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"/>
              </svg>
            </div>
            <Image
              alt={title}
              src={imgSrc}
              className="object-cover object-center rounded-lg border border-gray-700"
              width={544}
              height={306}
              layout="responsive"
              unoptimized
            />
          </div>
        )}
        
        {/* Заголовок с праздничным градиентом */}
        <h2 className="mb-3 text-2xl font-bold leading-8 tracking-tight bg-gradient-to-r from-christmas-red to-christmas-gold bg-clip-text text-transparent">
          {title}
        </h2>
        
        <p className="prose mb-4 max-w-none text-gray-300 dark:text-gray-300 leading-relaxed">
          {description}
        </p>
        
        {/* Технологии в новогоднем стиле */}
        <div className="flex flex-row justify-between items-center pt-3 border-t border-gray-700">
          <div className="flex flex-wrap gap-2">
            {[tech1, tech2, tech3].filter(Boolean).map((tech, index) => (
              <span 
                key={index}
                className="px-3 py-1 text-xs rounded-full bg-gradient-to-r from-christmas-green/20 to-christmas-red/20 text-gray-300 border border-gray-700 hover:border-christmas-gold transition-all duration-300"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
      
      {/* Декоративная нижняя полоска */}
      <div className="h-1 bg-gradient-to-r from-christmas-green via-christmas-gold to-christmas-green"></div>
    </div>
  </div>
)

export default Card
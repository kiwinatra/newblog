import Link from '@/components/Link'
import { PageSEO } from '@/components/SEO'
import { dayjs } from '@/components/DayJS'
import { useEffect, useState } from 'react'
import siteMetadata from '@/data/siteMetadata'
import {
  BsCloudsFill,
  BsMoonFill,
  BsClock,
  BsSunFill,
  BsFillCloudSunFill,
  BsFillCloudMoonFill,
  BsFillCloudFill,
  BsCloudDrizzleFill,
  BsCloudLightningFill,
  BsCloudSnowFill,
  BsCloudFogFill,
} from 'react-icons/bs'
import { FaCloudShowersHeavy } from 'react-icons/fa'

export default function Now() {
  // Статические данные
  const staticCurrentlyReading = [{
    title: "Atomic Habits",
    author: "James Clear", 
    url: "https://www.goodreads.com/book/show/40121378-atomic-habits"
  }]

  const staticMusic = {
    songUrl: null,
    title: "Not Playing"
  }

  // Состояния
  const [weatherData, setWeatherData] = useState(null)
  const [loading, setLoading] = useState(true)
  
  const icons = {
    '01d': <BsSunFill className="inline h-4 w-4 text-yellow-500 animate-pulse" />,
    '01n': <BsMoonFill className="inline h-4 w-4 text-blue-300 animate-pulse" />,
    '02d': <BsFillCloudSunFill className="inline h-4 w-4 text-gray-400" />,
    '02n': <BsFillCloudMoonFill className="inline h-4 w-4 text-gray-400" />,
    '03d': <BsFillCloudFill className="inline h-4 w-4 text-gray-500" />,
    '03n': <BsFillCloudFill className="inline h-4 w-4 text-gray-500" />,
    '04d': <BsCloudsFill className="inline h-4 w-4 text-gray-600" />,
    '04n': <BsCloudsFill className="inline h-4 w-4 text-gray-600" />,
    '09d': <BsCloudDrizzleFill className="inline h-4 w-4 text-blue-400" />,
    '09n': <BsCloudDrizzleFill className="inline h-4 w-4 text-blue-400" />,
    '10d': <FaCloudShowersHeavy className="inline h-4 w-4 text-blue-500" />,
    '10n': <FaCloudShowersHeavy className="inline h-4 w-4 text-blue-500" />,
    '11d': <BsCloudLightningFill className="inline h-4 w-4 text-yellow-400 animate-pulse" />,
    '11n': <BsCloudLightningFill className="inline h-4 w-4 text-yellow-400 animate-pulse" />,
    '13d': <BsCloudSnowFill className="inline h-4 w-4 text-blue-200" />,
    '13n': <BsCloudSnowFill className="inline h-4 w-4 text-blue-200" />,
    '50d': <BsCloudFogFill className="inline h-4 w-4 text-gray-300" />,
    '50n': <BsCloudFogFill className="inline h-4 w-4 text-gray-300" />,
  }

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        setLoading(true)
        // Координаты Гуанчжоу, Китай
        const response = await fetch(
          'https://api.openweathermap.org/data/2.5/weather?lat=23.1291&lon=113.2644&appid=1b3c10c18e894eaf1fd63eedde53fa54&units=metric&lang=en'
        )
        const data = await response.json()
        setWeatherData(data)
      } catch (error) {
        console.log('Weather API failed, using fallback')
        // Фолбэк данные для Гуанчжоу
        setWeatherData({
          main: { 
            temp: 25,
            feels_like: 28,
            humidity: 75
          },
          weather: [{ 
            icon: "02d", 
            description: "scattered clouds",
            main: "Clouds"
          }],
          wind: { speed: 2.1 },
          name: "Guangzhou"
        })
      } finally {
        setLoading(false)
      }
    }
    
    fetchWeather()
  }, [])

  // Дата и время - устанавливаем часовой пояс Китая
  const now = () => dayjs().tz('Asia/Shanghai')
  const [TodayDate, setDate] = useState(now())

  useEffect(() => {
    const timer = setInterval(() => setDate(now()), 1000)
    return () => clearInterval(timer)
  }, [])

  // Расчет возраста
  const calculateAge = () => {
    const birthDate = new Date('2012-12-12')
    const now = new Date()
    
    let years = now.getFullYear() - birthDate.getFullYear()
    let months = now.getMonth() - birthDate.getMonth()
    let days = now.getDate() - birthDate.getDate()

    if (days < 0) {
      months--
      days += new Date(now.getFullYear(), now.getMonth(), 0).getDate()
    }
    
    if (months < 0) {
      years--
      months += 12
    }

    if (years > 0 && months > 0 && days > 0) {
      return `${years} years, ${months} months, and ${days} days old`
    } else if (years > 0 && months === 0 && days === 0) {
      return `${years} years old. Happy Birthday!!`
    } else if (years > 0 && months > 0 && days === 0) {
      return `${years} years and ${months} months old`
    } else {
      return `${years} years old`
    }
  }

  const ageString = calculateAge()

  return (
    <>
      <PageSEO
        title={`Now - ${siteMetadata.author}`}
        description="What I'm working on now"
        url={siteMetadata.url}
      />
      
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="my-8 text-center">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            What I'm Doing Now
          </h1>
          <p className="text-gray-600 dark:text-gray-400 mt-2">
            Last updated: {TodayDate.format('MMMM D, YYYY • HH:mm:ss')} (China Time)
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {/* Location & Weather Card */}
          <div className="bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-800 dark:to-blue-900 rounded-2xl p-6 shadow-lg">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
              <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
              Location & Weather
            </h3>
            
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-gray-600 dark:text-gray-400">City:</span>
                <span className="font-semibold text-gray-900 dark:text-white">Guangzhou, China 🇨🇳</span>
              </div>
              
              {loading ? (
                <div className="animate-pulse">
                  <div className="h-4 bg-gray-300 rounded w-3/4"></div>
                </div>
              ) : weatherData && (
                <>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600 dark:text-gray-400">Weather:</span>
                    <div className="flex items-center space-x-2">
                      {icons[weatherData.weather[0].icon]}
                      <span className="font-semibold capitalize text-gray-900 dark:text-white">
                        {weatherData.weather[0].description}
                      </span>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600 dark:text-gray-400">Temperature:</span>
                    <span className="text-xl font-bold text-gray-900 dark:text-white">
                      {Math.round(weatherData.main.temp)}°C
                    </span>
                  </div>
                  
                  {weatherData.main.feels_like && (
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600 dark:text-gray-400">Feels like:</span>
                      <span className="font-semibold text-gray-900 dark:text-white">
                        {Math.round(weatherData.main.feels_like)}°C
                      </span>
                    </div>
                  )}
                </>
              )}
            </div>
          </div>

          {/* Reading & Age Card */}
          <div className="bg-gradient-to-br from-green-50 to-emerald-100 dark:from-gray-800 dark:to-green-900 rounded-2xl p-6 shadow-lg">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
              <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
              Currently Reading
            </h3>
            
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-gray-600 dark:text-gray-400">Book:</span>
                <a
                  href={staticCurrentlyReading[0].url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  {staticCurrentlyReading[0].title}
                </a>
              </div>
              
              <div className="flex items-center justify-between">
                <span className="text-gray-600 dark:text-gray-400">Author:</span>
                <span className="font-semibold text-gray-900 dark:text-white">
                  {staticCurrentlyReading[0].author}
                </span>
              </div>
              
              <div className="flex items-center justify-between">
                <span className="text-gray-600 dark:text-gray-400">Age:</span>
                <span className="font-semibold text-gray-900 dark:text-white">
                  {ageString}
                </span>
              </div>
            </div>
          </div>

          {/* Time & Date Card */}
          <div className="bg-gradient-to-br from-purple-50 to-pink-100 dark:from-gray-800 dark:to-purple-900 rounded-2xl p-6 shadow-lg">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
              <span className="w-2 h-2 bg-purple-500 rounded-full mr-2"></span>
              Current Time
            </h3>
            
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-gray-600 dark:text-gray-400">Date:</span>
                <span className="font-semibold text-gray-900 dark:text-white">
                  {TodayDate.format('DD MMMM YYYY')}
                </span>
              </div>
              
              <div className="flex items-center justify-between">
                <span className="text-gray-600 dark:text-gray-400">Time:</span>
                <div className="flex items-center space-x-2">
                  <BsClock className="h-4 w-4 text-purple-500 animate-pulse" />
                  <span className="text-xl font-bold text-gray-900 dark:text-white">
                    {TodayDate.format('HH:mm:ss')} CST
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Music & Drink Card */}
          <div className="bg-gradient-to-br from-orange-50 to-red-100 dark:from-gray-800 dark:to-orange-900 rounded-2xl p-6 shadow-lg">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
              <span className="w-2 h-2 bg-orange-500 rounded-full mr-2"></span>
              Right Now
            </h3>
            
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-gray-600 dark:text-gray-400">Listening:</span>
                <span className="font-semibold text-gray-900 dark:text-white">
                  {staticMusic.title}
                </span>
              </div>
              
              <div className="flex items-center justify-between">
                <span className="text-gray-600 dark:text-gray-400">Drinking:</span>
                <span className="font-semibold text-gray-900 dark:text-white">Chinese Tea 🍵</span>
              </div>
            </div>
          </div>
        </div>

        {/* Work Section */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg mb-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
            <span className="w-3 h-3 bg-blue-500 rounded-full mr-3"></span>
            Professional Life
          </h2>
          
          <div className="space-y-4 text-gray-700 dark:text-gray-300">
            <p className="leading-relaxed">
              I work as a <span className="font-semibold text-blue-600 dark:text-blue-400">Data Engineer</span> at{' '}
              <Link
                href="https://huggywug.co/"
                className="font-semibold text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                MOB Games
              </Link>
              , where I focus on building scalable data pipelines and automating processes using Scala and Google Cloud Platform.
            </p>
            
            <p className="leading-relaxed">
              Currently, I'm transitioning from <span className="font-semibold">Data Engineering</span> to{' '}
              <span className="font-semibold text-green-600 dark:text-green-400">Data Science</span> and actively seeking new opportunities in this field.
            </p>
            
            <p className="leading-relaxed">
              While I'm currently based in <span className="font-semibold">Guangzhou, China</span>, I'm open to remote opportunities or relocating for the right role that aligns with my career goals.
            </p>
            
            <p className="leading-relaxed">
              I'm currently exploring{' '}
              <Link
                href="https://www.youtube.com/watch?v=_u-PaJCpwiU&list=PLu0W_9lII9ai6fAMHp-acBmJONT7Y4BSG"
                className="font-semibold text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                advanced Machine Learning concepts
              </Link>{' '}
              and their applications in real-world business problems.
            </p>
          </div>
        </div>

        {/* Personal Life Section */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
            <span className="w-3 h-3 bg-green-500 rounded-full mr-3"></span>
            Personal Journey
          </h2>
          
          <div className="space-y-4 text-gray-700 dark:text-gray-300">
            <p className="leading-relaxed">
              Living in Guangzhou has been an incredible experience, immersing myself in the vibrant tech scene and rich culture of Southern China.
            </p>
            
            <p className="leading-relaxed">
              I'm continuously developing this website as a platform to share knowledge and experiences. I strongly believe in the power of{' '}
              <Link
                href="https://www.swyx.io/learn-in-public"
                className="font-semibold text-gray-900 dark:text-white hover:text-green-600 dark:hover:text-green-400 transition-colors"
              >
                learning in public
              </Link>{' '}
              and encourage everyone to start their own blogging journey.
            </p>
            
            <p className="leading-relaxed">
              Currently, I'm learning Mandarin and exploring the intersection of Eastern and Western tech philosophies while working on my next big project.
            </p>
          </div>
        </div>

        {/* Footer Divider */}
        <div className="text-center my-12">
          <div className="inline-flex items-center space-x-4 text-gray-400">
            <div className="w-12 h-px bg-gray-300"></div>
            <span className="text-sm">Live • Updated in real-time from China</span>
            <div className="w-12 h-px bg-gray-300"></div>
          </div>
        </div>
      </div>
    </>
  )
}
import { tweets } from '@/data/tweets'
import { PageSEO } from '@/components/SEO'
import siteMetadata from '@/data/siteMetadata'
import { useState } from 'react'

export default function Tweets() {
  const [activeTweet, setActiveTweet] = useState(null)

  const formatTime = (timestamp) => {
    const date = new Date(timestamp)
    const now = new Date('2025-11-01T23:59:59Z') // Фиксируем текущее время как конец дня 1 ноября 2025
    const diff = now - date
    
    const minutes = Math.floor(diff / 60000)
    const hours = Math.floor(diff / 3600000)
    
    if (minutes < 60) return `${minutes}m`
    if (hours < 24) return `${hours}h`
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })
  }

  const formatStats = (number) => {
    if (number >= 1000) {
      return (number / 1000).toFixed(1) + 'K'
    }
    return number.toString()
  }

  return (
    <>
      <PageSEO
        title={`Tweets - ${siteMetadata.author}`}
        description="My savage thoughts and developer rants"
      />
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8">
        <div className="max-w-2xl mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
              Savage Tweets
            </h1>
            <p className="text-gray-600 dark:text-gray-400">
              November 1, 2025 - A day of pure developer sass 💅
            </p>
          </div>

          {/* Twitter-like Feed */}
          <div className="space-y-4">
            {tweets.map((tweet) => (
              <div 
                key={tweet.id}
                className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 p-6 hover:shadow-lg transition-all duration-300 cursor-pointer"
                onClick={() => setActiveTweet(tweet)}
              >
                {/* Tweet Header */}
                <div className="flex items-start space-x-3 mb-3">
                  <img
                    src={tweet.author.avatar}
                    alt={tweet.author.name}
                    className="w-12 h-12 rounded-full object-cover border-2 border-pink-400"
                  />
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center space-x-2">
                      <span className="font-bold text-gray-900 dark:text-white text-lg">
                        {tweet.author.name}
                      </span>
                      <span className="text-gray-500 dark:text-gray-400 text-lg">
                        @{tweet.author.username}
                      </span>
                      <span className="text-gray-500 dark:text-gray-400">·</span>
                      <span className="text-gray-500 dark:text-gray-400 text-lg">
                        {formatTime(tweet.timestamp)}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Tweet Content */}
                <div className="mb-4">
                  <p className="text-gray-900 dark:text-white text-xl leading-relaxed whitespace-pre-line">
                    {tweet.content}
                  </p>
                </div>

                {/* Tweet Stats */}
                <div className="flex items-center justify-between text-gray-500 dark:text-gray-400 text-lg">
                  <div className="flex items-center space-x-6">
                    <button className="flex items-center space-x-2 hover:text-red-500 transition-colors group">
                      <div className="p-2 rounded-full group-hover:bg-red-50 dark:group-hover:bg-red-900/20 transition-colors">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 21.638h-.014C9.403 21.59 1.95 14.856 1.95 8.478c0-3.064 2.525-5.754 5.403-5.754 2.29 0 3.83 1.58 4.646 2.73.814-1.148 2.354-2.73 4.645-2.73 2.88 0 5.404 2.69 5.404 5.755 0 6.376-7.454 13.11-10.037 13.157H12z"/>
                        </svg>
                      </div>
                      <span>{formatStats(tweet.likes)}</span>
                    </button>

                    <button className="flex items-center space-x-2 hover:text-green-500 transition-colors group">
                      <div className="p-2 rounded-full group-hover:bg-green-50 dark:group-hover:bg-green-900/20 transition-colors">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M17.53 7.47l-5-5c-.293-.293-.768-.293-1.06 0l-5 5c-.294.293-.294.768 0 1.06s.767.294 1.06 0l3.72-3.72V15c0 .414.336.75.75.75s.75-.336.75-.75V4.81l3.72 3.72c.146.147.338.22.53.22s.384-.072.53-.22c.293-.293.293-.767 0-1.06z"/>
                          <path d="M19.708 21.944H4.292C3.028 21.944 2 20.916 2 19.652V14c0-.414.336-.75.75-.75s.75.336.75.75v5.652c0 .437.355.792.792.792h15.416c.437 0 .792-.355.792-.792V14c0-.414.336-.75.75-.75s.75.336.75.75v5.652c0 1.264-1.028 2.292-2.292 2.292z"/>
                        </svg>
                      </div>
                      <span>{formatStats(tweet.retweets)}</span>
                    </button>

                    <button className="flex items-center space-x-2 hover:text-blue-500 transition-colors group">
                      <div className="p-2 rounded-full group-hover:bg-blue-50 dark:group-hover:bg-blue-900/20 transition-colors">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M14.046 2.242l-4.148-.01h-.002c-4.374 0-7.8 3.427-7.8 7.802 0 4.098 3.186 7.206 7.465 7.37v3.828c0 .108.044.286.12.403.142.225.384.347.632.347.138 0 .277-.038.402-.118.264-.168 6.473-4.14 8.088-5.506 1.902-1.61 3.04-3.97 3.043-6.312v-.017c-.006-4.367-3.43-7.787-7.8-7.788zm3.787 12.972c-1.134.96-4.862 3.405-6.772 4.643V16.67c0-.414-.335-.75-.75-.75h-.396c-3.66 0-6.318-2.476-6.318-5.886 0-3.534 2.768-6.302 6.3-6.302l4.147.01h.002c3.532 0 6.3 2.766 6.302 6.296-.003 1.91-.942 3.844-2.514 5.176z"/>
                        </svg>
                      </div>
                      <span>{formatStats(tweet.replies)}</span>
                    </button>
                  </div>

                  <div className="flex items-center space-x-2 text-lg">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8.75 21V3h2v18h-2zM18 21V8.5h2V21h-2zM4 21l.004-10h2L6 21H4zm9.248 0v-7h2v7h-2z"/>
                    </svg>
                    <span>{tweet.views}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Footer */}
          <div className="text-center mt-12 text-gray-500 dark:text-gray-400">
            <p>Too savage? Follow my actual thoughts on</p>
            <a 
              href="https://t.me/imthebestkm" 
              className="text-blue-500 hover:underline font-medium"
              target="_blank"
              rel="noopener noreferrer"
            >
              Telegram
            </a>
          </div>
        </div>
      </div>
    </>
  )
}

export async function getStaticProps() {
  return { 
    props: {} 
  }
}
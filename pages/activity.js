import { MDXLayoutRenderer } from '@/components/MDXComponents'
import { getFileBySlug } from '@/lib/mdx'
import { PageSEO } from '@/components/SEO'
import siteMetadata from '@/data/siteMetadata'

const DEFAULT_LAYOUT = 'ActivityLayout'

export async function getStaticProps() {
  try {
    const activityDetails = await getFileBySlug('activity', ['default'])
    return { props: { activityDetails } }
  } catch (error) {
    return { 
      props: { 
        activityDetails: {
          mdxSource: null,
          frontMatter: {
            title: 'Activity',
            summary: 'My learning journey and resources',
            layout: DEFAULT_LAYOUT
          }
        }
      } 
    }
  }
}

export default function Activity({ activityDetails }) {
  const { mdxSource, frontMatter } = activityDetails

  if (!mdxSource) {
    return (
      <>
        <PageSEO
          title={`Activity - ${siteMetadata.author}`}
          description="My learning journey, resources and bookmarks"
        />
        <div className="max-w-6xl mx-auto py-12 px-4">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-4">
              Learning Activity
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              My ongoing journey in data science, machine learning and creative development
            </p>
          </div>

          {/* Stats Overview */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            <div className="bg-gradient-to-br from-blue-50 to-cyan-100 dark:from-blue-900/20 dark:to-cyan-900/20 rounded-2xl p-6 text-center border border-blue-100 dark:border-blue-800">
              <div className="text-3xl mb-2">📚</div>
              <div className="text-2xl font-bold text-gray-900 dark:text-white">2</div>
              <div className="text-gray-600 dark:text-gray-400">Learning Paths</div>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-emerald-100 dark:from-green-900/20 dark:to-emerald-900/20 rounded-2xl p-6 text-center border border-green-100 dark:border-green-800">
              <div className="text-3xl mb-2">📖</div>
              <div className="text-2xl font-bold text-gray-900 dark:text-white">1</div>
              <div className="text-gray-600 dark:text-gray-400">Daily Reading</div>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-pink-100 dark:from-purple-900/20 dark:to-pink-900/20 rounded-2xl p-6 text-center border border-purple-100 dark:border-purple-800">
              <div className="text-3xl mb-2">🔖</div>
              <div className="text-2xl font-bold text-gray-900 dark:text-white">5</div>
              <div className="text-gray-600 dark:text-gray-400">Bookmarks</div>
            </div>
          </div>

          {/* Learning Section */}
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Things I Learned */}
            <div className="space-y-6">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold">📚</span>
                </div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Things I Learned</h2>
              </div>
              
              <div className="space-y-4">
                <a href="https://thesundayorg.notion.site/thesundayorg/Data-Science-in-a-Nutshell-51994c522d6c4100983ef6fa466d58e0" 
                   target="_blank" 
                   rel="noopener noreferrer"
                   className="block group">
                  <div className="bg-white dark:bg-gray-800 rounded-xl p-5 border border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-600 transition-all duration-300 hover:shadow-lg">
                    <div className="flex items-start space-x-3">
                      <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                        <span className="text-blue-600 dark:text-blue-400">📊</span>
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                          Data Science in a nutshell
                        </h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                          Comprehensive overview of data science concepts
                        </p>
                        <span className="inline-block mt-2 text-xs text-blue-600 dark:text-blue-400 font-medium">
                          notion.site
                        </span>
                      </div>
                    </div>
                  </div>
                </a>

                <a href="https://www.coursera.org/learn/data-science-for-business-innovation/home/welcome" 
                   target="_blank" 
                   rel="noopener noreferrer"
                   className="block group">
                  <div className="bg-white dark:bg-gray-800 rounded-xl p-5 border border-gray-200 dark:border-gray-700 hover:border-green-300 dark:hover:border-green-600 transition-all duration-300 hover:shadow-lg">
                    <div className="flex items-start space-x-3">
                      <div className="w-10 h-10 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                        <span className="text-green-600 dark:text-green-400">💼</span>
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 dark:text-white group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors">
                          Data Science for Business Innovation
                        </h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                          Coursera specialization on business applications
                        </p>
                        <span className="inline-block mt-2 text-xs text-green-600 dark:text-green-400 font-medium">
                          coursera.org
                        </span>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            </div>

            {/* Reading List */}
            <div className="space-y-6">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-8 h-8 bg-green-500 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold">📖</span>
                </div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Reading List</h2>
              </div>
              
              <a href="https://today.bnomial.com/" 
                 target="_blank" 
                 rel="noopener noreferrer"
                 className="block group">
                <div className="bg-white dark:bg-gray-800 rounded-xl p-5 border border-gray-200 dark:border-gray-700 hover:border-purple-300 dark:hover:border-purple-600 transition-all duration-300 hover:shadow-lg">
                  <div className="flex items-start space-x-3">
                    <div className="w-10 h-10 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-purple-600 dark:text-purple-400">🤖</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                        One Machine Learning Question Everyday
                      </h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                        Daily ML challenges to strengthen fundamentals
                      </p>
                      <span className="inline-block mt-2 text-xs text-purple-600 dark:text-purple-400 font-medium">
                        bnomial.com
                      </span>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </div>

          {/* Bookmarks Section */}
          <div className="mt-16">
            <div className="flex items-center space-x-3 mb-8">
              <div className="w-8 h-8 bg-yellow-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">🔖</span>
              </div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Bookmarks</h2>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: "Trending color palettes",
                  url: "https://coolors.co/palettes/trending",
                  description: "Popular color combinations for design",
                  icon: "🎨",
                  category: "Design"
                },
                {
                  title: "Creative Writing Ideas",
                  url: "https://www.descriptionari.com/",
                  description: "Inspiration for creative writing",
                  icon: "✍️",
                  category: "Writing"
                },
                {
                  title: "Distortion Hover Effect",
                  url: "https://tympanus.net/Development/DistortionHoverEffect/",
                  description: "Advanced CSS hover animations",
                  icon: "⚡",
                  category: "Development"
                },
                {
                  title: "Mockup Generator",
                  url: "https://techsini.com/multi-mockup/index.php",
                  description: "Create device mockups easily",
                  icon: "📱",
                  category: "Design"
                },
                {
                  title: "Create blog covers",
                  url: "https://coverview.vercel.app/",
                  description: "Generate beautiful blog cover images",
                  icon: "🖼️",
                  category: "Design"
                }
              ].map((bookmark, index) => (
                <a key={index}
                   href={bookmark.url}
                   target="_blank"
                   rel="noopener noreferrer"
                   className="block group">
                  <div className="bg-white dark:bg-gray-800 rounded-xl p-5 border border-gray-200 dark:border-gray-700 hover:border-yellow-300 dark:hover:border-yellow-600 transition-all duration-300 hover:shadow-lg h-full">
                    <div className="flex items-start space-x-3">
                      <div className="text-2xl flex-shrink-0">{bookmark.icon}</div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-gray-900 dark:text-white group-hover:text-yellow-600 dark:group-hover:text-yellow-400 transition-colors text-sm">
                          {bookmark.title}
                        </h3>
                        <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">
                          {bookmark.description}
                        </p>
                        <span className="inline-block mt-2 px-2 py-1 bg-gray-100 dark:bg-gray-700 text-xs text-gray-600 dark:text-gray-400 rounded">
                          {bookmark.category}
                        </span>
                      </div>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Progress Section */}
          <div className="mt-16 bg-gradient-to-r from-gray-50 to-blue-50 dark:from-gray-800 dark:to-blue-900/20 rounded-2xl p-8 border border-gray-200 dark:border-gray-700">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-8 h-8 bg-indigo-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">📈</span>
              </div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Learning Progress</h2>
            </div>
            
            <div className="space-y-4">
              <div>
                <div className="flex justify-between text-sm text-gray-600 dark:text-gray-400 mb-2">
                  <span>Data Science Fundamentals</span>
                  <span>65%</span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                  <div className="bg-blue-600 h-2 rounded-full" style={{width: '65%'}}></div>
                </div>
              </div>
              
              <div>
                <div className="flex justify-between text-sm text-gray-600 dark:text-gray-400 mb-2">
                  <span>Machine Learning</span>
                  <span>40%</span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                  <div className="bg-green-600 h-2 rounded-full" style={{width: '40%'}}></div>
                </div>
              </div>
              
              <div>
                <div className="flex justify-between text-sm text-gray-600 dark:text-gray-400 mb-2">
                  <span>Web Development</span>
                  <span>80%</span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                  <div className="bg-purple-600 h-2 rounded-full" style={{width: '80%'}}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    )
  }

  return (
    <>
      <PageSEO
        title={`Activity - ${siteMetadata.author}`}
        description="My learning journey, resources and bookmarks"
      />
      <MDXLayoutRenderer
        layout={frontMatter.layout || DEFAULT_LAYOUT}
        mdxSource={mdxSource}
        frontMatter={frontMatter}
      />
    </>
  )
} 
import { PageSEO } from '@/components/SEO'
import siteMetadata from '@/data/siteMetadata'
import projectsData from '@/data/projectsData'
import Image from 'next/image'
import Link from 'next/link'

export default function About() {
  const featuredProjects = projectsData.slice(0, 6)
  const allProjects = projectsData

  const stats = [
    { number: projectsData.length, label: 'Projects Built' },
    { number: '10M+', label: 'EaglerCraft Users' },
    { number: '5+', label: 'Years Coding' },
    { number: '∞', label: 'Coffees Consumed' }
  ]

  const skills = [
    { name: 'JavaScript/TypeScript', level: 90 },
    { name: 'Java/Kotlin', level: 85 },
    { name: 'Python', level: 88 },
    { name: 'Go', level: 75 },
    { name: 'React/Next.js', level: 92 },
    { name: 'TeaVM', level: 95 },
    { name: 'WebAssembly', level: 80 },
    { name: 'PHP/Django', level: 70 },
    { name: 'SQL/Databases', level: 85 },
    { name: 'Linux/DevOps', level: 90 }
  ]

  return (
    <>
      <PageSEO
        title={`About - ${siteMetadata.author}`}
        description="Full-stack developer & creator of EaglerCraft. Building the future of web-based gaming and applications."
      />
      
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="text-center mb-20">
          <h1 className="text-6xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-6">
            Creator & Developer
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
            I build things that live on the web. From massive multiplayer games like{' '}
            <span className="font-semibold text-blue-600 dark:text-blue-400">EaglerCraft</span> to 
            innovative web applications. I love pushing the boundaries of what's possible in the browser.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                {stat.number}
              </div>
              <div className="text-gray-600 dark:text-gray-400 text-sm">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Skills Section */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
            Technologies I Work With
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {skills.map((skill, index) => (
              <div key={index} className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="font-medium text-gray-900 dark:text-white">{skill.name}</span>
                  <span className="text-gray-600 dark:text-gray-400">{skill.level}%</span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                  <div 
                    className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full transition-all duration-1000"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Featured Projects */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-4">
            Featured Projects
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-center mb-12 max-w-2xl mx-auto">
            Here are some of the projects I'm most proud of. From game development to web applications.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project) => (
              <div 
                key={project.title}
                className="bg-white dark:bg-gray-800 rounded-2xl p-6 border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all duration-300 group"
              >
                {project.imgSrc && (
                  <div className="mb-4 rounded-lg overflow-hidden">
                    <img
                      src={project.imgSrc}
                      alt={project.title}
                      className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                )}
                
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {[project.tech1, project.tech2, project.tech3].map((tech, index) => (
                    <span 
                      key={index}
                      className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-xs text-gray-600 dark:text-gray-400 rounded-md"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex space-x-4">
                  {project.href && (
                    <a
                      href={project.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 dark:text-blue-400 hover:underline text-sm font-medium"
                    >
                      Live Demo
                    </a>
                  )}
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 dark:text-gray-400 hover:underline text-sm font-medium"
                    >
                      GitHub
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* EaglerCraft Spotlight */}
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-3xl p-8 mb-20 border border-blue-200 dark:border-blue-800">
          <div className="text-center mb-8">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              🎮 EaglerCraft Legacy
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              The web-based Minecraft client that brought block-building to millions of players worldwide.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Project Evolution</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-4 p-4 bg-white dark:bg-gray-800 rounded-xl">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <div>
                    <div className="font-semibold text-gray-900 dark:text-white">EaglerCraft v1</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">The original breakthrough</div>
                  </div>
                </div>
                <div className="flex items-center space-x-4 p-4 bg-white dark:bg-gray-800 rounded-xl">
                  <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                  <div>
                    <div className="font-semibold text-gray-900 dark:text-white">EaglerCraft Recode</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">Complete rewrite with modern tech</div>
                  </div>
                </div>
                <div className="flex items-center space-x-4 p-4 bg-white dark:bg-gray-800 rounded-xl">
                  <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                  <div>
                    <div className="font-semibold text-gray-900 dark:text-white">EagTek API</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">Boot manager & infrastructure</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="text-center">
              <div className="text-6xl mb-4">👑</div>
              <p className="text-gray-600 dark:text-gray-400 text-lg">
                Working with amazing collaborators like <span className="font-semibold">ayuami2000</span> and{' '}
                <span className="font-semibold">lax1dude</span> to push web gaming forward.
              </p>
            </div>
          </div>
        </div>

        {/* All Projects Grid */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
            All Projects ({allProjects.length})
          </h2>
          <div className="grid gap-6">
            {allProjects.map((project, index) => (
              <div 
                key={project.title}
                className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-600 transition-all duration-300"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm mb-3">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {[project.tech1, project.tech2, project.tech3].map((tech, techIndex) => (
                        <span 
                          key={techIndex}
                          className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-xs text-gray-600 dark:text-gray-400 rounded"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="flex space-x-3 mt-4 md:mt-0">
                    {project.href && (
                      <a
                        href={project.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 bg-blue-600 text-white text-sm rounded-lg hover:bg-blue-700 transition-colors"
                      >
                        Visit
                      </a>
                    )}
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 text-sm rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                      >
                        Code
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Philosophy */}
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
            Development Philosophy
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed mb-8">
            I believe in building software that's not just functional, but delightful to use. 
            Whether it's a game that brings joy to millions or a tool that solves real problems, 
            I focus on creating experiences that matter.
          </p>
          <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
            Currently exploring the frontiers of <span className="font-semibold text-blue-600 dark:text-blue-400">WebAssembly</span>,{' '}
            <span className="font-semibold text-purple-600 dark:text-purple-400">real-time web applications</span>, and{' '}
            <span className="font-semibold text-green-600 dark:text-green-400">browser-based gaming</span>.
          </p>
        </div>
      </div>
    </>
  )
}
// pages/work.jsx
import { PageSEO } from '@/components/SEO'
import siteMetadata from '@/data/siteMetadata'
import projectsData from '@/data/projectsData'
import Link from 'next/link'

export default function WorkPortfolio() {
  // Фильтруем коммерчески значимые проекты
  const commercialProjects = projectsData.filter(project => 
    project.title.includes('EaglerCraft') || 
    project.href || 
    project.github
  )

  const workExperience = [
    {
      role: "Lead Full-Stack Developer",
      company: "EaglerCraft Project",
      period: "2020 - Present",
      description: "Leading development of web-based Minecraft client with 10M+ users. Architected scalable solutions and managed cross-functional team.",
      achievements: [
        "Scaled to handle millions of concurrent users",
        "Reduced load times by 60% through optimization",
        "Implemented real-time multiplayer functionality"
      ],
      technologies: ["TeaVM", "WebAssembly", "JavaScript", "Java"]
    },
    {
      role: "Full-Stack Developer",
      company: "Freelance & Contract Work",
      period: "2019 - Present",
      description: "Delivered full-stack solutions for various clients including web applications, APIs, and mobile apps.",
      achievements: [
        "Built 10+ production applications",
        "Maintained 100% client satisfaction rate",
        "Reduced development time by 40% through reusable components"
      ],
      technologies: ["React", "Node.js", "Python", "Kotlin", "Go"]
    },
    {
      role: "Open Source Contributor",
      company: "Various Projects",
      period: "2018 - Present",
      description: "Active contributor to open source projects with focus on web technologies and developer tools.",
      achievements: [
        "1000+ GitHub contributions",
        "Maintained popular open source libraries",
        "Mentored junior developers"
      ],
      technologies: ["Git", "Docker", "CI/CD", "Linux"]
    }
  ]

  const skills = {
    "Frontend": ["React", "Next.js", "TypeScript", "Tailwind CSS", "WebAssembly"],
    "Backend": ["Node.js", "Python", "Go", "Java", "PHP"],
    "Databases": ["SQL", "MongoDB", "PostgreSQL", "Redis"],
    "DevOps": ["Docker", "AWS", "GCP", "Linux", "Nginx"],
    "Tools": ["Git", "Webpack", "Vite", "Jest", "Figma"]
  }

  const metrics = [
    { value: "10M+", label: "Users Reached" },
    { value: "50+", label: "Projects Completed" },
    { value: "4+", label: "Years Experience" },
    { value: "99.9%", label: "Uptime Maintained" }
  ]

  return (
    <>
      <PageSEO
        title={`Work Portfolio - ${siteMetadata.author}`}
        description="Professional portfolio showcasing commercial projects, technical expertise, and work experience in full-stack development."
      />
      
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
        {/* Header */}
        <div className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
          <div className="max-w-6xl mx-auto px-4 py-8">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between">
              <div>
                <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
                  Work Portfolio
                </h1>
                <p className="text-lg text-gray-600 dark:text-gray-400 mt-2">
                  Full-Stack Developer & Technical Lead
                </p>
              </div>
              <div className="mt-4 md:mt-0">
                <a
                  href="/contact"
                  className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium"
                >
                  Get In Touch
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Hero Section */}
        <div className="max-w-6xl mx-auto px-4 py-16">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Building Scalable Solutions
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
              I specialize in creating high-performance web applications that serve millions of users. 
              From game development to enterprise software, I deliver robust, maintainable code.
            </p>
          </div>

          {/* Metrics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
            {metrics.map((metric, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                  {metric.value}
                </div>
                <div className="text-gray-600 dark:text-gray-400 font-medium">
                  {metric.label}
                </div>
              </div>
            ))}
          </div>

          {/* Featured Projects */}
          <section className="mb-20">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-12 text-center">
              Featured Projects
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {commercialProjects.slice(0, 6).map((project) => (
                <div 
                  key={project.title}
                  className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-all duration-300 group"
                >
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {[project.tech1, project.tech2, project.tech3].map((tech, index) => (
                      <span 
                        key={index}
                        className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs rounded-md"
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
                        Source Code
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Work Experience */}
          <section className="mb-20">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-12 text-center">
              Work Experience
            </h2>
            <div className="space-y-8">
              {workExperience.map((job, index) => (
                <div 
                  key={index}
                  className="bg-white dark:bg-gray-800 rounded-xl p-8 border border-gray-200 dark:border-gray-700"
                >
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                        {job.role}
                      </h3>
                      <p className="text-lg text-blue-600 dark:text-blue-400 font-medium">
                        {job.company}
                      </p>
                    </div>
                    <div className="mt-2 md:mt-0">
                      <span className="bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 px-3 py-1 rounded-full text-sm">
                        {job.period}
                      </span>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 dark:text-gray-400 mb-6">
                    {job.description}
                  </p>

                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Key Achievements:</h4>
                    <ul className="space-y-2">
                      {job.achievements.map((achievement, idx) => (
                        <li key={idx} className="flex items-start space-x-2 text-gray-600 dark:text-gray-400">
                          <span className="text-green-500 mt-1">✓</span>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Technologies:</h4>
                    <div className="flex flex-wrap gap-2">
                      {job.technologies.map((tech, idx) => (
                        <span 
                          key={idx}
                          className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-sm rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Skills Grid */}
          <section className="mb-20">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-12 text-center">
              Technical Skills
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {Object.entries(skills).map(([category, techs]) => (
                <div 
                  key={category}
                  className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700"
                >
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">
                    {category}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {techs.map((tech, index) => (
                      <span 
                        key={index}
                        className="px-3 py-1 bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-sm rounded-md"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* EaglerCraft Case Study */}
          <section className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-8 text-white mb-20">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6">
                Case Study: EaglerCraft
              </h2>
              <p className="text-xl mb-8 opacity-90">
                Successfully scaled a web-based Minecraft client to serve 10M+ users worldwide with sub-second load times and 99.9% uptime.
              </p>
              <div className="grid md:grid-cols-3 gap-8 mb-8">
                <div>
                  <div className="text-2xl font-bold mb-2">10M+</div>
                  <div className="opacity-90">Active Users</div>
                </div>
                <div>
                  <div className="text-2xl font-bold mb-2">99.9%</div>
                  <div className="opacity-90">Uptime</div>
                </div>
                <div>
                  <div className="text-2xl font-bold mb-2">&lt;1s</div>
                  <div className="opacity-90">Load Time</div>
                </div>
              </div>
              <a
                href="https://eaglercraft.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-blue-600 px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors font-medium"
              >
                View Project
              </a>
            </div>
          </section>

          {/* CTA Section */}
          <section className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
              Let's Build Something Amazing
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
              I'm available for full-time positions, contract work, and consulting engagements. 
              Let's discuss how I can help bring your project to life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium"
              >
                Contact Me
              </a>
              <a
                href="https://github.com/kiwinatra"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 px-8 py-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors font-medium"
              >
                View GitHub
              </a>
            </div>
          </section>
        </div>
      </div>
    </>
  )
}
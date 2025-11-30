// pages/projects.js
import siteMetadata from '@/data/siteMetadata'
import projectsData from '@/data/projectsData'

export default function Projects() {
  return (
    <>
      <title>{`Projects - ${siteMetadata.author}`}</title>
      <meta name="description" content="A list of projects I have built" />
      
      <div className="mx-auto max-w-6xl divide-y divide-gray-400">
        <div className="space-y-2 pt-6 pb-8 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100">
            Projects
          </h1>
          <p className="text-md leading-7 text-gray-500 dark:text-gray-400">
            A list of projects I have been working on or built
          </p>
        </div>
        <div className="container py-12">
          <div className="-m-4 flex flex-wrap">
            {projectsData.map((d) => (
              <div key={d.title} className="p-4 md:w-1/2" style={{ maxWidth: '544px' }}>
                <div className="h-full overflow-hidden rounded-md border-2 border-gray-200 p-6">
                  <h2 className="mb-3 text-2xl font-bold">{d.title}</h2>
                  <p className="mb-3 text-gray-500">{d.description}</p>
                  <div className="text-sm text-gray-400">
                    {d.tech1} • {d.tech2} • {d.tech3}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
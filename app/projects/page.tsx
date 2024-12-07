import { soloProjects, collaborationProjects } from '@/data/projectsData'
import Card from '@/components/Card'
import { genPageMetadata } from 'app/seo'

export const metadata = genPageMetadata({ title: 'Projects' })

export default function Projects() {
  return (
    <>
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pb-8 pt-6 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            Projects
          </h1>
          <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
            Works of my own or collaborations with others
          </p>
        </div>
        <div className="container py-12 border-none">
          <h2 className="mb-4 text-3xl font-bold leading-8 tracking-tight text-gray-900 dark:text-gray-100 text-center">
            Solo
          </h2>
          <div className="-m-4 pb-12 pt-8 flex flex-wrap">
            {soloProjects.map((d) => (
              <Card
                key={d.title}
                title={d.title}
                description={d.description}
                imgSrc={d.imgSrc}
                href={d.href}
              />
            ))}
          </div>
          <h2 className="my-4 text-3xl font-bold leading-8 tracking-tight text-gray-900 dark:text-gray-100 text-center">
            Collaboration
          </h2>
          <div className="-m-4 pt-8 flex flex-wrap">
            {collaborationProjects.map((d) => (
              <Card
                key={d.title}
                title={d.title}
                description={d.description}
                imgSrc={d.imgSrc}
                href={d.href}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

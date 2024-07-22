import Image from '@/components/Image'
import Link from '@/components/Link'
import projectsData, { Project } from '@/data/projectsData'
import { clsx } from 'clsx'

function FeaturedProject({ project, reverse }: { project: Project; reverse: boolean }) {
  const containerClassName = clsx(
    'flex',
    'flex-col',
    'gap-8',
    reverse ? 'md:flex-row-reverse' : 'md:flex-row'
  )
  return (
    <div className={containerClassName}>
      <div className="flex md:flex-1">
        <Image
          src={project.imgSrc}
          alt={project.title}
          width={480}
          height={480}
          className="rounded-lg"
        />
      </div>
      <div className="flex flex-col gap-4 md:flex-1">
        <h2 className="text-2xl font-bold">{project.title}</h2>
        <p className="text-lg">{project.description}</p>
        {project.href && (
          <Link
            href={project.href}
            className="text-base font-medium leading-6 text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
            aria-label={`Link to ${project.title}`}
          >
            了解更多 &rarr;
          </Link>
        )}
      </div>
    </div>
  )
}
export default function FeaturedProjects() {
  if (!projectsData.length) return null

  return (
    <section className="mt-16 flex flex-col gap-8">
      <div className="space-y-2 pb-8 pt-6 md:space-y-5">
        <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
          项目案例
        </h1>
        <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
          我参与过的一些项目，这些项目涵盖了不同的领域，包括网站开发、移动应用开发、数据分析等。
        </p>
      </div>
      <div className="flex flex-col gap-16 md:gap-20">
        {projectsData.map((project, index) => (
          <FeaturedProject key={project.title} project={project} reverse={index % 2 === 1} />
        ))}
      </div>
    </section>
  )
}

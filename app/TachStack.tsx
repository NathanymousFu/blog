import Image from '@/components/Image'

function SkillIcon({ skill }) {
  const width = 40
  const height = 40
  return (
    <Image
      className="h-12 w-12"
      src={`/static/skill-icons/${skill}.svg`}
      alt={`${skill}`}
      width={width}
      height={height}
    />
  )
}

export default function TechStack() {
  return (
    <>
      <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">核心技术栈</p>
      <div className="flex flex-wrap gap-1">
        <SkillIcon skill={'HTML'} />
        <SkillIcon skill={'CSS'} />
        <SkillIcon skill={'JavaScript'} />
        <SkillIcon skill={'TypeScript'} />
        <SkillIcon skill={'NodeJS-Dark'} />
        <SkillIcon skill={'React-Dark'} />
        <SkillIcon skill={'NestJS-Dark'} />
        <SkillIcon skill={'MySQL-Dark'} />
        <SkillIcon skill={'RabbitMQ-Dark'} />
        <SkillIcon skill={'Redis-Dark'} />
        <SkillIcon skill={'Docker'} />
      </div>
    </>
  )
}

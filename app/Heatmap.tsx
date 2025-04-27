import HeatmapChart from './HeatmapChart'
import TechStack from './TachStack'

const TOKEN = process.env.GITHUB_TOKEN
const query = `
query($userName:String!) {
  user(login: $userName){
    contributionsCollection {
      contributionCalendar {
        totalContributions
        weeks {
          contributionDays {
            contributionCount
            date
          }
        }
      }
    }
  }
}
`

async function retrieveContributionData(userName: string) {
  const variables = `
  {
    "userName": "${userName}"
  }
`
  const body = {
    query,
    variables,
  }
  const res = await fetch('https://api.github.com/graphql', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${TOKEN}`,
    },
    body: JSON.stringify(body),
  })
  if (res.status !== 200) {
    throw new Error(`Failed to fetch contribution data: ${res.status}`)
  }

  return res.json()
}

export default async function Heatmap() {
  const {
    data: {
      user: {
        contributionsCollection: {
          contributionCalendar: { totalContributions, weeks },
        },
      },
    },
  } = await retrieveContributionData('NathanymousFu')

  const counts = weeks
    .map((week) => week.contributionDays.filter((day) => day.contributionCount > 0))
    .flat()
    .map((day) => [day.date, day.contributionCount])
    .reduce((acc, [key, value]) => ({ ...acc, [key]: value }), {})

  const until = weeks.at(-1)?.contributionDays.at(-1)?.date

  return (
    <section className="flex flex-col gap-4">
      <div className="space-y-2 pb-8 pt-6 md:space-y-5">
        <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
          <span className="block">关于我</span>
        </h1>
        <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">敲敲敲...</p>
      </div>
      <HeatmapChart counts={counts} until={until} />
      <TechStack />
    </section>
  )
}

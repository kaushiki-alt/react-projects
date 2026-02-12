import type { Repository } from "@/types"
import { mostStarredRepos } from "@/utils"
import { ChartContainer, ChartTooltip, ChartTooltipContent, type ChartConfig } from "../ui/chart"
import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts"

const StarredRepos = ({ repositories }: { repositories: Repository[] }) => {
  const starredRepos = mostStarredRepos(repositories)

  const chartConfig = {
    repos: {
      label: 'Repositories',
      color: '#e11c47'
    },
  } satisfies ChartConfig
  return (
    <div>
      <h2 className='text-2xl font-semibold text-center mb-4'>Popular Repos</h2>
      <ChartContainer config={chartConfig} className='h-100 w-full'>
        <BarChart accessibilityLayer data={starredRepos}>
          <CartesianGrid vertical={false} />
          <XAxis dataKey='repo'
            tickLine={false}
            tickMargin={10}
            tickFormatter={(value) => value.slice(0, 10)}
          />
          <YAxis dataKey="stars" />
          <ChartTooltip content={<ChartTooltipContent />} />
          <Bar dataKey='stars' fill="var(--color-repos)" radius={4} />
        </BarChart>
      </ChartContainer>
    </div>
  )
}

export default StarredRepos

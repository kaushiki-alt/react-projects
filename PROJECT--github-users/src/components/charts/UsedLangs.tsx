import type { Repository } from "@/types"
import { mostUsedLang } from "@/utils"
import { ChartContainer, ChartTooltip, ChartTooltipContent, type ChartConfig } from "../ui/chart"
import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts"

const UsedLangs = ({ repositories }: { repositories: Repository[] }) => {
  const popularLangs = mostUsedLang(repositories)

  const chartConfig = {
    language: {
      label: 'Language',
      color: '#2563eb',
    }
  } satisfies ChartConfig;
  return (
    <div>
      <h2 className='text-2xl font-semibold text-center mb-4'> Popular Languages </h2>
      <ChartContainer config={chartConfig} className="h-100 w-full" >
        <BarChart accessibilityLayer data={popularLangs}>
          <CartesianGrid vertical={false} />
          <XAxis
            dataKey='language'
            tickLine={false}
            tickMargin={10} />
          <YAxis dataKey='count' />
          <ChartTooltip content={<ChartTooltipContent />} />
          <Bar dataKey='count' fill='var(--color-language)' radius={4} />

        </BarChart>
      </ChartContainer>
    </div>
  )
}

export default UsedLangs

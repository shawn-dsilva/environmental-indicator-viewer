import type { NextRequest } from 'next/server'
import { faker } from '@faker-js/faker';

export async function GET(_req: NextRequest, ctx: RouteContext<'/api/data/[start_year]/[end_year]'>) {
  const { start_year, end_year } = await ctx.params

  const chartData = [];
    const startYear = start_year;
    const endYear = end_year;
  for (let year = startYear; year < endYear; year++) {
    for (let month = 0; month < 12; month++) { // 0 for January, 11 for December
      const date = new Date(year, month, 1); // First day of the month
      const formattedMonth = date.toString();

      chartData.push({
        year: year,
        month: formattedMonth,
        value: faker.number.int({ min: 100, max: 1000 }) // Example value
      });
    }
  }

  console.log(chartData)

  return Response.json({ data:chartData})
}
import type { NextRequest } from "next/server";
import { faker } from "@faker-js/faker";
import dayjs from "dayjs";

const createDummyData = ({ startYear, endYear }) => {
  const chartData = [];

  for (let year = startYear; year < endYear; year++) {
    for (let month = 0; month < 12; month++) {
      // 0 for January, 11 for December
      const date = dayjs(new Date(year, month, 1)); // First day of the month

      const formattedMonth = date.format("YYYY-MM-DD");

      chartData.push({
        x: formattedMonth,
        y: faker.number.int({ min: 100, max: 1000 }), // Example value
      });
    }
  }

  return chartData;
};

export async function GET(
  _req: NextRequest,
  ctx: RouteContext<"/api/data/[start_year]/[end_year]">
) {
  const { start_year, end_year } = await ctx.params;

  const evapotranspirationData = createDummyData({
    startYear: start_year,
    endYear: end_year,
  });

  const precipitationData = createDummyData({
    startYear: start_year,
    endYear: end_year,
  });

  return Response.json({
    evapotranspiration: evapotranspirationData,
    precipitation: precipitationData,
  });
}

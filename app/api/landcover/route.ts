import type { NextRequest } from "next/server";
import { faker } from "@faker-js/faker";
import dayjs from "dayjs";
import subdivlist from "@/app/assets/Kenya_Subdiv_List.json";

export async function GET(
  _req: NextRequest,
) {
    
    const subdivs = subdivlist["Kenya"].map(subdiv => subdiv.name);

    const data = subdivs.map(name => ({"county":name, "shrubland": faker.number.int({ min: 10000, max: 100000 }), "grassland": faker.number.int({ min: 10000, max: 100000 }),"cropland": faker.number.int({ min: 1000, max: 5000 })}))

  return Response.json(data);
}

import type { NextRequest } from 'next/server'
import geojsonSubdiv from "@/app/assets/Kenya_Rename_Subdiv.json";

export async function GET(_req: NextRequest, ctx: RouteContext<'/api/geojson/[name]'>) {
  const { name } = await ctx.params
    const selectedSubdiv = geojsonSubdiv.features.filter(feature => feature.properties.shapeName === name)
    
  return Response.json({ ...geojsonSubdiv, features: selectedSubdiv })
}
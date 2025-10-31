import {
    Card,
    CardAction,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { LucideArrowBigRight, LucideArrowRight } from "lucide-react"
import Link from "next/link"
const InfoCard = ({ data }) => {
    return (
        <Card className="w-full md:w-1/4! rounded-none grid grid-rows-8 gap-2">
            <CardHeader className="row-span-4">
                <CardTitle className="text-2xl font-medium row-span-1!">{data?.title}</CardTitle>
                <hr className="row-span-1!"></hr>
                <CardDescription className="text-lg text-gray-400 row-span-1!">{data?.desc}</CardDescription>
            </CardHeader>
            <CardContent className="row-span-2">
                <p className="text-4xl  text-blue-900">{data?.value}</p>
            </CardContent>
            <CardFooter className="row-span-1">
                <Link className="text-2xl pb-2 text-blue-600 hover:text-blue-900 border-b-2 border-transparent hover:border-blue-900" href={"/et-analysis"}>
                    <p>
                        View Details <LucideArrowRight className="inline-block" />
                    </p>
                </Link>
            </CardFooter>
        </Card>
    )
}

export default InfoCard
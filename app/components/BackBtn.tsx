"use client"
import { useRouter } from "next/navigation";
import { ChevronLeft } from "lucide-react";
import { Button } from "@/components/ui/button";


const BackBtn = () => {
    const router = useRouter();
    return (
        <div className="h-fit flex mr-auto">
            <Button variant="ghost" className="py-3 rounded-full h-10" onClick={() => router.back()}><ChevronLeft className="size-7.5!" /></Button>
        </div>
    )
}

export default BackBtn
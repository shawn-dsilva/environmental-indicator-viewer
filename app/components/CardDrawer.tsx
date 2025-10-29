import { Button } from "@/components/ui/button"
import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
} from "@/components/ui/drawer"
import InfoCard from "./InfoCard"

const CardDrawer = ({ className }) => {
    return (
        <div className={className}>

            <Drawer>
                <DrawerTrigger asChild>
                    <Button variant="outline" className="ml-3  p-3 bg-gray-600/40">
                        Open Drawer
                    </Button>
                </DrawerTrigger>
                <DrawerContent className="bg-gray-600/40">
                    <DrawerHeader>
                        <DrawerTitle className="text-white">View Overall Stats</DrawerTitle>
                        <DrawerDescription className="text-white">Switch between Total and Cropland Stats using the buttons below</DrawerDescription>
                    </DrawerHeader>
                    <div className=" w-full flex flex-row gap-4 mx-auto">
                        {[...Array(5)].map((item, index) => <InfoCard key={index} item={item} />)}

                    </div>
                    <DrawerFooter>
                        <DrawerClose>
                            <Button variant="outline">Cancel</Button>
                        </DrawerClose>
                    </DrawerFooter>
                </DrawerContent>
            </Drawer>
        </div>

    )
}

export default CardDrawer
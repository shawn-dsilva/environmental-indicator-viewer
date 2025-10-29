import MainMap from "./components/MainMap";
import MyCardDrawer from "./components/MyCardDrawer";
import Nav from "./components/Nav";

export default function Home() {
    return (
        <div className="">
            <main className="flex flex-row">
                <Nav />
                <div className="relative h-svh w-full">
                    <MainMap />
                    {/* <CardDrawer className={"absolute bottom-0 left-0"} /> */}
                    <MyCardDrawer />
                </div>

            </main>
        </div>
    );
}

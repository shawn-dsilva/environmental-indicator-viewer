import MainMap from "./components/MainMap";
import Nav from "./components/Nav";

export default function Home() {
    return (
        <div className="">
            <main className="flex flex-row">
                <Nav />
                <MainMap />
            </main>
        </div>
    );
}

import MainMap from "./components/MainMap";

export default function Home() {
    return (
        <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
            <main className="flex min-h-screen w-full max-w-3xl ">
                <MainMap />
            </main>
        </div>
    );
}

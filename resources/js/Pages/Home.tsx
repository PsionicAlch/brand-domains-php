import AppLayout from "@/Layouts/AppLayout";

export default function Home() {
    return (
        <AppLayout>
            <section
                id="hero"
                className="container mx-auto px-10 mt-20 flex flex-col items-center justify-center text-center gap-10"
            >
                <h1 className="text-7xl font-extrabold max-w-[70vw]">
                    Find the perfect domain name for your next brand
                </h1>
                <h2 className="text-5xl text-gray-500 max-w-[60vw]">
                    Use the power of cutting edge A.I. to help surpass your creative block and gain some new
                    inspiration
                </h2>
            </section>
        </AppLayout>
    );
}

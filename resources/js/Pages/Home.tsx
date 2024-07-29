import AppLayout from "@/Layouts/AppLayout";
import HeroWrapper from "@/Components/HeroWrapper";

export default function Home() {
    return (
        <AppLayout>
            <HeroWrapper>
                <div className="text-center">
                    <h1 className="uppercase text-xl">Find the perfect domain name for your next brand</h1>
                    <h2></h2>
                </div>
            </HeroWrapper>
        </AppLayout>
    );
}

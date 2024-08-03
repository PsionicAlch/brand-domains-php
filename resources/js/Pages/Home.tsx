import AppLayout from "@/Layouts/AppLayout";
import BenefitsCard from "@/Components/BenefitsCard";

export default function Home() {
    return (
        <AppLayout>
            <section
                id="hero"
                className="container mx-auto px-10 mt-10 flex flex-col items-center justify-center text-center md:mt-20"
            >
                <h1 className="text-3xl font-extrabold mb-5 capitalize md:text-7xl">
                    Find the perfect domain name for your next brand
                </h1>

                <h2 className="text-base text-gray-500 mb-10 md:text-2xl">
                    Use the power of cutting edge A.I. to help surpass your creative block and gain some new
                    inspiration
                </h2>

                <a href={route('generate.index')} className="capitalize px-4 py-2 bg-black hover:bg-neutral-900 text-white rounded-xl mb-8 md:mb-16">
                    Try it now!
                </a>

                <div className="bg-neutral-200 p-3 rounded-2xl shadow-lg md:max-w-[60vw]">
                    <img src="/images/brand_domains_example.avif" alt="Picture of Brand Domains in action" className="rounded-xl"/>
                </div>
            </section>

            <section className="container mx-auto mt-20 grid grid-cols-1 gap-5 text-center px-10 md:grid-cols-3">
                <BenefitsCard title={"Completely Free"}>
                    Brand Domains is completely free to use with zero hidden costs. No sign-up required.
                </BenefitsCard>

                <BenefitsCard title={"Latest A.I. Tech"}>
                    Brand Domains uses ChatGPT's latest A.I. model so you can be sure that you're getting the best results.
                </BenefitsCard>

                <BenefitsCard title={"Domain Availability Check"}>
                    Quickly and easily see which domains are available for purchase with the click of a button.
                </BenefitsCard>
            </section>

            <section className="container mx-auto mt-20 text-center">
                <h2 className="text-base font-bold mb-5 md:mb-10 md:text-3xl">As simple as it gets</h2>
                <div className="px-10 mx-auto space-y-2 md:max-w-[50vw]">
                    <p className="hyphens-auto text-justify text-gray-500 text-xs md:text-base">
                        Everything happens on the <a href={route('generate.index')} className="hover:underline text-neutral-950"><b>Generate</b></a> page.
                    </p>
                    <p className="hyphens-auto text-justify text-gray-500 text-xs md:text-base"><b className="text-neutral-950">Step 1:</b> Answer three short questions.</p>
                    <p className="hyphens-auto text-justify text-gray-500 text-xs md:text-base"><b className="text-neutral-950">Step 2:</b> Check the domain suggestions that pop up. If you like them, click Check Availability to see which ones are available. If you don't like them, click Generate again to get a new list.</p>
                    <p className="hyphens-auto text-justify text-gray-500 text-xs md:text-base"><b className="text-neutral-950">Step 3:</b> [Optional] Purchase your favorite domain.</p>
                    <p className="hyphens-auto text-justify text-gray-500 text-xs md:text-base">That's it!</p>
                </div>
            </section>

            <section className="container mx-auto my-20 text-center">
                <h2 className="text-base font-bold mb-5 md:mb-10 md:text-3xl">Contact Me</h2>
                <p className="text-gray-500 px-10 text-xs md:text-base">
                    For any bugs, questions or feature requests, please message me on{" "}
                    <a href="https://x.com/psionicalch" target="_blank" className="hover:underline text-neutral-950">𝕏</a>
                </p>
            </section>
        </AppLayout>
    );
}

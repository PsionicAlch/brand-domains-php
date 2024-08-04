import {useState, FormEvent} from "react";

import AppLayout from "@/Layouts/AppLayout";
import GlobeIcon from "@/Components/GlobeIcon";
import GenerationForm from "@/Components/GenerationForm";

import axios from "axios";
import toast from "react-hot-toast";
import {SplitString} from "@/Utility/StringUtility";
import DomainContainer from "@/Components/DomainContainer";

export default function Index() {
    const [loading, setLoading] = useState<boolean>(false);
    const [disabled, setDisabled] = useState<boolean>(false);
    const [generatedDomains, setGeneratedDomains] = useState<string[]>([]);

    const submitHandler = async (event: FormEvent<HTMLFormElement>, keywords: string, extensions: string, description: string) : Promise<void> => {
        event.preventDefault();

        if (!disabled) {
            setLoading(true);
            setGeneratedDomains([]);

            try {
                const response = await axios.post<{ domains: string[] }>(route('generate.post'), { keywords, extensions, description });
                const domains: string[] = [];

                for (let domain of response.data.domains) {
                    for (let extension of SplitString(extensions)) {
                        domains.push(domain.toLowerCase() + extension);
                    }
                }

                setGeneratedDomains(domains);
            } catch (error) {
                console.error(error);
                toast.error('There was an unexpected error!');
            }

            setLoading(false);
        }
    };

    return (
        <AppLayout>
            <section className="container mx-auto px-10 flex flex-col mb-10 gap-10 lg:flex-row lg:h-[80vh] lg:gap-24">
                <div className="flex-1 flex flex-col justify-center items-center">
                    <div className="w-full">
                        <h2 className="text-base font-bold mb-1 md:text-xl">Generate Domain Names</h2>

                        <p className="text-xs text-neutral-500 font-light mb-5 md:text-base">
                            Answer three short questions to get suggestions that are a great fit for your brand.
                        </p>
                        <ol className="list-decimal text-xs text-neutral-500 font-light mb-5 px-5 md:text-base">
                            <li>What keywords are associated with your brand?</li>
                            <li>What should your domain end in? (<a href={`${route('howto')}#ValidDomainExtensions`} className="text-neutral-950 hover:underline">List of valid domain extensions</a>)</li>
                            <li>Please describe your brand in 1-2 sentences.</li>
                        </ol>

                        <GenerationForm handleSubmit={submitHandler} disableSetter={setDisabled} loading={loading} />
                    </div>
                </div>
                {generatedDomains.length > 0 ? (
                    <div className={`flex-1 space-y-5 overflow-auto px-0 lg:px-10`}>
                        {generatedDomains.map((domain, index: number) => (<DomainContainer key={index}  domain={domain}/>))}
                    </div>
                ) : (
                    <div
                        className={`flex-1 flex flex-col justify-center items-center text-center border-8 ${loading ? 'animate-pulse border-neutral-300' : 'border-neutral-200'} border-dashed rounded-xl select-none p-5 lg:gap-10`}>
                            <GlobeIcon className={`size-20 ${loading ? 'text-neutral-300' : 'text-neutral-200'} md:size-32`}/>
                            <h2 className={`text-base font-extrabold px-10 ${loading ? 'text-neutral-300' : 'text-neutral-200'} md:text-3xl`}>Let's
                                find you the perfect domain for your brand!</h2>
                        </div>
                )}
            </section>
        </AppLayout>
    );
}
